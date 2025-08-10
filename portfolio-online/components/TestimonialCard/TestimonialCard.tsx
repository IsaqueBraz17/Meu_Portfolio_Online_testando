/**
 * ===========================================
 * COMPONENTE CARD DE DEPOIMENTO
 * ===========================================
 * Card para exibir depoimentos de clientes
 */

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="pt-6">
        {/* ========================================
            AVALIAÇÃO EM ESTRELAS
            ======================================== */}
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* ========================================
            CONTEÚDO DO DEPOIMENTO
            ======================================== */}
        <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

        {/* ========================================
            INFORMAÇÕES DO CLIENTE
            ======================================== */}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
