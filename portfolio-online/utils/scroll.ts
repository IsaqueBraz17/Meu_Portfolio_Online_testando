/**
 * ===========================================
 * UTILITÁRIOS DE NAVEGAÇÃO
 * ===========================================
 * Funções auxiliares para navegação suave entre seções
 */

/**
 * Navega suavemente para uma seção específica
 * @param sectionId - ID da seção de destino
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

/**
 * Verifica se uma seção existe no DOM
 * @param sectionId - ID da seção a verificar
 * @returns boolean indicando se a seção existe
 */
export function sectionExists(sectionId: string): boolean {
  return document.getElementById(sectionId) !== null
}
