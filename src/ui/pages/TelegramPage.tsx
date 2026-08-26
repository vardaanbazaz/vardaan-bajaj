import React from 'react';
import { DispatchTelegramForm } from '../components/DispatchTelegramForm';

export const TelegramPage: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="border-b border-amber-900/40 pb-3">
        <h1 className="text-2xl font-serif font-bold text-amber-100">
          Direct Message & Contact
        </h1>
        <p className="text-xs font-mono text-amber-400">
          Send a direct message via EmailJS
        </p>
      </div>

      <DispatchTelegramForm />
    </div>
  );
};

export default TelegramPage;
