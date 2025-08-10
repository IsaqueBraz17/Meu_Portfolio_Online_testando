"use client"

/**
 * ===========================================
 * HOOK PARA CONTROLE DE SEÇÃO ATIVA
 * ===========================================
 * Hook customizado para detectar qual seção está visível na tela
 */

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Lista de todas as seções do portfólio
      const sections = ["home", "education", "technologies", "services", "projects", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      // Detecta qual seção está atualmente visível
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

    // Adiciona listener de scroll
    window.addEventListener("scroll", handleScroll)

    // Cleanup do listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}
