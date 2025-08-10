/**
 * ===========================================
 * COMPONENTE BADGE DE TECNOLOGIA
 * ===========================================
 * Badge especializado para exibir tecnologias com logo e cor
 */

import Image from "next/image"
import { technologyLogos } from "@/data/portfolio-data"

interface TechnologyBadgeProps {
  techName: string
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

export function TechnologyBadge({ techName, variant = "light", size = "md" }: TechnologyBadgeProps) {
  const tech = technologyLogos[techName]

  // Configurações de tamanho
  const sizeConfig = {
    sm: { icon: "w-4 h-4", text: "text-xs", padding: "px-2 py-1" },
    md: { icon: "w-5 h-5", text: "text-sm", padding: "px-3 py-2" },
    lg: { icon: "w-6 h-6", text: "text-base", padding: "px-4 py-3" },
  }

  const config = sizeConfig[size]

  // Estilos baseados na variante
  const variantStyles = {
    light: "bg-gray-50 border-gray-200 hover:border-gray-300",
    dark: "bg-gray-700/50 border-gray-600 hover:border-gray-500 backdrop-blur-sm",
  }

  const textColor = variant === "dark" ? tech?.color || "#E5E7EB" : tech?.color || "#374151"

  return (
    <div
      className={`
        flex items-center space-x-2 rounded-lg border transition-colors
        ${config.padding} ${variantStyles[variant]}
      `}
      style={{ borderColor: tech?.color || (variant === "dark" ? "#6B7280" : "#D1D5DB") }}
    >
      {/* Logo da tecnologia */}
      {tech?.logo && (
        <Image
          src={tech.logo || "/placeholder.svg"}
          alt={`${techName} logo`}
          width={24}
          height={24}
          className={config.icon}
        />
      )}

      {/* Nome da tecnologia */}
      <span className={`font-medium ${config.text}`} style={{ color: textColor }}>
        {techName}
      </span>
    </div>
  )
}
