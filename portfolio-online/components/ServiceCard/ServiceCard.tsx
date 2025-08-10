"use client"

/**
 * ===========================================
 * COMPONENTE CARD DE SERVIÇO
 * ===========================================
 * Card para exibir serviços oferecidos
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { scrollToSection } from "@/utils/scroll"
import type { Service } from "@/types"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const handleContactClick = () => {
    scrollToSection("contact")
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      {/* ========================================
          CABEÇALHO DO CARD
          ======================================== */}
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
          <div className="text-blue-600">{service.icon}</div>
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>

      {/* ========================================
          CONTEÚDO DO CARD
          ======================================== */}
      <CardContent className="text-center space-y-4">
        <p className="text-gray-600">{service.description}</p>

        {/* Preço do serviço */}
        <div className="text-2xl font-bold text-blue-600">{service.price}</div>

        {/* Botão de ação */}
        <Button className="w-full" onClick={handleContactClick}>
          Solicitar Orçamento
        </Button>
      </CardContent>
    </Card>
  )
}
