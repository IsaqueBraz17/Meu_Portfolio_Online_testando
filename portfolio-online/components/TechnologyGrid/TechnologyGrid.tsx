/**
 * ===========================================
 * COMPONENTE GRID DE TECNOLOGIAS
 * ===========================================
 * Grid responsivo para exibir tecnologias com logos
 */

import { TechnologyBadge } from "@/components/TechnologyBadge/TechnologyBadge"

interface TechnologyGridProps {
  technologies: string[]
  variant?: "light" | "dark"
  columns?: 2 | 3 | 4
}

export function TechnologyGrid({ technologies, variant = "light", columns = 3 }: TechnologyGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-3 ${gridCols[columns]}`}>
      {technologies.map((tech) => (
        <TechnologyBadge key={tech} techName={tech} variant={variant} size="md" />
      ))}
    </div>
  )
}
