"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield, Sparkles } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pb-4 border-b">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-cyan-500" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  IPProtect
                </span>
              </div>
            </Link>
          </div>

          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="/upload"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-purple-600 py-2"
            >
              Upload Files
            </Link>
            <Link
              href="/search"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-purple-600 py-2"
            >
              Search Files
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-purple-600 py-2"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-purple-600 py-2"
            >
              About Us
            </Link>
            <div className="border-t pt-4 mt-4">
              <div className="flex flex-col gap-3">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
