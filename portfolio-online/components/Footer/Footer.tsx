/**
 * ===========================================
 * COMPONENTE FOOTER
 * ===========================================
 * Rodapé do portfólio
 */

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">© {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
