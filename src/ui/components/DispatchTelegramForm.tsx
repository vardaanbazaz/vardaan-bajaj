import React, { useState } from 'react';
import { sendTelegramDispatch } from '../../infrastructure/email_service';
import { PERSONAL_INFO } from '../../data/manuscript_config';

export const DispatchTelegramForm: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) {
      setStatusMessage({ type: 'error', text: 'REJECTED: All telegraph dispatch fields must be populated.' });
      return;
    }

    setIsTransmitting(true);
    setStatusMessage(null);

    const result = await sendTelegramDispatch({
      senderName,
      senderEmail,
      subject: subject || 'Desk Telegram Message',
      message,
    });

    setIsTransmitting(false);

    if (result.success) {
      setStatusMessage({ type: 'success', text: result.message });
      setSenderName('');
      setSenderEmail('');
      setSubject('');
      setMessage('');
    } else {
      setStatusMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="w-full parchment-card p-6 rounded-lg relative overflow-hidden">
      {/* Brass Corner Rivets */}
      <div className="absolute top-3 left-3 brass-rivet" />
      <div className="absolute top-3 right-3 brass-rivet" />
      <div className="absolute bottom-3 left-3 brass-rivet" />
      <div className="absolute bottom-3 right-3 brass-rivet" />

      <div className="mb-4 border-b border-amber-900/40 pb-3">
        <h3 className="text-sm font-mono tracking-widest text-amber-400 uppercase">
          {PERSONAL_INFO.telegramHeader}
        </h3>
        <p className="text-xs font-sans text-amber-200/80 mt-0.5">
          Send a direct message to Vardaan Bajaj.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`mb-4 p-3 rounded text-xs font-mono border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/60 border-emerald-600/60 text-emerald-300'
              : 'bg-red-950/60 border-red-600/60 text-red-300'
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1">
              YOUR NAME *
            </label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Alex Pendelton"
              className="w-full bg-[#18110c] border border-amber-900/60 rounded px-3 py-2 text-xs font-mono text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1">
              YOUR EMAIL *
            </label>
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="e.g. alex@company.org"
              className="w-full bg-[#18110c] border border-amber-900/60 rounded px-3 py-2 text-xs font-mono text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1">
            SUBJECT
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Engineering Collaboration Inquiry"
            className="w-full bg-[#18110c] border border-amber-900/60 rounded px-3 py-2 text-xs font-mono text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1">
            MESSAGE CONTENT *
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full bg-[#18110c] border border-amber-900/60 rounded px-3 py-2 text-xs font-mono text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400 resize-none"
            required
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="text-[10px] font-mono text-amber-500/80 shrink-0">
            [SECURE DIRECT MESSAGE]
          </div>
          <button
            type="submit"
            disabled={isTransmitting}
            className="px-5 py-2.5 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-mono text-xs uppercase tracking-wider rounded border border-amber-500/50 shadow-lg disabled:opacity-50 transition-all cursor-pointer shrink-0"
          >
            {isTransmitting ? '[SENDING MESSAGE...]' : 'SEND MESSAGE'}
          </button>
        </div>
      </form>
    </div>
  );
};
