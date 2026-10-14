import { useState, useEffect } from 'react'
import './Header.css'

interface HeaderProps {
  scrolled: boolean
  whatsappUrl: string | null
}

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
]

export default function Header({ scrolled, whatsappUrl }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fechar menu ao pressionar Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Bloquear scroll quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        {/* Logo */}
        <a href="#inicio" className="header__logo" aria-label="GS Estética Avançada — Início" onClick={closeMenu}>
          <div className="logo-mark">
            <span className="logo-gs">GS</span>
            <div className="logo-divider" aria-hidden="true" />
            <div className="logo-text">
              <span className="logo-estetica">ESTÉTICA</span>
              <span className="logo-avancada">AVANÇADA</span>
            </div>
          </div>
        </a>

        {/* Navegação desktop */}
        <nav className="header__nav" aria-label="Navegação principal">
          <ul role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <div className="header__cta">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header__btn"
            >
              Agendar avaliação
            </a>
          ) : (
            <button className="btn-primary header__btn" disabled aria-disabled="true" title="Contato em breve">
              Agendar avaliação
            </button>
          )}
        </div>

        {/* Botão hamburguer */}
        <button
          className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação mobile">
          <ul role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__cta">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              Agendar avaliação
            </a>
          ) : (
            <button className="btn-primary" disabled aria-disabled="true">
              Contato em breve
            </button>
          )}
        </div>
        <a
          href="https://www.instagram.com/gs_esteticaavancadaa"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu__instagram"
          tabIndex={menuOpen ? 0 : -1}
        >
          @gs_esteticaavancadaa
        </a>
      </div>

      {/* Overlay para fechar menu ao clicar fora */}
      {menuOpen && (
        <div
          className="mobile-menu__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
