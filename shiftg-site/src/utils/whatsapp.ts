import { SITE_PHONE } from "@/constants";

interface FormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  cargo: string;
  desafios?: string;
}

export function openWhatsAppWithMessage(phoneNumber: string, message: string): void {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

export function getWhatsAppLink(): string {
  const cleanPhone = SITE_PHONE.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

  const message = `Ola! Vim do site *shiftg.com.br* e gostaria de conhecer mais sobre como transformar meu negócio com inteligencia artificial.`;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}
