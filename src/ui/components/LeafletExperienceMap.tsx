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
            <span class="absolute inset-0 rounded-full bg-[#CF9E4F]/60 animate-ping"></span>
            <div class="relative w-6 h-6 rounded-full bg-[#8C7335] border-2 border-[#CF9E4F] shadow-[0_0_12px_rgba(207,158,79,0.9)] flex items-center justify-center font-mono text-[10px] font-bold text-[#f4efe6]">
              ★
            </div>
          </div>
        `;
      } else if (node.type === 'hybrid') {
        // HYBRID: Dual-ring circle
        iconHtml = `
          <div class="w-6 h-6 rounded-full border-2 border-[#CF9E4F] bg-[#18110c] flex items-center justify-center cursor-pointer shadow-[0_0_10px_rgba(207,158,79,0.8)]">
            <div class="w-2.5 h-2.5 rounded-full border border-[#CF9E4F] bg-[#8C7335]"></div>
          </div>
        `;
      } else {
        // ONSITE: Solid brass dot
        iconHtml = `
          <div class="w-5 h-5 rounded-full bg-[#8C7335] border-2 border-[#CF9E4F] shadow-[0_0_10px_rgba(207,158,79,0.8)] flex items-center justify-center cursor-pointer">
            <div class="w-1.5 h-1.5 rounded-full bg-[#f4efe6]"></div>
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

      const marker = L.marker(coords, { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setActiveNode(node);
        if (onSelectRecord) {
          onSelectRecord(node);
        }
      });
    });

    // Connect points chronologically with dashed gold SVG polylines
    if (latLngs.length > 1) {
      L.polyline(latLngs, {
        color: '#CF9E4F',
        weight: 2.5,
        dashArray: '6, 6',
        opacity: 0.85,
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
      <div className="relative w-full h-full min-h-[500px] rounded-lg border border-[#8C7335]/30 overflow-hidden shadow-2xl bg-[#100b08]">
        {/* MAP CANVAS */}
        <div ref={containerRef} className="w-full h-full min-h-[500px]" />

        {/* TOGGLE SWITCH AT TOP CENTER */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center space-x-1 bg-black/90 p-1.5 rounded-lg border border-[#8C7335]/60 shadow-xl">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-1.5 text-xs font-mono rounded transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-[#8C7335] text-[#f4efe6] font-bold border border-[#CF9E4F]/60 shadow-[0_0_10px_rgba(207,158,79,0.5)]'
                : 'text-[#d4a37f] hover:text-[#f4efe6]'
            }`}
          >
            [WORK EXPERIENCE]
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-1.5 text-xs font-mono rounded transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-[#8C7335] text-[#f4efe6] font-bold border border-[#CF9E4F]/60 shadow-[0_0_10px_rgba(207,158,79,0.5)]'
                : 'text-[#d4a37f] hover:text-[#f4efe6]'
            }`}
          >
            [EDUCATION]
          </button>
        </div>

        {/* BOTTOM LEGEND OVERLAY */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-black/85 p-3 rounded-lg border border-[#8C7335]/30 text-[10px] font-mono text-[#eadfc9] space-y-1.5">
          <div className="font-bold text-[#CF9E4F] mb-1 border-b border-[#8C7335]/20 pb-0.5 uppercase tracking-wider">
            LOCATION TYPES:
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C7335] border border-[#CF9E4F] inline-block"></span>
            <span>On-site Role</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full border border-[#CF9E4F] bg-[#18110c] flex items-center justify-center">
              <span className="w-1 h-1 bg-[#8C7335] rounded-full"></span>
            </span>
            <span>Hybrid Role</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CF9E4F] animate-ping inline-block"></span>
            <span>Remote Role</span>
          </div>
        </div>

        {/* TELEMETRY BADGE */}
        <div className="absolute top-4 right-4 z-[1000] bg-black/80 px-3 py-1 rounded border border-[#8C7335]/30 text-[10px] font-mono text-[#CF9E4F]">
          [MAP CENTER: INDIA (25.0, 78.5)]
        </div>
      </div>

      {/* ACTIVE MODAL OVERLAY ON MARKER CLICK (PORTALED TO BODY) */}
      {activeNode && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pointer-events-auto">
          {/* 1. Rigid Outer Paper Container */}
          <div className="bg-[#FDF6E3] w-full max-w-2xl max-h-[85vh] h-auto relative rounded-sm border border-[#E0D8C3] shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-[#3E3832] flex flex-col overflow-hidden">
            {/* 2. Fixed Wax Seal Button */}
            <button
              onClick={() => setActiveNode(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-[#7A3B3B] text-[#FDF6E3] rounded-full shadow-md border-2 border-[#4A1C1C] font-serif hover:scale-105 transition-transform flex items-center justify-center z-50 cursor-pointer"
            >
              X
            </button>

            {/* 3. Inner Scrolling Content */}
            <div className="p-8 md:p-12 overflow-y-auto custom-paper-scrollbar flex-grow relative">
              <p className="font-mono text-[10px] md:text-xs text-[#8C7335] uppercase tracking-widest mb-8">
                [ROLE DETAILS // {activeNode.type.toUpperCase()}]<br/>
                LOCATION: [{activeNode.coords[0]}, {activeNode.coords[1]}]
              </p>

              {activeNode.roles.map((role: MapRole, i: number) => (
                <div key={i} className="mb-10 pb-10 border-b border-dashed border-[#C5A880]/40 last:border-0 last:mb-0 last:pb-0">
                  <h3 className="font-serif text-2xl font-bold mb-1 text-[#2A241F] pr-12 leading-tight">
                    {role.title}
                  </h3>
                  <h4 className="font-serif text-lg italic text-[#5C4F44] mb-4">
                    {role.org}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-block px-3 py-1 bg-[#E0D8C3]/40 border border-[#C5A880]/30 font-mono text-xs uppercase tracking-widest text-[#8C7335]">
                      {role.year}
                    </span>
                    <span className="inline-block px-3 py-1 bg-[#E0D8C3]/40 border border-[#C5A880]/30 font-mono text-xs uppercase tracking-widest text-[#8C7335]">
                      {role.type}
                    </span>
                  </div>
                  <ul className="font-sans text-base leading-relaxed space-y-3 list-disc pl-5 marker:text-[#8C7335] text-[#3E3832]">
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

