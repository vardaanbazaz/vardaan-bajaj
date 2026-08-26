import React from 'react';
import { Link } from 'react-router-dom';

export const PublicationLayout = ({ children, tocItems }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <nav aria-label="Publication navigation">
        <Link
          to="/publications"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-mono text-xs uppercase tracking-widest inline-block transition-colors"
        >
          &larr; Back to Publications
        </Link>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left side sticky Table of Contents (w-1/4) */}
        <aside className="w-full lg:w-1/4 sticky top-12 bg-walnut-900/80 backdrop-blur-md p-5 rounded-lg border border-[#8C7335]/20 shadow-sm space-y-4">
          <div className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold border-b border-[#8C7335]/20 pb-2">
            [PUBLICATIONS OUTLINE]
          </div>
          <div className="text-xs font-mono text-[#9c9281] leading-relaxed">
            Peer-reviewed papers, IEEE proceedings, and academic disclosures.
          </div>
          {tocItems && (
            <nav className="space-y-2 pt-2 border-t border-[#8C7335]/20" aria-label="Table of contents">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs font-mono text-[#9c9281] hover:text-[#f4efe6] py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </aside>

        {/* Right side wide reading canvas (w-3/4) */}
        <main className="w-full lg:w-3/4 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PublicationLayout;

