import React, { useEffect, useId, useRef } from 'react';

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

// Chart on a light linen plate in both themes (no dark variants of figures), inside the shared `frame`
export const Figure: React.FC<FigureProps> = ({ src, alt, width, height, caption, className = '', enlargeable = false }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Tracked in a plain ref: DOM refs are already null when an unmount cleanup runs
  const lockedRef = useRef(false);
  const imgId = useId();

  // Restore body scroll if the page unmounts (route change, e.g. Back) while the dialog is open
  useEffect(() => () => {
    if (lockedRef.current) document.body.style.overflow = '';
  }, []);

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

  return (
    <figure className={`m-0 min-w-0 ${className}`}>
      {/* Before the button: figcaption must stay the figure's last child */}
      <dialog ref={dialogRef} className="figure-dialog" aria-label={alt} onClose={onClose} onClick={onDialogClick}>
        <div className="figure-dialog-body">
          <div className="figure-dialog-plate">
            <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
          </div>
          <div className="mt-3 flex items-start justify-between gap-6">
            <p className="m-0 text-sm text-muted">{caption}</p>
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
