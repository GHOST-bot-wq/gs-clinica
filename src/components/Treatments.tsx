import { useEffect, useRef } from 'react'
import './Treatments.css'

interface TreatmentsProps {
  whatsappUrl: string | null
}

const treatments = [
  {
    id: 'depilacao-laser',
    title: 'Depilação a Laser',
    image: '/images/gabrielly-laser.png',
    description:
      'Protocolo de depilação com tecnologia a laser para redução dos pelos de forma segura e progressiva, respeitando cada tipo de pele.',
    tag: 'Corpo',
  },
  {
    id: 'tratamentos-faciais',
    title: 'Tratamentos Faciais',
    image: '/images/tratamento-facial.png',
    description:
      'Protocolos faciais personalizados para limpeza, hidratação, uniformização e cuidado da pele, com técnicas e produtos selecionados.',
    tag: 'Facial',
  },
  {
    id: 'tratamentos-corporais',
    title: 'Tratamentos Corporais',
    image: '/images/resultado-corporal-1.png',
    description:
      'Protocolos corporais individualizados com foco em bem-estar e cuidado, aplicados conforme avaliação específica de cada cliente.',
    tag: 'Corpo',
  },
  {
    id: 'criolipólise',
    title: 'Criolipólise',
    image: '/images/resultado-corporal-2.png',
    description:
      'Tecnologia de resfriamento aplicada em regiões específicas do corpo. Indicação, contraindicações e resultados avaliados individualmente.',
    tag: 'Corpo',
  },
  {
    id: 'contorno-corporal',
    title: 'Contorno Corporal',
    image: '/images/resultado-antes-depois.png',
    description:
      'Protocolos voltados para modelagem e contorno, combinando diferentes técnicas conforme avaliação e objetivos de cada cliente.',
    tag: 'Corpo',
  },
  {
    id: 'detox-corporal',
    title: 'Detox Corporal',
    image: '/images/gabrielly-sampaio.png',
    description:
      'Protocolos de drenagem e revitalização para promover bem-estar, leveza e cuidado da pele, com técnicas adaptadas individualmente.',
    tag: 'Corpo',
  },
]

export default function Treatments({ whatsappUrl }: TreatmentsProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tratamentos" className="treatments section section--mauve" ref={ref} aria-labelledby="treatments-heading">
      <div className="container">
        <div className="treatments__header">
          <div>
            <span className="eyebrow">Tratamentos</span>
            <div className="gold-line" />
            <h2 id="treatments-heading" className="treatments__title">
              Uma experiência<br />
              <em>de cuidado completo.</em>
            </h2>
          </div>
          <p className="treatments__subtitle">
            Cada protocolo é desenvolvido de forma individualizada,<br className="hide-mobile" />
            respeitando as necessidades e objetivos de cada pessoa.
          </p>
        </div>

        <div className="treatments__grid">
          {treatments.map((item, i) => (
            <article
              key={item.id}
              className="treatment-card"
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
              aria-label={`Tratamento: ${item.title}`}
            >
              <div className="treatment-card__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="treatment-card__image"
                  loading="lazy"
                  onError={(e) => {
                    const wrap = (e.target as HTMLImageElement).parentElement!
                    wrap.classList.add('treatment-card__image-wrap--empty')
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <span className="treatment-card__tag">{item.tag}</span>
              </div>

              <div className="treatment-card__body">
                <h3 className="treatment-card__title">{item.title}</h3>
                <p className="treatment-card__desc">{item.description}</p>

                <div className="treatment-card__footer">
                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="treatment-card__link"
                      aria-label={`Saber mais sobre ${item.title} via WhatsApp`}
                    >
                      Saiba mais
                      <span className="treatment-card__arrow" aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <span className="treatment-card__link treatment-card__link--disabled" aria-disabled="true">
                      Consulte em breve
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
