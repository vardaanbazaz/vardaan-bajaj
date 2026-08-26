import emailjs from '@emailjs/browser';
import { TELEGRAM_CONFIG } from '../data/manuscript_config';

export interface TelegramDispatchParams {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export async function sendTelegramDispatch(params: TelegramDispatchParams): Promise<{ success: boolean; message: string }> {
  const publicKey = TELEGRAM_CONFIG.publicKey;

  if (!publicKey || publicKey === 'PUBLIC_KEY_PLACEHOLDER') {
    // Graceful offline simulation mode if public key isn't provided
    console.info('[Telegram Dispatch] Operating in simulated dispatch mode (no VITE_EMAILJS_PUBLIC_KEY set).');
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Telegraph Dispatch queued and acknowledged in desk log [SIMULATED].',
    };
  }

  try {
    const response = await emailjs.send(
      TELEGRAM_CONFIG.serviceId,
      TELEGRAM_CONFIG.templateId,
      {
        from_name: params.senderName,
        from_email: params.senderEmail,
        subject: params.subject,
        message: params.message,
      },
      publicKey
    );

    if (response.status === 200) {
      return { success: true, message: 'Telegram dispatch transmitted successfully across desk relay.' };
    } else {
      return { success: false, message: `Dispatch transmission returned status ${response.status}.` };
    }
  } catch (error: any) {
    console.error('[Telegram Dispatch Error]', error);
    return {
      success: false,
      message: error?.text || 'Dispatch transmission failed. Please retry transmission.',
    };
  }
}
