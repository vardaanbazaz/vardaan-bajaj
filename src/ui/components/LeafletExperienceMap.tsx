import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_DATA, MapLocationNode, MapRole } from '../../data/manuscript_config';

interface LeafletExperienceMapProps {
  onSelectRecord?: (node: MapLocationNode) => void;
}

export const LeafletExperienceMap: React.FC<LeafletExperienceMapProps> = ({
  onSelectRecord,
}) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [activeNode, setActiveNode] = useState<MapLocationNode | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous map instance if re-initializing
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // View is set below by fitting the bounds of the active tab's pins
    const map = L.map(containerRef.current, {
      preferCanvas: true,
      zoomControl: true,
      attributionControl: true,
    });

    mapInstanceRef.current = map;

    // OSM standard tiles, CSS-inverted to dark. Keyless, no third-party
    // service dependency (CARTO's keyless dark_all endpoint was deprecated
    // and now requires an API key — see git history).
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: 'abc',
      className: 'map-tiles-dark',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const currentDataset: MapLocationNode[] = MAP_DATA[activeTab];
    const latLngs: L.LatLngTuple[] = [];

    currentDataset.forEach((node) => {
      const coords: L.LatLngTuple = [node.coords[0], node.coords[1]];
      latLngs.push(coords);

      let iconHtml = '';

      if (node.type === 'remote-hub') {
        // REMOTE-HUB: Pulsing signal wave for Naya Raipur
        iconHtml = `
          <div class="relative w-8 h-8 flex items-center justify-center cursor-pointer">
            <span class="absolute inset-0 rounded-full bg-lamp animate-ping"></span>
            <div class="relative w-6 h-6 rounded-full bg-lamp flex items-center justify-center font-mono text-xs font-bold text-ink">
              ★
            </div>
          </div>
        `;
      } else if (node.type === 'hybrid') {
        // HYBRID: Dual-ring circle
        iconHtml = `
          <div class="w-6 h-6 rounded-full border-2 border-lamp bg-night flex items-center justify-center cursor-pointer">
            <div class="w-2.5 h-2.5 rounded-full bg-lamp"></div>
          </div>
        `;
      } else {
        // ONSITE: Solid dot
        iconHtml = `
          <div class="w-5 h-5 rounded-full bg-lamp flex items-center justify-center cursor-pointer">
            <div class="w-1.5 h-1.5 rounded-full bg-night"></div>
          </div>
        `;
      }

      // Explicit className: '' removes default Leaflet white box outlines!
      const customIcon = L.divIcon({
        className: '',
        html: iconHtml,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker(coords, { icon: customIcon, title: node.label, alt: node.label }).addTo(map);

      marker.on('click', () => {
        setActiveNode(node);
        if (onSelectRecord) {
          onSelectRecord(node);
        }
      });
    });

    // Connect points chronologically with dashed SVG polylines in the lamp token
    if (latLngs.length > 1) {
      L.polyline(latLngs, {
        color: getComputedStyle(document.documentElement).getPropertyValue('--color-lamp').trim(),
        weight: 2.5,
        dashArray: '6, 6',
      }).addTo(map);
    }

    // Frame all pins; maxZoom keeps a single-pin tab from zooming in too far
    const fitPins = () => {
      if (latLngs.length > 0) {
        map.fitBounds(L.latLngBounds(latLngs), { padding: [60, 60], maxZoom: 6 });
      }
    };
    fitPins();

    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        fitPins();
      }
    }, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [activeTab, onSelectRecord]);

  return (
    <>
      <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden bg-night">
        {/* MAP CANVAS */}
        <div ref={containerRef} className="w-full h-full min-h-[500px]" />

        {/* TOGGLE SWITCH AT TOP CENTER */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center space-x-1 glass p-1.5 rounded-lg border">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-1.5 text-sm font-mono rounded transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-sunset text-ink font-bold pressable press-shift'
                : 'text-lamp hover:underline underline-offset-4'
            }`}
          >
            Work experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-1.5 text-sm font-mono rounded transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-sunset text-ink font-bold pressable press-shift'
                : 'text-lamp hover:underline underline-offset-4'
            }`}
          >
            Education
          </button>
        </div>

        {/* BOTTOM LEGEND OVERLAY */}
        <div className="absolute bottom-4 left-4 z-[1000] glass p-3 rounded-lg border text-sm font-mono text-lamp space-y-1.5">
          <div className="font-bold mb-1 border-b border-edge pb-0.5 tracking-wide">
            Location types:
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lamp inline-block"></span>
            <span>On-site Role</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full border border-lamp bg-night flex items-center justify-center">
              <span className="w-1 h-1 bg-lamp rounded-full"></span>
            </span>
            <span>Hybrid Role</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lamp animate-ping inline-block"></span>
            <span>Remote Role</span>
          </div>
        </div>
      </div>

      {/* ACTIVE MODAL OVERLAY ON MARKER CLICK (PORTALED TO BODY) */}
      {/* data-room: the portal sits outside the layout root, so it names its room itself */}
      {activeNode && createPortal(
        <div data-room="map" className="fixed inset-0 z-[9999] flex items-center justify-center bg-night/90 p-4 pointer-events-auto">
          {/* 1. Rigid Outer Panel */}
          <div className="bg-card w-full max-w-2xl max-h-[85vh] h-auto relative rounded-lg border raised text-lamp flex flex-col overflow-hidden">
            {/* 2. Fixed Close Button */}
            <button
              onClick={() => setActiveNode(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-tag text-lamp rounded-full font-serif hover:scale-105 transition-transform flex items-center justify-center z-50 cursor-pointer"
            >
              X
            </button>

            {/* 3. Inner Scrolling Content */}
            <div className="p-8 md:p-12 overflow-y-auto custom-paper-scrollbar flex-grow relative">
              <p className="font-mono text-sm text-lamp tracking-wide mb-8">
                {activeNode.label}
              </p>

              {activeNode.roles.map((role: MapRole, i: number) => (
                <div key={i} className="mb-10 pb-10 border-b border-dashed border-edge last:border-0 last:mb-0 last:pb-0">
                  <h3 className="font-serif text-2xl font-bold mb-1 text-lamp pr-12 leading-tight">
                    {role.title}
                  </h3>
                  <h4 className="font-serif text-lg italic text-lamp mb-4">
                    {role.org}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-block px-3 py-1 rounded bg-box border border-edge well room-chip font-mono text-xs tracking-wide text-lamp">
                      {role.year}
                    </span>
                    <span className="inline-block px-3 py-1 rounded bg-box border border-edge well room-chip font-mono text-xs tracking-wide text-lamp">
                      {role.type}
                    </span>
                  </div>
                  <ul className="font-sans text-base leading-relaxed space-y-3 list-disc pl-5 marker:text-lamp text-lamp">
                    {role.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="pl-1">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default LeafletExperienceMap;

