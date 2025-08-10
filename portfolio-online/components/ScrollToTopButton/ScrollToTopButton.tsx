"use client"

/**
 * ===========================================
 * COMPONENTE BOTÃO VOLTAR AO TOPO
 * ===========================================
 * Botão flutuante que aparece ao rolar a página e permite voltar ao topo.
 */

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { scrollToSection } from "@/utils/scroll" // Reutilizando a função de scroll

export function ScrollToTopButton() {
  // ========================================
  // ESTADOS DO COMPONENTE
  // ========================================
  const [isVisible, setIsVisible] = useState(false)

  // ========================================
  // LÓGICA DE VISIBILIDADE (JAVASCRIPT)
  // ========================================
  useEffect(() => {
    // Função para verificar a posição do scroll
    const toggleVisibility = () => {
      // Se a página rolou mais de 300px, o botão fica visível
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Adiciona o listener de evento de scroll ao carregar o componente
    window.addEventListener("scroll", toggleVisibility)

    // Limpa o listener de evento ao desmontar o componente para evitar vazamentos de memória
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, []) // O array vazio garante que o efeito só rode uma vez (ao montar e desmontar)

  // ========================================
  // HANDLER DE CLIQUE (JAVASCRIPT)
  // ========================================
  const handleScrollToTop = () => {
    // Usa a função utilitária para rolar suavemente para o topo da página
    scrollToSection("home")
  }

  return (
    <Button
      onClick={handleScrollToTop}
      className={`
        fixed bottom-6 right-6 p-3 rounded-full shadow-lg
        bg-blue-600 hover:bg-blue-700 text-white
        transition-opacity duration-300 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      size="icon"
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  )
}
