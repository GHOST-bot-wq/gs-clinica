/**
 * GS Estética Avançada — Arquivo de Configuração Central
 *
 * Edite este arquivo para atualizar os dados da clínica.
 * Campos marcados como PENDENTE não devem gerar links ou informações
 * visíveis no site até serem preenchidos com dados reais confirmados.
 */

export type PendingValue = 'PENDENTE';
export const PENDING: PendingValue = 'PENDENTE';

export interface BusinessConfig {
  name: string;
  shortName: string;
  professional: string;
  instagram: string;
  instagramUrl: string;
  whatsapp: string | PendingValue;
  whatsappMessage: string;
  city: string | PendingValue;
  state: string | PendingValue;
  address: string | PendingValue;
  addressMapUrl: string | PendingValue;
  phone: string | PendingValue;
  businessHours: BusinessHours[] | PendingValue;
  seo: SEOConfig;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
}

const config: BusinessConfig = {
  name: 'GS Estética Avançada',
  shortName: 'GS Estética',
  professional: 'Gabrielly Sampaio',

  // Instagram (confirmado)
  instagram: '@gs_esteticaavancadaa',
  instagramUrl: 'https://www.instagram.com/gs_esteticaavancadaa',

  // WhatsApp — PENDENTE DE CONFIRMAÇÃO
  // Para ativar: substitua PENDING pelo número no formato: '5511999999999'
  whatsapp: PENDING,
  whatsappMessage: 'Olá! Gostaria de saber mais sobre os tratamentos da GS Estética Avançada.',

  // Localização — PENDENTE DE CONFIRMAÇÃO
  city: PENDING,
  state: PENDING,
  address: PENDING,
  addressMapUrl: PENDING,

  // Telefone — PENDENTE DE CONFIRMAÇÃO
  phone: PENDING,

  // Horários — PENDENTE DE CONFIRMAÇÃO
  // Para ativar: substitua PENDING pelo array abaixo:
  // [
  //   { days: 'Segunda a Sexta', hours: '09h – 19h' },
  //   { days: 'Sábado', hours: '09h – 14h' },
  // ],
  businessHours: PENDING,

  seo: {
    title: 'GS Estética Avançada | Gabrielly Sampaio',
    description:
      'Tecnologia, conhecimento e cuidado individualizado em uma experiência pensada para você. Depilação a laser, tratamentos faciais, corporais e muito mais.',
    url: 'https://gsesteticaavancada.com.br',
  },
};

export default config;

// Helper para verificar se um valor está pendente
export function isPending(value: unknown): value is PendingValue {
  return value === PENDING;
}

// Gera URL do WhatsApp ou retorna null se pendente
export function getWhatsAppUrl(config: BusinessConfig): string | null {
  if (isPending(config.whatsapp)) return null;
  const encoded = encodeURIComponent(config.whatsappMessage);
  return `https://wa.me/${config.whatsapp}?text=${encoded}`;
}
