import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
  ariaLabel,
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-24 md:py-36 my-8 md:my-16 border-b border-[#c5a880]/15 last:border-b-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
