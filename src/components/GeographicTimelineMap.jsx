import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const experienceData = [
  { 
    id: 'hyderabad', coords: [17.3850, 78.4867], type: 'hybrid', 
    roles: [{ 
      title: 'Research And Development Intern', org: 'DRDO', type: 'Hybrid', year: 'Jan 2026 - Jun 2026', 
      bullets: [
        'Engineered a real-time radar DSP framework in C to simulate aerospace echo telemetry and high-frequency communication links.',
        'Implemented an in-place double-precision Radix-2 FFT and peak-detection algorithm to compute altitude from simulated up/down-chirps under AWGN.',
        'Designed telemetry packet serialization over RS-422 sliding-window buffers and simulated a MIL-STD-1553 Remote Terminal.',
        'Architected a lock-free state machine utilizing C11 atomic variables, eliminating thread race conditions and execution jitter.'
      ] 
    }] 
  },
  { 
    id: 'raipur-exp', coords: [21.1610, 81.7850], type: 'remote', 
    roles: [
      { 
        title: 'Founding AI & Full-Stack Engineer Intern', org: 'AgryBin', type: 'Remote', year: 'May 2025 - Aug 2025', 
        bullets: [
          'Architected and built the complete agritech platform from scratch, spanning PyTorch computer vision pipelines, backend microservices, web interface, and Android application.',
          'Processed 50K+ geospatial tiles across multi-spectral datasets, improving crop segmentation accuracy by 17% via dynamic augmentations.',
          'Developed low-latency FastAPI inference microservices maintaining <120ms latency for live satellite analytics.',
          'Built the cross-platform Android application and responsive web client to deliver live vegetation indices and spatial field insights to users.'
        ] 
      },
      { 
        title: 'Data Science & Frontend Intern', org: 'Mahyco', type: 'Remote', year: 'Aug 2024 - Dec 2024', 
        bullets: [
          'Constructed an automated crop yield estimation and tracking pipeline analyzing high-resolution aerial imagery.',
          'Implemented YOLO-based object detection and spatial analytics across 20K+ drone images.',
          'Designed responsive data visualization dashboards and automated Python report pipelines, boosting operational review efficiency by 23%.',
          'Built modular frontend interfaces and collaborated on RESTful backend integrations for field analytics.'
        ] 
      }
    ] 
  },
  { 
    id: 'jammu-exp', coords: [32.7266, 74.8570], type: 'onsite', 
    roles: [{ 
      title: 'Full-Stack Developer Apprentice', org: 'University of Jammu', type: 'On-site', year: 'Jun 2024 - Aug 2024', 
      bullets: [
        'Engineered core modules for an institutional Hostel Management System as part of a university engineering apprenticeship.',
        'Developed responsive, reusable UI components using React.js and modern JavaScript.',
        'Integrated client-side state management with backend REST APIs and relational database schemas for student records.',
        'Streamlined administrative record-keeping and room allocation workflows across campus facilities.'
      ] 
    }] 
  }
];

const educationData = [
  { 
    id: 'raipur-edu', coords: [21.1610, 81.7850], type: 'onsite', 
    roles: [{ 
      title: 'B.Tech, Data Science & Artificial Intelligence', org: 'Dr. SPM IIIT Naya Raipur', type: 'On-site', year: 'Nov 2022 - Jul 2026', 
      bullets: [
        'Grade: 80.7% (CGPA: 7.57 / 10.0)',
        'Focused on core computer science foundations, statistical learning, and systems engineering.',
        'Core Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Deep Learning, Distributed Systems, Linear Algebra & Probability.',
        'Research Focus: Edge AI inference optimization, computer vision pipelines, and digital signal processing.'
      ] 
    }] 
  }
];

const onsiteIcon = L.divIcon({ 
  className: 'bg-transparent border-0', 
  html: `<div class="w-4 h-4 bg-[#CF9E4F] rounded-full shadow-[0_0_15px_rgba(207,158,79,1)] border-2 border-[#110E0C]"></div>`, 
  iconSize: [16, 16], 
  iconAnchor: [8, 8] 
});

const hybridIcon = L.divIcon({ 
  className: 'bg-transparent border-0', 
  html: `<div class="relative flex items-center justify-center"><div class="absolute w-6 h-6 border-[1.5px] border-[#CF9E4F] rounded-full"></div><div class="w-3 h-3 bg-[#CF9E4F] rounded-full border-2 border-[#110E0C]"></div></div>`, 
  iconSize: [24, 24], 
  iconAnchor: [12, 12] 
});

const remoteIcon = L.divIcon({ 
  className: 'bg-transparent border-0', 
  html: `<div class="relative flex items-center justify-center"><div class="absolute w-12 h-12 border border-[#CF9E4F] rounded-full animate-ping opacity-60"></div><div class="w-4 h-4 bg-[#110E0C] border-2 border-[#CF9E4F] rounded-sm relative z-10"></div></div>`, 
  iconSize: [48, 48], 
  iconAnchor: [24, 24] 
});

const getIcon = (type) => {
  if (type === 'hybrid') return hybridIcon;
  if (type === 'remote') return remoteIcon;
  return onsiteIcon;
};

export default function GeographicTimelineMap() {
  const [activeTab, setActiveTab] = useState('experience');
  const [activeTelegram, setActiveTelegram] = useState(null);

  const activeData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <div className="relative w-full h-[600px] border-4 border-[#8C7335] shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#110E0C] rounded-sm flex flex-col font-mono select-none">
      
      {/* Top Instrument Radar Switcher */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[400] bg-[#1E1F1A]/95 border-2 border-[#8C7335] p-1.5 rounded-sm shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-sm flex items-center gap-1 font-mono">
        <button
          onClick={() => {
            setActiveTab('experience');
            setActiveTelegram(null);
          }}
          className={`px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold rounded-xs transition-all cursor-pointer ${
            activeTab === 'experience'
              ? 'bg-[#CF9E4F] text-[#110E0C] shadow-[0_0_10px_rgba(207,158,79,0.5)] border border-[#CF9E4F]'
              : 'text-[#8C7335] hover:text-[#CF9E4F] hover:bg-[#8C7335]/10'
          }`}
        >
          Operational History
        </button>
        <div className="w-[1px] h-4 bg-[#8C7335]/40" />
        <button
          onClick={() => {
            setActiveTab('education');
            setActiveTelegram(null);
          }}
          className={`px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold rounded-xs transition-all cursor-pointer ${
            activeTab === 'education'
              ? 'bg-[#CF9E4F] text-[#110E0C] shadow-[0_0_10px_rgba(207,158,79,0.5)] border border-[#CF9E4F]'
              : 'text-[#8C7335] hover:text-[#CF9E4F] hover:bg-[#8C7335]/10'
          }`}
        >
          Training Grounds
        </button>
      </div>

      {/* Frame Status Tags */}
      <div className="absolute top-3 left-3 text-[#8C7335] text-[10px] tracking-widest z-[400] pointer-events-none bg-[#110E0C]/80 px-2 py-1 rounded-xs border border-[#8C7335]/30 hidden md:block">
        RADAR // {activeTab.toUpperCase()}
      </div>

      <div className="absolute top-3 right-3 text-[#8C7335] text-[10px] tracking-widest z-[400] pointer-events-none bg-[#110E0C]/80 px-2 py-1 rounded-xs border border-[#8C7335]/30 hidden md:block">
        LEAFLET OSINT V3.0
      </div>

      <div className="absolute bottom-3 left-3 text-stone-500 text-[10px] tracking-widest z-[400] pointer-events-none bg-[#110E0C]/80 px-2 py-1 rounded-xs border border-[#8C7335]/30 hidden sm:block">
        SECURITY CLEARANCE: LEVEL-III
      </div>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-4 right-4 bg-[#1E1F1A]/95 border border-[#8C7335]/50 p-3 rounded-sm z-[400] text-[11px] space-y-1.5 shadow-xl backdrop-blur-sm hidden sm:block">
        <p className="text-[#CF9E4F] font-bold uppercase tracking-wider text-[10px] border-b border-[#8C7335]/30 pb-1 mb-1">
          Deployment Legend
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#CF9E4F] rounded-full border border-black inline-block" />
          <span className="text-stone-300">On-Site Base</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-transparent border-[1.5px] border-[#CF9E4F] rounded-full inline-block" />
          <span className="text-stone-300">Hybrid Facility</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#110E0C] border border-[#CF9E4F] rounded-sm inline-block" />
          <span className="text-stone-300">Remote Operations</span>
        </div>
      </div>

      {/* Leaflet Map Container */}
      <MapContainer 
        center={[25.0, 78.5]} 
        zoom={4.2} 
        minZoom={4} 
        maxBounds={[[-90, -180], [90, 180]]} 
        scrollWheelZoom={false}
        className="w-full flex-grow z-0"
      >
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
          attribution="&copy; OpenStreetMap & Carto" 
          noWrap={true} 
        />

        {activeData.map(node => (
          <Marker 
            key={node.id} 
            position={node.coords} 
            icon={getIcon(node.type)} 
            eventHandlers={{ click: () => setActiveTelegram(node) }} 
          />
        ))}
      </MapContainer>

      {/* Footer Instruction Banner */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-[400] hidden sm:block">
        <span className="bg-[#1E1F1A]/95 border border-[#8C7335]/60 px-4 py-1.5 rounded-sm text-[11px] text-[#CF9E4F] tracking-wider uppercase font-mono shadow-xl backdrop-blur-sm">
          [ CLICK ANY PIN TO INSPECT TELEGRAM DESPATCH ]
        </span>
      </div>

      {/* PINNED TELEGRAM MODAL OVERLAY */}
      {activeTelegram && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          
          <div className="bg-[#EAE1D0] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#C2B59B] relative font-mono text-[#3E3832] custom-scrollbar break-words">
            
            {/* Sticky Dark Red Wax Seal Close Button */}
            <button
              onClick={() => setActiveTelegram(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#7A3B3B] text-[#EAE1D0] rounded-full shadow-md border-2 border-[#4A2020] flex items-center justify-center font-bold hover:bg-[#924747] transition-colors cursor-pointer z-50 sticky float-right mb-4"
              title="Close Despatch"
            >
              ✕
            </button>

            {/* Telegram Header */}
            <div className="border-b-2 border-dashed border-[#9E9078] pb-4 mb-6 space-y-1 clear-both">
              <div className="flex justify-between items-center text-[10px] text-[#7A6B54] uppercase tracking-widest font-bold">
                <span>IMPERIAL CABLE TELEGRAM</span>
                <span>DESPATCH #{activeTelegram.id.toUpperCase()}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2A241D] leading-tight pt-1">
                {activeTab === 'experience' ? 'OPERATIONAL HISTORY' : 'TRAINING GROUNDS'}
              </h2>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="px-2 py-0.5 bg-[#3E3832] text-[#EAE1D0] font-bold rounded-xs text-[10px]">
                  [{activeTelegram.type.toUpperCase()}]
                </span>
                <span className="text-[#6E604C] font-bold">
                  {activeTelegram.roles.length} RECORDED DESPATCH(ES)
                </span>
              </div>
            </div>

            {/* Stacked Station Roles List with Bullets */}
            <div className="font-mono">
              {activeTelegram.roles.map((role, i) => (
                <div key={i} className="mb-8 pb-8 border-b-2 border-dashed border-[#C2B59B]/60 last:border-0 last:mb-0 last:pb-0 clear-both">
                  <h4 className="font-bold text-lg md:text-xl leading-tight mb-1 text-[#2A2621] pr-12">{role.title}</h4>
                  <h5 className="font-semibold text-stone-600 mb-2">{role.org}</h5>
                  <p className="text-xs md:text-sm opacity-80 mb-4 tracking-widest uppercase border-l-2 border-[#8C7335] pl-2 text-[#7A6B54]">
                    [{role.type}] • {role.year}
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-stone-700 marker:text-[#8C7335] font-sans">
                    {role.bullets.map((bullet, idx) => (
                      <li key={idx} className="pl-2 leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Telegram Stamp Footer */}
            <div className="border-t-2 border-dashed border-[#9E9078] pt-4 mt-6 flex justify-between items-center text-[10px] text-[#7A6B54]">
              <span>GPS COORDS: [{activeTelegram.coords[0].toFixed(4)}, {activeTelegram.coords[1].toFixed(4)}]</span>
              <span className="text-[#7A3B3B] font-bold uppercase tracking-widest">[ VERIFIED BASE ]</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}




