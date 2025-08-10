/**
 * ===========================================
 * SEÇÃO DE CONTATO
 * ===========================================
 * Informações de contato e formulário
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { contactInfo, socialLinks } from "@/data/portfolio-data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            CABEÇALHO DA SEÇÃO
            ======================================== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contato</h2>
          <p className="text-xl text-gray-300">Vamos trabalhar juntos no seu próximo projeto</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ========================================
              INFORMAÇÕES DE CONTATO
              ======================================== */}
          <div className="space-y-8">
            {/* Informações básicas */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-gray-600"
                    aria-label={`Visitar ${social.name}`}
                  >
                    <div className="text-gray-300 hover:text-blue-400 transition-colors">{social.icon}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================
              FORMULÁRIO DE CONTATO
              ======================================== */}
          <Card className="border-0 shadow-lg bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Envie uma mensagem</CardTitle>
              <CardDescription className="text-gray-400">
                Preencha o formulário e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                {/* Nome e Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                    required
                  />
                </div>

                {/* Botão de envio */}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
