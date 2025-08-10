"use client"

import { useState, useEffect } from "react"

import { Navigation } from "@/components/Navigation/Navigation"
import { Footer } from "@/components/Footer/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton/ScrollToTopButton" // Importar o novo componente

// Importação de todas as seções
import { HeroSection } from "@/sections/HeroSection/HeroSection"
import { EducationSection } from "@/sections/EducationSection/EducationSection"
import { TechnologiesSection } from "@/sections/TechnologiesSection/TechnologiesSection"
import { ServicesSection } from "@/sections/ServicesSection/ServicesSection"
import { ProjectsSection } from "@/sections/ProjectsSection/ProjectsSection"
import { TestimonialsSection } from "@/sections/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/sections/ContactSection/ContactSection"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "technologies", "services", "projects", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================
          NAVEGAÇÃO PRINCIPAL
          ======================================== */}
      <Navigation />

      {/* ========================================
          SEÇÕES DO PORTFÓLIO
          ======================================== */}
      <main>
        <HeroSection />
        <EducationSection />
        <TechnologiesSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* ========================================
          BOTÃO VOLTAR AO TOPO (NOVO COMPONENTE JAVASCRIPT)
          ======================================== */}
      <ScrollToTopButton />

      {/* ========================================
          RODAPÉ
          ======================================== */}
      <Footer />
    </div>
  )
}
