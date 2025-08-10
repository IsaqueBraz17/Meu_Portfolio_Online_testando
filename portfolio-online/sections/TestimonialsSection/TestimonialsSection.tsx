/**
 * ===========================================
 * SEÇÃO DE DEPOIMENTOS
 * ===========================================
 * Exibe depoimentos de clientes
 */

import { TestimonialCard } from "@/components/TestimonialCard/TestimonialCard"
import { testimonials } from "@/data/portfolio-data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-600">O que meus clientes dizem sobre meu trabalho</p>
        </div>

        {/* ========================================
            GRID DE DEPOIMENTOS
            ======================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
