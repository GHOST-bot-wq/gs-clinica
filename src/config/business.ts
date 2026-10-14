/**
 * GS Estética Avançada - Configuração Central de Negócio
 * Gabrielly Sampaio | @gs_esteticaavancadaa
 * 
 * Centraliza todas as informações da clínica, status de confirmação,
 * dados institucionais, tratamentos e metadados SEO.
 * 
 * Regra de Integridade: Informações não confirmadas devem ser mantidas
 * explicitamente com status "pending" para evitar informações falsas
 * ou links quebrados no layout.
 */

export interface BusinessConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    professional: {
      name: string;
      roleTitle: string;
      shortBio: string;
      fullBio: string[];
      portraitImage: string;
      actionImage: string;
    };
    social: {
      instagramHandle: string;
      instagramUrl: string;
    };
  };
  contact: {
    whatsapp: {
      status: "confirmed" | "pending";
      number: string | null;
      formattedDisplay: string;
      placeholderNotice: string;
      ctaText: string;
    };
    location: {
      status: "confirmed" | "pending";
      street: string | null;
      number: string | null;
      neighborhood: string | null;
      city: string | null;
      state: string | null;
      zipCode: string | null;
      mapsUrl: string | null;
      placeholderNotice: string;
    };
    hours: {
      status: "confirmed" | "pending";
      weekdays: string | null;
      saturday: string | null;
      sunday: string | null;
      placeholderNotice: string;
    };
  };
  treatments: Array<{
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    benefits: string[];
    image: string;
    badge?: string;
  }>;
  technologies: Array<{
    id: string;
    name: string;
    category: string;
    description: string;
    highlight: string;
    image: string;
  }>;
  gallery: Array<{
    id: string;
    title: string;
    category: "profissional" | "procedimento" | "espaco" | "resultado";
    image: string;
    description: string;
    isAuthorizedResult?: boolean;
    disclaimer?: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const businessConfig: BusinessConfig = {
  brand: {
    name: "GS Estética Avançada",
    tagline: "Cuidado que valoriza a sua beleza.",
    subTagline: "Tecnologia, conhecimento e cuidado individualizado em uma experiência pensada para você.",
    professional: {
      name: "Gabrielly Sampaio",
      roleTitle: "Especialista em Estética Avançada",
      shortBio: "Dedicada a realçar a beleza natural através de protocolos personalizados e tecnologia de ponta.",
      fullBio: [
        "Com foco no cuidado minucioso e na excelência estética, Gabrielly Sampaio conduz cada atendimento com atenção plena às particularidades de cada paciente.",
        "A filosofia de trabalho alia ciência estética contemporânea, conforto e acolhimento, garantindo que cada procedimento proporcione bem-estar e resultados com máxima naturalidade."
      ],
      portraitImage: "/images/gabrielly-sampaio-portrait.png",
      actionImage: "/images/gabrielly-procedimento-laser.png"
    },
    social: {
      instagramHandle: "@gs_esteticaavancadaa",
      instagramUrl: "https://www.instagram.com/gs_esteticaavancadaa/"
    }
  },
  contact: {
    whatsapp: {
      status: "pending",
      number: null,
      formattedDisplay: "Canal oficial em atualização",
      placeholderNotice: "O contato direto via WhatsApp será disponibilizado em breve.",
      ctaText: "WhatsApp em breve"
    },
    location: {
      status: "pending",
      street: null,
      number: null,
      neighborhood: null,
      city: null,
      state: null,
      zipCode: null,
      mapsUrl: null,
      placeholderNotice: "Endereço e mapa oficial em fase de confirmação pela clínica."
    },
    hours: {
      status: "pending",
      weekdays: null,
      saturday: null,
      sunday: null,
      placeholderNotice: "Horários de atendimento mediante agendamento prévio."
    }
  },
  treatments: [
    {
      id: "depilacao-laser",
      title: "Depilação a Laser",
      category: "Tecnologia & Conforto",
      shortDescription: "Remoção progressiva e duradoura dos pelos com tecnologia de resfriamento para maior conforto.",
      longDescription: "Protocolo seguro e eficaz indicado para diversos fototipos, proporcionando suavidade e praticidade para a sua rotina.",
      benefits: ["Sensação de pele suave", "Tecnologia de disparo precisa", "Protocolos personalizados"],
      image: "/images/gabrielly-procedimento-laser.png",
      badge: "Destaque"
    },
    {
      id: "tratamentos-faciais",
      title: "Tratamentos Faciais & Skincare",
      category: "Revitalização & Glow",
      shortDescription: "Higienização profunda, hidratação avançada e protocolos de revitalização da barreira cutânea.",
      longDescription: "Cuidados formulados para iluminar a pele, melhorar o viço e manter o equilíbrio cutâneo com ativos selecionados.",
      benefits: ["Desobstrução e renovação", "Nutrição celular intensiva", "Aspecto radiante e descansado"],
      image: "/images/tratamento-facial.svg"
    },
    {
      id: "tratamentos-corporais",
      title: "Tratamentos Corporais Integrados",
      category: "Harmonia & Bem-estar",
      shortDescription: "Abordagens sob medida para firmeza, textura da pele e estimulação da circulação tecidual.",
      longDescription: "Combinação de manobras manuais especializadas e eletroterapia para tônus e relaxamento muscular.",
      benefits: ["Alívio de retenção", "Estímulo à oxigenação", "Relaxamento e leveza"],
      image: "/images/tratamento-corporal.svg"
    },
    {
      id: "criolipolise",
      title: "Criolipólise Avançada",
      category: "Contorno Corporal",
      shortDescription: "Procedimento controlado para modelagem corporal através do resfriamento direcionado.",
      longDescription: "Aplicação focada com parâmetros ajustados à anatomia de cada paciente, visando a harmonia das curvas corporais.",
      benefits: ["Não invasivo", "Aplicação setorizada", "Acompanhamento profissional contínuo"],
      image: "/images/resultado-corporal-1.png",
      badge: "Protocolo Exclusivo"
    },
    {
      id: "contorno-corporal",
      title: "Protocolos de Contorno Corporal",
      category: "Remodelagem Teatral",
      shortDescription: "Sinergia de técnicas para definição das curvas e melhora global do relevo corporal.",
      longDescription: "Protocolos estruturados para promover suporte dérmico e harmonização da silhueta de forma gradual.",
      benefits: ["Estímulo de colágeno", "Melhora do tônus cutâneo", "Planejamento em sessões"],
      image: "/images/resultado-corporal-2.png"
    },
    {
      id: "detox-corporal",
      title: "Detox Corporal & Drenagem",
      category: "Desintoxicação",
      shortDescription: "Eliminação de toxinas e redução do inchaço através de protocolos drenantes específicos.",
      longDescription: "Sessões desenhadas para proporcionar alívio imediato da sensação de peso e reativação do sistema linfático.",
      benefits: ["Sensação imediata de leveza", "Estímulo à circulação", "Relaxamento profundo"],
      image: "/images/detox-corporal.svg"
    }
  ],
  technologies: [
    {
      id: "tech-laser",
      name: "Tecnologia a Laser de Alta Precisão",
      category: "Eletroestética",
      description: "Equipamentos com ponteiras resfriadas que conferem estabilidade térmica e precisão milimétrica em cada disparo.",
      highlight: "Máximo conforto e segurança",
      image: "/images/gabrielly-procedimento-laser.png"
    },
    {
      id: "tech-crio",
      name: "Sistemas Térmicos de Resfriamento Controlado",
      category: "Termoestética",
      description: "Controle rigoroso de temperatura para garantir que a aplicação permaneça nos limites ideais de tolerância biológica.",
      highlight: "Parâmetros estritamente calibrados",
      image: "/images/resultado-corporal-1.png"
    },
    {
      id: "tech-eletro",
      name: "Bioestimulação & Radiofrequência",
      category: "Revitalização Dérmica",
      description: "Recursos complementares de estimulação tecidual que potencializam o metabolismo celular e a firmeza da pele.",
      highlight: "Ação profunda e natural",
      image: "/images/gabrielly-sampaio-portrait.png"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Gabrielly Sampaio no Consultório",
      category: "profissional",
      image: "/images/gabrielly-sampaio-portrait.png",
      description: "Atendimento acolhedor e individualizado em ambiente moderno e higienizado."
    },
    {
      id: "gal-2",
      title: "Aplicação com Tecnologia a Laser",
      category: "procedimento",
      image: "/images/gabrielly-procedimento-laser.png",
      description: "Uso de EPIs rigorosos, óculos de proteção específicos e ponteira de alta precisão."
    },
    {
      id: "gal-3",
      title: "Registro de Acompanhamento Corporal",
      category: "resultado",
      image: "/images/resultado-corporal-1.png",
      description: "Registro comparativo de evolução corporal seguindo protocolo individualizado.",
      isAuthorizedResult: true,
      disclaimer: "Resultados variam conforme o organismo e estilo de vida de cada paciente."
    },
    {
      id: "gal-4",
      title: "Acompanhamento de Protocolo Modelador",
      category: "resultado",
      image: "/images/resultado-corporal-2.png",
      description: "Evolução documentada durante as etapas do tratamento com foco em contorno.",
      isAuthorizedResult: true,
      disclaimer: "Resultados individuais e dependentes da adesão às orientações profissionais."
    }
  ],
  faq: [
    {
      question: "Como agendar uma avaliação inicial na clínica?",
      answer: "Você pode acompanhar as aberturas de agenda diretamente pelo nosso Instagram oficial (@gs_esteticaavancadaa). Em breve, disponibilizaremos o canal direto via WhatsApp para agendamentos rápidos."
    },
    {
      question: "Quais são os tratamentos atualmente oferecidos?",
      answer: "Oferecemos protocolos de depilação a laser, tratamentos faciais e skincare, criolipólise, protocolos de contorno corporal, detox e drenagens. Cada atendimento é precedido por uma anamnese detalhada."
    },
    {
      question: "Como saber qual procedimento é o mais indicado para o meu caso?",
      answer: "Na GS Estética Avançada não acreditamos em fórmulas prontas. Na consulta de avaliação, Gabrielly Sampaio analisa suas características individuais, queixas e objetivos para indicar o protocolo mais seguro e eficaz."
    },
    {
      question: "Onde a clínica está localizada e quais os horários de atendimento?",
      answer: "Nossa localização completa e horários específicos de atendimento estão em fase de confirmação institucional. Atendemos sempre com hora marcada para assegurar total pontualidade e exclusividade."
    },
    {
      question: "Como consultar valores, pacotes e condições?",
      answer: "Os valores de cada procedimento são repassados de forma transparente durante a consulta avaliativa, pois cada plano de tratamento depende da quantidade de sessões e áreas abordadas."
    }
  ]
};
