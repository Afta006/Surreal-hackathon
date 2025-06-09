"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Loader2 } from "lucide-react"

interface AISuggestionsProps {
  field: "title" | "description"
  value: string
  onSuggestionSelect: (suggestion: string) => void
}

export function AISuggestions({ field, value, onSuggestionSelect }: AISuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const generateSuggestions = async () => {
    if (!value.trim() || value.length < 3) return

    setIsLoading(true)
    setShowSuggestions(true)

    // Simulate AI API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const titleSuggestions = [
      "Creative Digital Artwork Collection",
      "Original Music Composition",
      "Innovative Software Algorithm",
      "Unique Brand Logo Design",
      "Patent-Pending Invention",
    ]

    const descriptionSuggestions = [
      "A comprehensive collection of original digital artworks showcasing innovative design techniques and creative expression.",
      "An original musical composition featuring unique melodies and harmonies, created for commercial and artistic purposes.",
      "A proprietary software algorithm designed to optimize performance and provide innovative solutions for complex problems.",
      "A distinctive brand logo design that represents the company's values and creates strong visual identity in the marketplace.",
      "An innovative invention with patent-pending status, offering novel solutions to existing industry challenges.",
    ]

    const relevantSuggestions = field === "title" ? titleSuggestions : descriptionSuggestions
    setSuggestions(relevantSuggestions.slice(0, 3))
    setIsLoading(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.length >= 3) {
        generateSuggestions()
      } else {
        setShowSuggestions(false)
        setSuggestions([])
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [value, field])

  if (!showSuggestions && !isLoading) return null

  return (
    <Card className="mt-4 mb-4 border-purple-200 bg-gradient-to-r from-purple-50 to-cyan-50 shadow-md relative z-10">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">AI Suggestions</span>
        </div>

        {isLoading ? (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating suggestions...
          </div>
        ) : (
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start h-auto p-2 text-sm hover:bg-purple-100 hover:text-purple-700"
                onClick={() => {
                  onSuggestionSelect(suggestion)
                  setShowSuggestions(false)
                }}
              >
                {suggestion}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-center text-xs text-gray-500 hover:bg-gray-100"
              onClick={() => setShowSuggestions(false)}
            >
              Close suggestions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
