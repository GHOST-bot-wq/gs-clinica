import { useEffect, useRef } from 'react'
import './Hero.css'

interface HeroProps {
  whatsappUrl: string | null
}

export default function Hero({ whatsappUrl }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="inicio" className="hero" ref={sectionRef} aria-label="Apresentação principal">
      {/* Imagem de fundo — lado direito */}
      <div className="hero__image-wrap" aria-hidden="true">
        <img
          src="/images/gabrielly-laser.png"
          alt="Gabrielly Sampaio realizando tratamento a laser"
          className="hero__image"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="hero__image-overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow animate-fade-up delay-1">
            GS ESTÉTICA AVANÇADA
          </span>

          <h1 className="hero__title animate-fade-up delay-2">
            Cuidado que valoriza<br />
            <em>a sua beleza.</em>
          </h1>

          <div className="gold-line animate-fade-up delay-3" />

          <p className="hero__text animate-fade-up delay-3">
            Tecnologia, conhecimento e cuidado individualizado<br className="hero__br" />
            em uma experiência pensada para você.
          </p>

          <div className="hero__actions animate-fade-up delay-4">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar atendimento
              </a>
            ) : (
              <button className="btn-primary" disabled aria-disabled="true">
                Contato em breve
              </button>
            )}
            <a href="#tratamentos" className="btn-secondary">
              Conhecer tratamentos
            </a>
          </div>

          {/* Badge editorial */}
          <div className="hero__badge animate-fade-up delay-5">
            <div className="hero__badge-line" />
            <span>Atendimento personalizado</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
