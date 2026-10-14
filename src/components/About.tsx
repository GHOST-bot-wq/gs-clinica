import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="about section" ref={ref} aria-labelledby="about-heading">
      <div className="container about__inner">
        {/* Imagem editorial */}
        <div className="about__image-col">
          <div className="about__image-frame">
            <img
              src="/images/gabrielly-sampaio.png"
              alt="Gabrielly Sampaio, profissional de estética avançada"
              className="about__image"
              loading="lazy"
              onError={(e) => {
                const wrap = (e.target as HTMLImageElement).parentElement!
                wrap.classList.add('about__image-frame--empty')
              }}
            />
            {/* Detalhe decorativo */}
            <div className="about__image-accent" aria-hidden="true" />
          </div>

          {/* Card flutuante */}
          <div className="about__floating-card" aria-label="Informação de destaque">
            <span className="about__floating-icon" aria-hidden="true">✦</span>
            <p className="about__floating-text">
              Atendimento<br />personalizado
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="about__content">
          <span className="eyebrow about__eyebrow">A profissional</span>
          <div className="gold-line" />

          <h2 id="about-heading" className="about__title">
            Beleza, conhecimento<br />
            e cuidado em<br />
            <em>cada detalhe.</em>
          </h2>

          <div className="about__body">
            <p>
              Gabrielly Sampaio é profissional de estética avançada comprometida com um atendimento de qualidade, individualizado e baseado em tecnologia de ponta.
            </p>
            <p>
              Cada protocolo é pensado de acordo com as necessidades específicas de cada cliente, respeitando a singularidade de cada pessoa e priorizando resultados com segurança e bem-estar.
            </p>
            <p className="about__placeholder">
              {/* ⚠️ Adicione aqui formação, especialização ou credenciais confirmadas */}
              <em>Informações profissionais adicionais serão incluídas em breve.</em>
            </p>
          </div>

          <div className="about__values">
            {[
              { label: 'Individualizado', desc: 'Cada atendimento é único' },
              { label: 'Tecnologia', desc: 'Equipamentos avançados' },
              { label: 'Cuidado', desc: 'Atenção em cada etapa' },
            ].map(item => (
              <div key={item.label} className="about__value-item">
                <div className="about__value-dot" aria-hidden="true" />
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/gs_esteticaavancadaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
