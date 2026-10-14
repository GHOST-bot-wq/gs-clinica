import config, { isPending } from '../config/business'
import './Footer.css'

interface FooterProps {
  whatsappUrl: string | null
}

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer({ whatsappUrl }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Topo */}
        <div className="footer__top">
          {/* Logo */}
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" aria-label="GS Estética Avançada — Início">
              <div className="footer__logo-mark">
                <span className="footer__logo-gs">GS</span>
                <div className="footer__logo-divider" aria-hidden="true" />
                <div className="footer__logo-text">
                  <span>ESTÉTICA</span>
                  <span>AVANÇADA</span>
                </div>
              </div>
            </a>
            <p className="footer__tagline">
              Tecnologia, conhecimento e cuidado<br />
              em uma experiência pensada para você.
            </p>
          </div>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Navegação do rodapé">
            <h3 className="footer__nav-title">Navegação</h3>
            <ul role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="footer__contact">
            <h3 className="footer__nav-title">Contato</h3>
            <ul className="footer__contact-list" role="list">
              <li>
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  {config.instagram}
                </a>
              </li>
              {!isPending(config.whatsapp) && whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__contact-link"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {isPending(config.whatsapp) && (
                <li>
                  <span className="footer__pending">WhatsApp em breve</span>
                </li>
              )}
              {!isPending(config.address) && !isPending(config.city) && (
                <li>
                  <span className="footer__contact-info">
                    {config.address as string}<br />
                    {config.city as string}, {config.state as string}
                  </span>
                </li>
              )}
              {isPending(config.address) && (
                <li>
                  <span className="footer__pending">Endereço em breve</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        {/* Fundo */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} GS Estética Avançada. Todos os direitos reservados.
          </p>
          <div className="footer__legal">
            <span className="footer__legal-note">
              Imagens publicadas com autorização. Resultados individuais variam.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
