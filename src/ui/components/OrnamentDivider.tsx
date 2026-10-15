import React from 'react';

// Once per page, between the header moulding and the content
export const OrnamentDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div aria-hidden="true" className={`flex items-center gap-2 ${className}`}>
    <span className="ornament-line ornament-line-left" />
    <span className="ornament-diamond" />
    <span className="ornament-diamond ornament-diamond-filled" />
    <span className="ornament-diamond" />
    <span className="ornament-line ornament-line-right" />
  </div>
);

export default OrnamentDivider;
