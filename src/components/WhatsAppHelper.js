/**
 * Helper to construct formatted WhatsApp URL for Nesting Sales/Demo conversations.
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919340138238",
  defaultMessage: encodeURIComponent("Hi Nesting team! I'm a Hostel/PG owner interested in seeing a demo of Nesting.")
};

export const getWhatsAppLink = (customMessage) => {
  const rawNum = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_CONFIG.phoneNumber || "919340138238";
  const num = rawNum.replace(/\D/g, '');
  const cleanNum = num.length === 10 ? `91${num}` : num;
  const message = customMessage ? encodeURIComponent(customMessage) : WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${cleanNum}?text=${message}`;
};
