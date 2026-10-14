import { useEffect, useRef } from 'react'
import './Results.css'

export default function Results() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" className="results section section--nude" ref={ref} aria-labelledby="results-heading">
      <div className="container results__inner">
        {/* Texto institucional */}
        <div className="results__intro">
          <span className="eyebrow">Experiência</span>
          <div className="gold-line" />
          <h2 id="results-heading" className="results__title">
            Uma experiência<br />
            <em>pensada para você.</em>
          </h2>
          <p className="results__text">
            Cada atendimento na GS Estética Avançada é conduzido com atenção, respeito e dedicação. Do primeiro contato à finalização do protocolo, o foco é em você — suas necessidades, seu conforto e seu bem-estar.
          </p>
          <p className="results__text">
            Resultados autorizados pelas clientes serão publicados em breve neste espaço.
          </p>
        </div>

        {/* Cards de resultado com imagens reais */}
        <div className="results__cards">
          <figure className="result-card">
            <div className="result-card__image-wrap">
              <img
                src="/images/resultado-corporal-1.png"
                alt="Resultado de protocolo corporal — visão comparativa"
                className="result-card__image"
                loading="lazy"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).parentElement!.style.display = 'none'
                }}
              />
            </div>
            <figcaption className="result-card__caption">
              <span className="eyebrow">Protocolo Corporal</span>
              <p>Resultado de protocolo corporal. Imagem autorizada pela cliente.</p>
            </figcaption>
          </figure>

          <figure className="result-card result-card--featured">
            <div className="result-card__image-wrap">
              <img
                src="/images/resultado-antes-depois.png"
                alt="Resultado de tratamento corporal — antes e depois"
                className="result-card__image"
                loading="lazy"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).parentElement!.style.display = 'none'
                }}
              />
            </div>
            <figcaption className="result-card__caption">
              <span className="eyebrow">Contorno Corporal</span>
              <p>Resultado de protocolo de contorno corporal. Imagem autorizada pela cliente.</p>
            </figcaption>
          </figure>

          <figure className="result-card">
            <div className="result-card__image-wrap">
              <img
                src="/images/resultado-corporal-2.png"
                alt="Resultado de tratamento corporal"
                className="result-card__image"
                loading="lazy"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).parentElement!.style.display = 'none'
                }}
              />
            </div>
            <figcaption className="result-card__caption">
              <span className="eyebrow">Tratamento Corporal</span>
              <p>Resultado de protocolo corporal individualizado. Imagem autorizada pela cliente.</p>
            </figcaption>
          </figure>
        </div>

        <p className="results__disclaimer">
          Os resultados são individuais e variam de pessoa para pessoa. As imagens foram publicadas com autorização das clientes. Nenhum resultado específico é garantido.
        </p>
      </div>
    </section>
  )
}
