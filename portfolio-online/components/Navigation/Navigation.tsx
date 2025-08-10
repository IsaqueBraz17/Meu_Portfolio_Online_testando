/**
 * ===========================================
 * COMPONENTE DE NAVEGAÇÃO PRINCIPAL
 * ===========================================
 * Menu fixo no topo com navegação responsiva
 */

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { menuItems } from "@/data/portfolio-data"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToSection } from "@/utils/scroll"

export function Navigation() {
  // ========================================
  // ESTADOS DO COMPONENTE
  // ========================================
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  // ========================================
  // HANDLERS DE EVENTOS
  // ========================================
  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Fecha menu mobile após clique
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ========================================
              LOGO/MARCA
              ======================================== */}
          <div className="font-bold text-xl text-gray-900">Meu Portfólio</div>

          {/* ========================================
              MENU DESKTOP
              ======================================== */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ========================================
              BOTÃO MENU MOBILE
              ======================================== */}
          <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ========================================
            MENU MOBILE
            ======================================== */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
