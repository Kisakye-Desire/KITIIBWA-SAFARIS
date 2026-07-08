'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '256763705967'
  const whatsappMessage = encodeURIComponent('Hi KITIIBWA SAFARIS! I am interested in booking a safari experience.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  )
}
