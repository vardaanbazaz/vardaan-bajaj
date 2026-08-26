import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const BrassAstrolabeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isContextLost, setIsContextLost] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.className = 'w-full h-full cursor-grab active:cursor-grabbing touch-none block';
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('[WebGL Astrolabe] Failed to initialize WebGL renderer:', e);
      setIsContextLost(true);
      return;
    }

    const domElement = renderer.domElement;

    // WebGL Context Lost & Restored event handling
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('[WebGL Astrolabe] Context lost event captured.');
      setIsContextLost(true);
    };

    const handleContextRestored = () => {
      console.info('[WebGL Astrolabe] Context restored event captured.');
      setIsContextLost(false);
    };

    domElement.addEventListener('webglcontextlost', handleContextLost, false);
    domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Create Brass Astrolabe Geometry Group
    const astrolabeGroup = new THREE.Group();

    // Outer Ring (Brass Material)
    const ringGeo = new THREE.TorusGeometry(1.6, 0.08, 16, 100);
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4a359,
      metalness: 0.85,
      roughness: 0.25,
    });
    const ringMesh = new THREE.Mesh(ringGeo, brassMat);
    astrolabeGroup.add(ringMesh);

    // Inner Rete Grid Rings
    const innerRingGeo1 = new THREE.TorusGeometry(1.2, 0.04, 12, 80);
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xb87333,
      metalness: 0.9,
      roughness: 0.3,
    });
    const innerRing1 = new THREE.Mesh(innerRingGeo1, copperMat);
    astrolabeGroup.add(innerRing1);

    const innerRingGeo2 = new THREE.TorusGeometry(0.8, 0.03, 12, 60);
    const innerRing2 = new THREE.Mesh(innerRingGeo2, brassMat);
    astrolabeGroup.add(innerRing2);

    // Astrolabe Sight Rule (Alidade Crossbar)
    const ruleGeo = new THREE.BoxGeometry(3.1, 0.07, 0.03);
    const ruleMesh = new THREE.Mesh(ruleGeo, brassMat);
    ruleMesh.rotation.z = Math.PI / 4;
    astrolabeGroup.add(ruleMesh);

    // Center Brass Pivot Pin
    const pivotGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 32);
    const pivotMesh = new THREE.Mesh(pivotGeo, brassMat);
    pivotMesh.rotation.x = Math.PI / 2;
    astrolabeGroup.add(pivotMesh);

    // Celestial Pointer Spokes
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.8, 12);
      const spokeMesh = new THREE.Mesh(spokeGeo, copperMat);
      spokeMesh.position.x = Math.cos(angle) * 0.5;
      spokeMesh.position.y = Math.sin(angle) * 0.5;
      spokeMesh.rotation.z = angle + Math.PI / 2;
      astrolabeGroup.add(spokeMesh);
    }

    scene.add(astrolabeGroup);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    const deskSpotLight = new THREE.DirectionalLight(0xd4a359, 2.5);
    deskSpotLight.position.set(3, 4, 5);
    scene.add(deskSpotLight);

    const copperRimLight = new THREE.PointLight(0xb87333, 2.0, 10);
    copperRimLight.position.set(-3, -2, 2);
    scene.add(copperRimLight);

    // Interactive Drag Controls
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let animationFrameId: number;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      astrolabeGroup.rotation.y += deltaX * 0.008;
      astrolabeGroup.rotation.x += deltaY * 0.008;

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    };
    window.addEventListener('resize', handleResize);

    // Render Animation Loop
    const animate = () => {
      if (!isDragging) {
        astrolabeGroup.rotation.y += 0.005;
        astrolabeGroup.rotation.x += 0.002;
      }
      if (renderer) {
        renderer.render(scene, camera);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // STEP 2: Strict Three.js Memory Cleanup & Asset Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (domElement) {
        domElement.removeEventListener('mousedown', onMouseDown);
        domElement.removeEventListener('webglcontextlost', handleContextLost);
        domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      if (renderer) {
        renderer.forceContextLoss(); // Force context loss to free up VRAM instantly
        renderer.dispose();
      }

      scene.traverse((object: any) => {
        if (object.isMesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat: any) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isContextLost]);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* Three.js Scene Mount Target Container */}
      <div ref={mountRef} className="w-full h-full min-h-[300px] flex items-center justify-center" />

      {/* Fallback Overlay when GPU context is lost */}
      {isContextLost && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-[#18110c]/90 backdrop-blur-md border border-[#c5a880]/40 rounded-lg">
          <div className="w-48 h-48 rounded-full border-4 border-[#c5a880]/50 bg-gradient-to-br from-[#2a1810] to-[#100b08] flex items-center justify-center shadow-inner">
            <div className="text-center p-3">
              <span className="text-xs font-mono text-[#f4efe6] block mb-1 font-bold">
                [ASTROLABE PREVIEW]
              </span>
              <span className="text-[10px] font-mono text-[#d4a37f] uppercase block mb-2">
                Static Fallback (GPU Memory Saver)
              </span>
              <button
                onClick={() => setIsContextLost(false)}
                className="px-3 py-1 bg-[#2a1810] hover:bg-[#5c3218] text-[#f4efe6] text-[10px] font-mono rounded border border-[#c5a880]/40 cursor-pointer"
              >
                [REINITIALIZE 3D ASTROLABE]
              </button>
            </div>
          </div>
        </div>
      )}

      {!isContextLost && (
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#c5a880]/70 bg-black/50 px-2 py-0.5 rounded border border-[#c5a880]/30 pointer-events-none">
          [3D BRASS ASTROLABE // INTERACTIVE DRAG]
        </div>
      )}
    </div>
  );
};

export default BrassAstrolabeCanvas;
