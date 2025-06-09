"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, Send, Minimize2, Sparkles, User } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your IPProtect AI assistant. How can I help you protect your intellectual property today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call an API)
    // This would be replaced with actual AI API calls in production
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate response based on user input
    let response = ""
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("copyright") || lowerInput.includes("protect")) {
      response =
        "Copyright protection is automatic upon creation of your work. When you upload your work to IPProtect, we provide a timestamped certificate that can help prove ownership in case of disputes."
    } else if (lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("fee")) {
      response =
        "IPProtect offers a free tier for basic protection. Premium plans start at $9.99/month for enhanced protection features. Check our pricing page for more details."
    } else if (lowerInput.includes("file") || lowerInput.includes("upload")) {
      response =
        "You can upload various file types including documents, images, audio, code, and video. Each file is securely stored and receives a unique digital fingerprint for verification."
    } else {
      response =
        "Thank you for your question. IPProtect helps creators secure their intellectual property through our advanced protection system. Is there something specific about IP protection you'd like to know?"
    }

    // Add assistant response
    const assistantMessage = { role: "assistant" as const, content: response }
    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 p-0 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed ${
            isMinimized ? "bottom-6 right-6 w-auto h-auto" : "bottom-6 right-6 w-80 sm:w-96"
          } shadow-2xl rounded-2xl transition-all duration-200 z-50`}
        >
          {isMinimized ? (
            <Button
              className="rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 p-0 flex items-center justify-center"
              onClick={() => setIsMinimized(false)}
            >
              <Bot className="h-6 w-6" />
            </Button>
          ) : (
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    <CardTitle className="text-sm font-medium">IP Assistant</CardTitle>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-white hover:bg-white/20"
                      onClick={() => setIsMinimized(true)}
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-white hover:bg-white/20"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 bg-gray-50">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === "user"
                            ? "bg-purple-600 text-white rounded-tr-none"
                            : "bg-white border border-gray-200 rounded-tl-none"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.role === "assistant" ? (
                            <Sparkles className="h-3 w-3 text-purple-600" />
                          ) : (
                            <User className="h-3 w-3 text-white" />
                          )}
                          <span
                            className={`text-xs font-medium ${message.role === "user" ? "text-white" : "text-purple-600"}`}
                          >
                            {message.role === "user" ? "You" : "IP Assistant"}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start mb-4">
                      <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-white border border-gray-200 rounded-tl-none">
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium text-purple-600">IP Assistant</span>
                        </div>
                        <div className="flex gap-1">
                          <span className="animate-bounce">•</span>
                          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                            •
                          </span>
                          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                            •
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <div className="flex w-full gap-2">
                  <Input
                    placeholder="Ask a question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      )}
    </>
  )
}
