/**
 * ===========================================
 * DADOS ESTÁTICOS DO PORTFÓLIO
 * ===========================================
 * Centralizando todos os dados do portfólio para fácil manutenção
 */

import { Code, Palette, Monitor, Box, Github, Linkedin, Instagram, Globe } from "lucide-react"
import type { MenuItem, Technology, Service, Project, Testimonial, ContactInfo, SocialLink } from "@/types"

// ========================================
// MENU DE NAVEGAÇÃO
// ========================================
export const menuItems: MenuItem[] = [
  { id: "home", label: "Home" },
  { id: "education", label: "Formação" },
  { id: "technologies", label: "Tecnologias" },
  { id: "services", label: "Serviços" },
  { id: "projects", label: "Projetos" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "contact", label: "Contato" },
]

// Adicionar logos e cores às tecnologias
// Substituir as tecnologias existentes por versões com logos e cores

// ========================================
// TECNOLOGIAS COM LOGOS E CORES
// ========================================
export interface TechnologyWithLogo {
  name: string
  icon: string
  logo: string
  color: string
}

// Mapeamento de tecnologias com logos e cores
export const technologyLogos: Record<string, TechnologyWithLogo> = {
  React: {
    name: "React",
    icon: "⚛️",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  "Next.js": {
    name: "Next.js",
    icon: "▲",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  TypeScript: {
    name: "TypeScript",
    icon: "📘",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  JavaScript: {
    name: "JavaScript",
    icon: "🟨",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  HTML5: {
    name: "HTML5",
    icon: "🌐",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  CSS3: {
    name: "CSS3",
    icon: "🎨",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: "💨",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#06B6D4",
  },
  "Node.js": {
    name: "Node.js",
    icon: "🟢",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  Stripe: {
    name: "Stripe",
    icon: "💳",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
    color: "#635BFF",
  },
  Photoshop: {
    name: "Photoshop",
    icon: "🎭",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    color: "#31A8FF",
  },
  Illustrator: {
    name: "Illustrator",
    icon: "🎨",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    color: "#FF9A00",
  },
  Figma: {
    name: "Figma",
    icon: "🎯",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
  },
  Blender: {
    name: "Blender",
    icon: "🔷",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    color: "#F5792A",
  },
  "After Effects": {
    name: "After Effects",
    icon: "🎬",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
    color: "#9999FF",
  },
  "Adobe XD": {
    name: "Adobe XD",
    icon: "🎨",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    color: "#FF61F6",
  },
  Principle: {
    name: "Principle",
    icon: "⚡",
    logo: "/placeholder.svg?height=24&width=24&text=P",
    color: "#6C5CE7",
  },
}

// ========================================
// TECNOLOGIAS - FRONTEND & WEB DEVELOPMENT
// ========================================
export const frontendTechnologies: Technology[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Node.js", icon: "🟢" },
]

// ========================================
// TECNOLOGIAS - DESIGN GRÁFICO & 3D
// ========================================
export const designTechnologies: Technology[] = [
  { name: "Photoshop", icon: "🎭" },
  { name: "Illustrator", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "Blender", icon: "🔷" },
  { name: "After Effects", icon: "🎬" },
  { name: "Cinema 4D", icon: "🎪" },
  { name: "InDesign", icon: "📄" },
  { name: "Sketch", icon: "💎" },
]

// ========================================
// SERVIÇOS OFERECIDOS
// ========================================
export const services: Service[] = [
  {
    title: "Desenvolvimento Frontend",
    description: "Criação de interfaces modernas e responsivas",
    price: "R$ 2.500 - R$ 8.000",
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "Design Gráfico",
    description: "Identidade visual, logos e materiais gráficos",
    price: "R$ 800 - R$ 3.500",
    icon: <Palette className="h-8 w-8" />,
  },
  {
    title: "Web Design",
    description: "Design de websites e aplicações web",
    price: "R$ 1.500 - R$ 5.000",
    icon: <Monitor className="h-8 w-8" />,
  },
  {
    title: "Design 3D",
    description: "Modelagem e renderização 3D",
    price: "R$ 1.200 - R$ 4.000",
    icon: <Box className="h-8 w-8" />,
  },
]

// ========================================
// PROJETOS DO PORTFÓLIO
// ========================================
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    category: "Frontend Development",
    service: "Desenvolvimento Web",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe"],
    repository: "https://github.com/usuario/ecommerce-project",
    images: [
      "/placeholder.svg?height=300&width=400&text=E-commerce+1",
      "/placeholder.svg?height=300&width=400&text=E-commerce+2",
      "/placeholder.svg?height=300&width=400&text=E-commerce+3",
    ],
  },
  {
    id: 2,
    title: "Identidade Visual Startup",
    category: "Design Gráfico",
    service: "Branding",
    description:
      "Criação completa de identidade visual para startup de tecnologia, incluindo logo, paleta de cores e manual de marca.",
    technologies: ["Illustrator", "Photoshop", "Figma"],
    repository: "https://behance.net/usuario/projeto-branding",
    images: [
      "/placeholder.svg?height=300&width=400&text=Branding+1",
      "/placeholder.svg?height=300&width=400&text=Branding+2",
      "/placeholder.svg?height=300&width=400&text=Branding+3",
    ],
  },
  {
    id: 3,
    title: "App Mobile Design",
    category: "UI/UX Design",
    service: "Design de Interface",
    description: "Design completo de aplicativo mobile para delivery de comida, com foco na experiência do usuário.",
    technologies: ["Figma", "Principle", "Adobe XD"],
    repository: "https://figma.com/usuario/app-design",
    images: [
      "/placeholder.svg?height=300&width=400&text=App+Design+1",
      "/placeholder.svg?height=300&width=400&text=App+Design+2",
      "/placeholder.svg?height=300&width=400&text=App+Design+3",
    ],
  },
]

// ========================================
// DEPOIMENTOS DE CLIENTES
// ========================================
export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    content: "Trabalho excepcional! Entregou exatamente o que precisávamos no prazo combinado. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor de Marketing, InnovaCorp",
    content: "Profissional muito competente e criativo. O projeto ficou além das nossas expectativas.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Fundadora, DesignHub",
    content: "Excelente comunicação e resultado final impecável. Já estamos planejando novos projetos juntos.",
    rating: 5,
  },
]

// ========================================
// INFORMAÇÕES DE CONTATO
// ========================================
export const contactInfo: ContactInfo = {
  email: "seu.email@exemplo.com",
  phone: "(11) 99999-9999",
  location: "São Paulo, SP - Brasil",
}

// ========================================
// REDES SOCIAIS
// ========================================
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/seuusuario",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/seuusuario",
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/seuusuario",
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@seuusuario",
    icon: <Globe className="h-6 w-6" />,
  },
]
