/**
 * ===========================================
 * SEÇÃO DE TECNOLOGIAS
 * ===========================================
 * Exibe tecnologias separadas por categorias
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette } from "lucide-react"
import { TechnologyGrid } from "@/components/TechnologyGrid/TechnologyGrid"
import { frontendTechnologies, designTechnologies } from "@/data/portfolio-data"

export function TechnologiesSection() {
  // Extrair apenas os nomes das tecnologias
  const frontendTechNames = frontendTechnologies.map((tech) => tech.name)
  const designTechNames = designTechnologies.map((tech) => tech.name)

  return (
    <section id="technologies" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tecnologias</h2>
          <p className="text-xl text-gray-300">Ferramentas e tecnologias que domino</p>
        </div>

        {/* ========================================
            CATEGORIAS DE TECNOLOGIAS
            ======================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend & Web Development */}
          <Card className="border-0 shadow-lg bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Code className="h-8 w-8 text-blue-400" />
                <div>
                  <CardTitle className="text-white">Frontend & Web Development</CardTitle>
                  <CardDescription className="text-gray-400">
                    Desenvolvimento de interfaces e aplicações web
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TechnologyGrid technologies={frontendTechNames} variant="dark" columns={3} />
            </CardContent>
          </Card>

          {/* Design Gráfico & 3D */}
          <Card className="border-0 shadow-lg bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Palette className="h-8 w-8 text-purple-400" />
                <div>
                  <CardTitle className="text-white">Design Gráfico & 3D</CardTitle>
                  <CardDescription className="text-gray-400">Criação visual e modelagem tridimensional</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TechnologyGrid technologies={designTechNames} variant="dark" columns={3} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
