/**
 * WebGL Context Manager & Event Listener Infrastructure
 * Handles webglcontextlost with preventDefault() and safe resource cleanup
 */

export interface WebGLContextOptions {
  onContextLost?: (event: Event) => void;
  onContextRestored?: (event: Event) => void;
}

export function attachWebGLContextListeners(
  canvas: HTMLCanvasElement,
  options: WebGLContextOptions = {}
): () => void {
  const handleContextLost = (event: Event) => {
    // Crucial: preventDefault stops the browser from discarding the canvas context permanently
    event.preventDefault();
    console.warn('[WebGL Infrastructure] Context lost detected. Swapping to fallback static representation.');
    if (options.onContextLost) {
      options.onContextLost(event);
    }
  };

  const handleContextRestored = (event: Event) => {
    console.info('[WebGL Infrastructure] Context restored successfully.');
    if (options.onContextRestored) {
      options.onContextRestored(event);
    }
  };

  canvas.addEventListener('webglcontextlost', handleContextLost, false);
  canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

  return () => {
    canvas.removeEventListener('webglcontextlost', handleContextLost);
    canvas.removeEventListener('webglcontextrestored', handleContextRestored);
  };
}
