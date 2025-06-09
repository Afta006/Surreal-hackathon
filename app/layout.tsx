import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AIChatbot } from "@/components/ai-chatbot"

export const metadata: Metadata = {
  title: "IPProtect - Secure Your Intellectual Property",
  description: "Protect your creative works, inventions, and ideas with our comprehensive IP protection services",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AIChatbot />
      </body>
    </html>
  )
}
