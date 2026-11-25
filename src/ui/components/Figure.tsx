import React from 'react';

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: React.ReactNode;
  // Hero figure loads eagerly; all others lazy
  eager?: boolean;
  className?: string;
}

// Chart on a light linen plate in both themes (no dark variants of figures), inside the shared `frame`
export const Figure: React.FC<FigureProps> = ({ src, alt, width, height, caption, eager = false, className = '' }) => (
  <figure className={`m-0 min-w-0 ${className}`}>
    <div className="frame">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? undefined : 'lazy'}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
    <figcaption className="mt-3.5 text-sm text-muted">{caption}</figcaption>
  </figure>
);

export default Figure;
