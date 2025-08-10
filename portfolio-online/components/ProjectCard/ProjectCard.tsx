/**
 * ===========================================
 * COMPONENTE CARD DE PROJETO
 * ===========================================
 * Card para exibir projetos do portfólio
 */

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { technologyLogos } from "@/data/portfolio-data"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  isReversed?: boolean // Para alternar layout esquerda/direita
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* ========================================
          GALERIA DE IMAGENS
          ======================================== */}
      <div className={isReversed ? "lg:col-start-2" : ""}>
        <div className="grid grid-cols-2 gap-4">
          {project.images.map((image, imgIndex) => (
            <div key={imgIndex} className={imgIndex === 0 ? "col-span-2" : ""}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagem ${imgIndex + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================
          INFORMAÇÕES DO PROJETO
          ======================================== */}
      <div className={`space-y-6 ${isReversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        {/* Categoria e título */}
        <div>
          <Badge variant="secondary" className="mb-2 bg-gray-800/70 text-gray-200 hover:bg-gray-700/70 border-gray-600">
            {project.category}
          </Badge>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-blue-400 font-medium mb-4">{project.service}</p>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tecnologias utilizadas com logos e cores */}
        <div>
          <h4 className="font-semibold text-white mb-3">Tecnologias utilizadas:</h4>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((techName) => {
              const tech = technologyLogos[techName]
              return (
                <div
                  key={techName}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm"
                  style={{ borderColor: tech?.color || "#6B7280" }}
                >
                  {tech?.logo && (
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${techName} logo`}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )}
                  <span className="font-medium text-sm" style={{ color: tech?.color || "#E5E7EB" }}>
                    {techName}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Link do repositório */}
        <Link
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Ver Repositório</span>
        </Link>
      </div>
    </div>
  )
}
