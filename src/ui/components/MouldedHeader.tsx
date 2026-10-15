import React from 'react';

interface MouldedHeaderProps {
  as?: 'header' | 'div' | 'article';
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

// Page-header panel: the room's band pattern shows in the outer padding,
// around an opaque inner panel with a brass frame and corner diamonds.
export const MouldedHeader: React.FC<MouldedHeaderProps> = ({
  as: Tag = 'div',
  className = '',
  innerClassName = 'p-6 sm:p-8',
  children,
}) => (
  <Tag className={`moulding bg-box border raised rounded-lg p-3 ${className}`}>
    <div className={`moulding-frame relative bg-box ${innerClassName}`}>
      <span aria-hidden="true" className="moulding-diamond moulding-diamond-tl" />
      <span aria-hidden="true" className="moulding-diamond moulding-diamond-tr" />
      <span aria-hidden="true" className="moulding-diamond moulding-diamond-bl" />
      <span aria-hidden="true" className="moulding-diamond moulding-diamond-br" />
      {children}
    </div>
  </Tag>
);

export default MouldedHeader;
