/**
 * ===========================================
 * COMPONENTE CARD DE TECNOLOGIA
 * ===========================================
 * Card reutilizável para exibir tecnologias
 */

import type { Technology } from "@/types"

interface TechnologyCardProps {
  technology: Technology
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {/* Ícone da tecnologia */}
      <span className="text-2xl" role="img" aria-label={technology.name}>
        {technology.icon}
      </span>

      {/* Nome da tecnologia */}
      <span className="font-medium text-gray-900">{technology.name}</span>
    </div>
  )
}
