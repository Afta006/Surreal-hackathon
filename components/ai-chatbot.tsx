"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your IP protection assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    // Array of possible responses for each category
    const responses = {
      upload: [
        "To upload your files, click the 'Upload Files' button in the navigation or go to our upload page. We support documents, images, audio, video, and code files up to specific size limits.",
        "You can upload your intellectual property by clicking the 'Upload' button in the header or navigating to the upload page. We accept various file formats including PDFs, images, audio files, and more.",
        "Uploading is easy! Just go to the upload page, select your file type, add a title and description, and choose your file. We'll handle the protection process automatically.",
      ],
      protection: [
        "Our IP protection process is simple: upload your file, we create a cryptographic hash, timestamp it on the blockchain, and provide you with a legal certificate. This gives you proof of ownership and creation date.",
        "We protect your intellectual property through a secure blockchain-based timestamping system, creating an immutable record of your ownership that's legally admissible in court.",
        "Protection happens instantly when you upload. We generate a unique digital fingerprint of your work, secure it with blockchain technology, and issue you a certificate of ownership.",
      ],
      pricing: [
        "We offer free registration for your first intellectual property submission! After that, our pricing is transparent and affordable. Check our pricing page for detailed information.",
        "Your first submission is completely free! For subsequent submissions, we have flexible pricing plans starting at just $9.99 per month for regular users.",
        "New users get their first submission free of charge! Our premium plans start at $9.99/month and include additional features like IP monitoring and infringement alerts.",
      ],
      legal: [
        "Yes! Our protection creates legally admissible evidence that can be used in court proceedings worldwide. We generate comprehensive documentation that proves ownership and creation date.",
        "Our certificates are legally admissible in courts across 150+ countries. The blockchain timestamp provides irrefutable proof of your ownership at a specific date and time.",
        "The protection we provide is legally binding and can be used as evidence in intellectual property disputes. Our documentation meets international legal standards for IP protection.",
      ],
      process: [
        "Our process works in 4 steps: 1) Upload your work, 2) We verify and process it, 3) Create an immutable timestamp, 4) You get your protection certificate. It's instant and secure!",
        "The protection process is straightforward: upload your file, provide details about your work, we secure it with blockchain technology, and issue your protection certificate immediately.",
        "It's a simple 4-step process: upload, verify, timestamp, and protect. The entire process takes just minutes, and your work is protected instantly.",
      ],
    }

    // Determine which category the input belongs to
    let category = "general"
    if (lowerInput.includes("upload") || lowerInput.includes("file")) {
      category = "upload"
    } else if (lowerInput.includes("protect") || lowerInput.includes("protection")) {
      category = "protection"
    } else if (lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("free")) {
      category = "pricing"
    } else if (lowerInput.includes("legal") || lowerInput.includes("court")) {
      category = "legal"
    } else if (lowerInput.includes("how") || lowerInput.includes("work") || lowerInput.includes("process")) {
      category = "process"
    }

    // Return a random response from the appropriate category
    if (category !== "general") {
      const categoryResponses = responses[category as keyof typeof responses]
      return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
    }

    // Default responses for general questions
    const generalResponses = [
      "I'm here to help with any questions about IP protection! You can ask me about uploading files, our protection process, pricing, legal validity, or how our service works. What would you like to know?",
      "Welcome to IPProtect! I can answer questions about our services, file uploads, protection methods, pricing, or legal aspects of IP protection. What can I help you with today?",
      "How can I assist you with protecting your intellectual property today? Feel free to ask about our upload process, protection methods, pricing, or legal aspects.",
    ]

    return generalResponses[Math.floor(Math.random() * generalResponses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-t-lg p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Assistant
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "ai" && (
                  <div className="p-2 bg-purple-100 rounded-full flex-shrink-0">
                    <Bot className="h-4 w-4 text-purple-600" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.sender === "user" && (
                  <div className="p-2 bg-gray-100 rounded-full flex-shrink-0">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="p-2 bg-purple-100 rounded-full flex-shrink-0">
                  <Bot className="h-4 w-4 text-purple-600" />
                </div>
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about IP protection..."
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
