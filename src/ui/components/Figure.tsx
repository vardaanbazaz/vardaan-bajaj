import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: React.ReactNode;
  className?: string;
  // Case-study figures only: wraps the image in a button that opens it in a native <dialog>
  enlargeable?: boolean;
}

// Must match the max-width media query for the pan/zoom dialog in index.css
const NARROW_QUERY = '(max-width: 799.98px)';
const ZOOM_STEP = 1.25;
// Plate chrome around the image: 14px padding + 1px border on each side (.figure-dialog-plate)
const PLATE_CHROME = 30;

interface ZoomBounds {
  min: number;
  max: number;
}

// A point (in viewport px) that must stay put across the next width change
interface ZoomAnchor {
  clientX: number;
  clientY: number;
}

// The anchor plus its offset inside the image box at the last committed width
interface PendingAnchor extends ZoomAnchor {
  imgX: number;
  imgY: number;
}

const isNarrow = () => typeof window !== 'undefined' && window.matchMedia(NARROW_QUERY).matches;

const clamp = (value: number, { min, max }: ZoomBounds) => Math.min(max, Math.max(min, value));

// Chart on a light linen plate in both themes (no dark variants of figures), inside the shared `frame`
export const Figure: React.FC<FigureProps> = ({ src, alt, width, height, caption, className = '', enlargeable = false }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const zoomImgRef = useRef<HTMLImageElement>(null);
  // Tracked in a plain ref: DOM refs are already null when an unmount cleanup runs
  const lockedRef = useRef(false);
  const imgId = useId();

  // Below 800px only: image width in CSS px. null until the first open, so CSS supplies the first paint
  const [zoom, setZoom] = useState<number | null>(null);
  const [bounds, setBounds] = useState<ZoomBounds | null>(null);
  // Latest requested width, ahead of the render, so several wheel/pinch events in one frame compound
  const zoomRef = useRef<number | null>(null);
  const anchorRef = useRef<PendingAnchor | null>(null);
  // Width the DOM last rendered with; the layout effect scales the anchor by zoom / this
  const committedRef = useRef<number | null>(null);
  const resetScrollRef = useRef(false);
  // Mouse drag-to-pan
  const dragRef = useRef<{ id: number; x: number; y: number; left: number; top: number } | null>(null);
  // Touch pinch: active touch pointers by id, and the finger distance at the last applied step
  const touchesRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchDistRef = useRef<number | null>(null);

  // Restore body scroll if the page unmounts (route change, e.g. Back) while the dialog is open
  useEffect(() => () => {
    if (lockedRef.current) document.body.style.overflow = '';
  }, []);

  // Min = the image width at which the whole plate fits across the scroll area; max = natural width x 1.5
  const readBounds = (): ZoomBounds | null => {
    const scroller = scrollRef.current;
    if (!scroller) return null;
    const style = getComputedStyle(scroller);
    const inner = scroller.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const max = width * 1.5;
    const min = Math.min(max, Math.max(1, Math.floor(inner - PLATE_CHROME)));
    return { min, max };
  };

  // Centre of the visible part of the scroll area, in viewport px
  const viewCentre = (): ZoomAnchor | null => {
    const scroller = scrollRef.current;
    if (!scroller) return null;
    const r = scroller.getBoundingClientRect();
    return {
      clientX: r.left + scroller.clientLeft + scroller.clientWidth / 2,
      clientY: r.top + scroller.clientTop + scroller.clientHeight / 2,
    };
  };

  // Request a new width, clamped to the bounds. The anchor (default: view centre) stays put when the layout
  // effect applies the width
  const zoomTo = (next: number, anchor: ZoomAnchor | null = null) => {
    const b = readBounds();
    const img = zoomImgRef.current;
    if (!b || !img) return;
    setBounds(b);
    const current = zoomRef.current ?? clamp(Math.min(1000, width), b);
    const target = clamp(next, b);
    if (Math.abs(target - current) < 0.01) return;
    // Several events can land before one render: keep the first anchor, measured against the committed layout
    if (!anchorRef.current) {
      const a = anchor ?? viewCentre();
      if (a) {
        const rect = img.getBoundingClientRect();
        anchorRef.current = { ...a, imgX: a.clientX - rect.left, imgY: a.clientY - rect.top };
      }
    }
    zoomRef.current = target;
    setZoom(target);
  };

  const zoomBy = (factor: number, anchor: ZoomAnchor | null = null) => {
    const b = readBounds();
    if (!b) return;
    zoomTo((zoomRef.current ?? clamp(Math.min(1000, width), b)) * factor, anchor);
  };

  // Same frame as the width change, no animation: the anchor's content coordinates scale by new/old width, then
  // scroll so that point is back under the anchor. Measured from the image box, so scroll padding, plate chrome
  // and auto-margin centring cancel out
  useLayoutEffect(() => {
    const scroller = scrollRef.current;
    const img = zoomImgRef.current;
    const prev = committedRef.current;
    committedRef.current = zoom;
    const anchor = anchorRef.current;
    anchorRef.current = null;
    if (!scroller || !img || zoom === null) return;
    if (resetScrollRef.current) {
      resetScrollRef.current = false;
      scroller.scrollLeft = 0;
      scroller.scrollTop = 0;
      return;
    }
    if (!anchor || prev === null || prev === zoom) return;
    const ratio = zoom / prev;
    const rect = img.getBoundingClientRect();
    scroller.scrollLeft += rect.left + anchor.imgX * ratio - anchor.clientX;
    scroller.scrollTop += rect.top + anchor.imgY * ratio - anchor.clientY;
  }, [zoom]);

  // Keep bounds current while open (rotation, window resize); re-clamp the width if it fell outside them
  useEffect(() => {
    if (!enlargeable) return;
    const onResize = () => {
      if (!dialogRef.current?.open || !isNarrow()) return;
      const b = readBounds();
      if (!b) return;
      setBounds(b);
      if (zoomRef.current !== null) zoomTo(zoomRef.current);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  // Ctrl/Cmd + wheel (how a trackpad pinch arrives in Chromium and Firefox) zooms at the pointer, below 800px
  // only. Plain wheel stays native scrolling; at 800px+ the browser's own page zoom is left alone
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!enlargeable || !scroller) return;
    const onWheel = (e: WheelEvent) => {
      if (!(e.ctrlKey || e.metaKey) || !isNarrow()) return;
      e.preventDefault();
      // Line-mode deltas (Firefox mouse wheel) to px
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      zoomBy(Math.exp(-delta * 0.01), { clientX: e.clientX, clientY: e.clientY });
    };
    scroller.addEventListener('wheel', onWheel, { passive: false });
    return () => scroller.removeEventListener('wheel', onWheel);
  });

  const img = (
    <img
      id={enlargeable ? imgId : undefined}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full"
    />
  );

  if (!enlargeable) {
    return (
      <figure className={`m-0 min-w-0 ${className}`}>
        <div className="frame">{img}</div>
        <figcaption className="mt-3.5 text-sm text-muted">{caption}</figcaption>
      </figure>
    );
  }

  // Caption is a ReactNode; fall back to the alt text when it is not a plain string
  const label = `Enlarge figure: ${typeof caption === 'string' ? caption : alt}`;

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    document.body.style.overflow = 'hidden';
    lockedRef.current = true;
    dialog.showModal();
    // Below 800px the plate pans inside this area; never reopen scrolled or zoomed from the last visit
    const scroller = scrollRef.current;
    if (scroller) {
      scroller.scrollLeft = 0;
      scroller.scrollTop = 0;
      delete scroller.dataset.dragging;
    }
    dragRef.current = null;
    touchesRef.current.clear();
    pinchDistRef.current = null;
    anchorRef.current = null;
    const b = readBounds();
    if (b) {
      const start = clamp(Math.min(1000, width), b);
      setBounds(b);
      // Scroll is already 0,0; only a width change needs the layout effect to re-zero it (and skip anchoring).
      // An unchanged width does not re-render, so a flag set then would leak into the next zoom
      resetScrollRef.current = zoomRef.current !== start;
      zoomRef.current = start;
      setZoom(start);
    }
  };

  // Fires for Esc, the Close button and backdrop clicks; the native dialog returns focus to the trigger
  const onClose = () => {
    document.body.style.overflow = '';
    lockedRef.current = false;
  };

  // The dialog fills the viewport, so a click whose target is the dialog itself landed outside the plate
  const onDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) e.currentTarget.close();
  };

  const midpoint = () => {
    const [a, b] = [...touchesRef.current.values()];
    return { clientX: (a.x + b.x) / 2, clientY: (a.y + b.y) / 2, dist: Math.hypot(a.x - b.x, a.y - b.y) };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isNarrow()) return;
    const scroller = e.currentTarget;
    if (e.pointerType === 'touch') {
      touchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      // Re-baseline whenever the finger set changes, so the scale never jumps
      pinchDistRef.current = touchesRef.current.size === 2 ? midpoint().dist : null;
      return;
    }
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    // Leave the scrollbars to the browser
    const rect = scroller.getBoundingClientRect();
    if (e.clientX - rect.left >= scroller.clientLeft + scroller.clientWidth || e.clientY - rect.top >= scroller.clientTop + scroller.clientHeight) return;
    dragRef.current = { id: e.pointerId, x: e.clientX, y: e.clientY, left: scroller.scrollLeft, top: scroller.scrollTop };
    scroller.setPointerCapture(e.pointerId);
    scroller.dataset.dragging = '';
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = e.currentTarget;
    if (e.pointerType === 'touch') {
      if (!touchesRef.current.has(e.pointerId)) return;
      touchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touchesRef.current.size !== 2 || pinchDistRef.current === null) return;
      const { clientX, clientY, dist } = midpoint();
      if (pinchDistRef.current <= 0 || dist <= 0) return;
      const factor = dist / pinchDistRef.current;
      pinchDistRef.current = dist;
      zoomBy(factor, { clientX, clientY });
      return;
    }
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    scroller.scrollLeft = drag.left - (e.clientX - drag.x);
    scroller.scrollTop = drag.top - (e.clientY - drag.y);
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') {
      touchesRef.current.delete(e.pointerId);
      pinchDistRef.current = touchesRef.current.size === 2 ? midpoint().dist : null;
      return;
    }
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    dragRef.current = null;
    delete e.currentTarget.dataset.dragging;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Buttons zoom around the view centre
  const atMin = zoom !== null && bounds !== null && zoom <= bounds.min + 0.5;
  const atMax = zoom !== null && bounds !== null && zoom >= bounds.max - 0.5;
  const zoomButton = 'min-h-11 min-w-11 shrink-0 cursor-pointer px-2 text-sm text-text hover:text-link-hover';

  return (
    <figure className={`m-0 min-w-0 ${className}`}>
      {/* Before the button: figcaption must stay the figure's last child */}
      <dialog ref={dialogRef} className="figure-dialog" aria-label={alt} onClose={onClose} onClick={onDialogClick}>
        <div className="figure-dialog-body">
          {/* Below 800px: the pan/zoom area; the plate shows at the zoom width (CSS fallback min(1000px, natural
              width) before the first open). No styles at 800px+ */}
          <div
            ref={scrollRef}
            className="figure-dialog-scroll"
            style={{ '--figure-natural-width': `${width}px` } as React.CSSProperties}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
          >
            <div className="figure-dialog-plate">
              <img
                ref={zoomImgRef}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                draggable={false}
                // Read only inside the max-width: 799.98px block, so 800px+ keeps its own sizing
                style={zoom === null ? undefined : ({ '--figure-zoom-width': `${zoom}px` } as React.CSSProperties)}
              />
            </div>
          </div>
          <div className="figure-dialog-footer mt-3 flex items-start justify-between gap-6">
            <div className="figure-dialog-caption">
              <p className="m-0 text-sm text-muted">{caption}</p>
              <p className="figure-dialog-hint m-0 mt-1 text-sm text-muted">Drag to pan. Pinch or use the buttons to zoom.</p>
            </div>
            {/* Below 800px only (display: none at 800px+) */}
            <div className="figure-dialog-zoom">
              <button
                type="button"
                className={zoomButton}
                aria-label="Zoom out"
                aria-disabled={atMin}
                onClick={() => {
                  if (!atMin) zoomBy(1 / ZOOM_STEP);
                }}
              >
                <span className="underline-inset">−</span>
              </button>
              <button
                type="button"
                className={zoomButton}
                aria-label="Zoom in"
                aria-disabled={atMax}
                onClick={() => {
                  if (!atMax) zoomBy(ZOOM_STEP);
                }}
              >
                <span className="underline-inset">+</span>
              </button>
              <button
                type="button"
                className={zoomButton}
                aria-label="Fit figure to screen"
                aria-disabled={atMin}
                onClick={() => {
                  const b = readBounds();
                  if (!atMin && b) zoomTo(b.min);
                }}
              >
                <span className="underline-inset">Fit</span>
              </button>
            </div>
            <button
              type="button"
              className="min-h-11 min-w-11 shrink-0 cursor-pointer px-2 text-sm text-text hover:text-link-hover"
              onClick={() => dialogRef.current?.close()}
            >
              <span className="underline-inset">Close</span>
            </button>
          </div>
        </div>
      </dialog>
      <button type="button" className="figure-trigger frame" aria-label={label} aria-describedby={imgId} onClick={open}>
        {img}
      </button>
      <figcaption className="mt-3.5 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
};

export default Figure;
