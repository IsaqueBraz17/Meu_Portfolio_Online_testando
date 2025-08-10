/**
 * ===========================================
 * SEÇÃO DE FORMAÇÃO E CERTIFICAÇÕES
 * ===========================================
 * Exibe formação acadêmica e certificados profissionais
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Formação & Certificações</h2>
          <p className="text-xl text-gray-600">Minha jornada acadêmica e profissional</p>
        </div>

        {/* ========================================
            CARDS DE FORMAÇÃO
            ======================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de Formação Acadêmica */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle>Formação Acadêmica</CardTitle>
                  <CardDescription>Educação formal</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Curso atual */}
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">Ciências da Computação</h3>
                <p className="text-gray-600">1º Ano - Em andamento</p>
                <p className="text-sm text-gray-500">Universidade</p>
              </div>

              {/* Espaço para futuras formações */}
              <div className="border-l-4 border-gray-300 pl-4 opacity-50">
                <h3 className="font-semibold text-gray-900">Próximas Formações</h3>
                <p className="text-gray-600">Espaço para futuras qualificações</p>
              </div>
            </CardContent>
          </Card>

          {/* Card de Certificações */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle>Certificações</CardTitle>
                  <CardDescription>Cursos e especializações</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Certificado atual */}
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900">Design Gráfico + Web + 3D</h3>
                <p className="text-gray-600">Evoloo - Certificado</p>
                <p className="text-sm text-gray-500">Curso completo de design</p>
              </div>

              {/* Espaços para futuras certificações */}
              <div className="border-l-4 border-gray-300 pl-4 opacity-50">
                <h3 className="font-semibold text-gray-900">Próximas Certificações</h3>
                <p className="text-gray-600">Espaço para novos certificados</p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4 opacity-50">
                <h3 className="font-semibold text-gray-900">Mais Certificações</h3>
                <p className="text-gray-600">Espaço para expansão</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
