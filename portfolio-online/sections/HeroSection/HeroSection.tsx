"use client"

/**
 * ===========================================
 * SEÇÃO HERO (APRESENTAÇÃO PRINCIPAL)
 * ===========================================
 * Primeira seção do portfólio com apresentação e foto
 */

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/utils/scroll"

export function HeroSection() {
  // ========================================
  // HANDLERS DE EVENTOS
  // ========================================
  const handleContactClick = () => {
    scrollToSection("contact")
  }

  const handleProjectsClick = () => {
    scrollToSection("projects")
  }

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ========================================
              CONTEÚDO TEXTUAL
              ======================================== */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Olá, eu sou
                <span className="text-blue-600 block">Desenvolvedor & Designer</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transformo ideias em experiências digitais incríveis. Especializado em desenvolvimento frontend e design
                gráfico, criando soluções que conectam tecnologia e criatividade.
              </p>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleContactClick}>
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg" onClick={handleProjectsClick}>
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* ========================================
              FOTO DE PERFIL
              ======================================== */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-2">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Sua+Foto"
                  alt="Foto de perfil profissional"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full object-cover"
                  priority // Carrega a imagem com prioridade
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
