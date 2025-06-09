"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface AISuggestionsProps {
  field: string
  value: string
  onSuggestionSelect: (suggestion: string) => void
}

export function AISuggestions({ field, value, onSuggestionSelect }: AISuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  // Generate suggestions based on the current input value
  const generateSuggestions = async () => {
    if (!value || value.length < 3) return

    setLoading(true)

    // Simulate AI suggestions (in a real app, this would call an API)
    // This would be replaced with actual AI API calls in production
    await new Promise((resolve) => setTimeout(resolve, 800))

    let generatedSuggestions: string[] = []

    if (field === "title") {
      generatedSuggestions = [
        `${value} - Enhanced Version`,
        `Professional ${value}`,
        `${value} (Copyright Protected)`,
        `${value} - Original Work`,
      ]
    } else if (field === "description") {
      generatedSuggestions = [
        `A comprehensive ${value} created for professional use.`,
        `Original ${value} with unique creative elements.`,
        `Detailed ${value} with proprietary methodology.`,
        `Innovative approach to ${value} with distinctive features.`,
      ]
    }

    setSuggestions(generatedSuggestions)
    setLoading(false)
  }

  return (
    <div className="mt-1">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-7 px-2 text-xs text-purple-600 hover:bg-purple-50 hover:text-purple-700"
        onClick={generateSuggestions}
        disabled={loading || !value || value.length < 3}
      >
        <Sparkles className="h-3 w-3 mr-1" />
        {loading ? "Generating..." : "AI Suggestions"}
      </Button>

      {suggestions.length > 0 && (
        <div className="mt-2 space-y-1">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              type="button"
              variant="outline"
              size="sm"
              className="w-full justify-start text-left text-xs h-auto py-1 px-2 border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={() => onSuggestionSelect(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
