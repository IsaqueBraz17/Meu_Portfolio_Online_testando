/**
 * ===========================================
 * SEÇÃO DE PROJETOS
 * ===========================================
 * Exibe projetos do portfólio com layout alternado
 */

import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { projects } from "@/data/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projetos</h2>
          <p className="text-xl text-gray-300">Alguns dos meus trabalhos recentes</p>
        </div>

        {/* ========================================
            LISTA DE PROJETOS
            ======================================== */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 === 1} // Alterna layout esquerda/direita
            />
          ))}
        </div>
      </div>
    </section>
  )
}
