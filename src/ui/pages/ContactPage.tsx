import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../../data/manuscript_config';

type CopyStatus = 'idle' | 'copied' | 'manual';

export const ContactPage: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const emailRef = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  // Clipboard unavailable or refused: select the address so the visitor can copy it by hand
  const selectEmailText = () => {
    const node = emailRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleCopy = async () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopyStatus('copied');
      resetTimer.current = setTimeout(() => setCopyStatus('idle'), 2000);
    } catch {
      selectEmailText();
      setCopyStatus('manual');
    }
  };

  const linkClassName =
    'text-xs font-mono text-lamp underline underline-offset-4';

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="border-b border-edge pb-3">
        <h1 className="text-2xl font-serif font-bold text-lamp">
          Contact
        </h1>
      </div>

      <div className="w-full parchment-card p-6 rounded-lg relative overflow-hidden">
        <p className="text-sm font-sans text-lamp">
          Email is the best way to reach me. I'm open to remote machine learning and software roles.
        </p>

        <p className="mt-4 text-base font-mono text-lamp break-all">
          <span ref={emailRef}>{PERSONAL_INFO.email}</span>
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <button
            type="button"
            onClick={handleCopy}
            className="px-5 py-2.5 bg-sunset text-ink font-mono font-bold text-xs tracking-wider rounded cursor-pointer shrink-0"
          >
            {copyStatus === 'copied' ? 'Copied' : 'Copy email'}
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-lamp font-mono text-xs tracking-wider underline underline-offset-4 shrink-0"
          >
            Open in mail app
          </a>
          {/* Button label already shows "Copied"; keep that announcement screen-reader only */}
          <span
            aria-live="polite"
            className={`text-[10px] font-mono text-lamp ${copyStatus === 'copied' ? 'sr-only' : ''}`}
          >
            {copyStatus === 'copied' && 'Copied'}
            {copyStatus === 'manual' && 'Press Ctrl+C to copy'}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-edge">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            LinkedIn
          </a>
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="text-[10px] font-mono text-lamp">
        This site doesn't collect or store personal data. Fonts, map tiles and GitHub stats load from third-party services.
      </p>
    </div>
  );
};

export default ContactPage;
