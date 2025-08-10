import type React from "react"
/**
 * ===========================================
 * TIPOS E INTERFACES DO PORTFÓLIO
 * ===========================================
 * Definições de tipos TypeScript para todo o projeto
 */

export interface MenuItem {
  id: string
  label: string
}

export interface Technology {
  name: string
  icon: string
}

export interface Service {
  title: string
  description: string
  price: string
  icon: React.ReactNode
}

export interface Project {
  id: number
  title: string
  category: string
  service: string
  description: string
  technologies: string[]
  repository: string
  images: string[]
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}
