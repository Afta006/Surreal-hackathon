"use client"

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"

export function SocialMedia() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/ipprotect",
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/ipprotect",
      color: "hover:text-sky-500 hover:bg-sky-50",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/ipprotect",
      color: "hover:text-pink-600 hover:bg-pink-50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/ipprotect",
      color: "hover:text-blue-700 hover:bg-blue-50",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@ipprotect",
      color: "hover:text-red-600 hover:bg-red-50",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ipprotect",
      color: "hover:text-gray-900 hover:bg-gray-50",
    },
  ]

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color} group`}
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          </a>
        )
      })}
    </div>
  )
}
