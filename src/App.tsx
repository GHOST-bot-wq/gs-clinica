import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Technology from './components/Technology'
import Gallery from './components/Gallery'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import WhatsAppFloat from './components/WhatsAppFloat'
import config, { getWhatsAppUrl } from './config/business'

export interface LightboxImage {
  src: string
  alt: string
}

function App() {
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const whatsappUrl = getWhatsAppUrl(config)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openLightbox = (images: LightboxImage[], index: number) => {
    setLightbox({ images, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Header scrolled={scrolled} whatsappUrl={whatsappUrl} />

      <main>
        <Hero whatsappUrl={whatsappUrl} />
        <About />
        <Treatments whatsappUrl={whatsappUrl} />
        <Technology whatsappUrl={whatsappUrl} />
        <Gallery onImageClick={openLightbox} />
        <Results />
        <HowItWorks whatsappUrl={whatsappUrl} />
        <FAQ />
        <Contact />
        <FinalCTA whatsappUrl={whatsappUrl} />
      </main>

      <Footer whatsappUrl={whatsappUrl} />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}

      {whatsappUrl && <WhatsAppFloat url={whatsappUrl} />}
    </>
  )
}

export default App
