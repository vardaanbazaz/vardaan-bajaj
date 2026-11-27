import React from 'react';

export const ShortRule: React.FC<{ className?: string }> = ({ className = 'mt-4' }) => (
  <div aria-hidden="true" className={`h-px w-24 bg-rule ${className}`} />
);

export default ShortRule;
