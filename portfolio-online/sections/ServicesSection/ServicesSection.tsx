/**
 * ===========================================
 * SEÇÃO DE SERVIÇOS
 * ===========================================
 * Exibe serviços oferecidos com preços
 */

import { ServiceCard } from "@/components/ServiceCard/ServiceCard"
import { services } from "@/data/portfolio-data"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
          <p className="text-xl text-gray-600">Soluções personalizadas para suas necessidades</p>
        </div>

        {/* ========================================
            GRID DE SERVIÇOS
            ======================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
