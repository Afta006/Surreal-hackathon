"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Sparkles, CheckCircle, Gift } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                <Sparkles className="absolute -top-1 -right-1 h-3 sm:h-4 w-3 sm:w-4 text-cyan-500" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                IPProtect
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">Already have an account?</span>
            <Link href="/login">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 text-sm">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 sm:py-12 relative px-4">
        <div className="mx-auto max-w-sm sm:max-w-md relative z-10">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-white rounded-full p-4 shadow-lg">
                  <Gift className="h-12 w-12 text-emerald-600" />
                </div>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Free Registration
              </CardTitle>
              <CardDescription className="text-gray-600">
                Claim your free intellectual property protection registration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-emerald-800">Special Offer</h3>
                </div>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Free first IP submission
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Digital timestamp certification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Basic ownership documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Email notifications
                  </li>
                </ul>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workType" className="text-gray-700 font-medium">
                    Type of Work to Protect
                  </Label>
                  <select
                    id="workType"
                    className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:border-emerald-400 focus:ring-emerald-400 bg-white"
                    required
                  >
                    <option value="">Select work type</option>
                    <option value="document">Document/Writing</option>
                    <option value="image">Image/Design</option>
                    <option value="audio">Audio/Music</option>
                    <option value="code">Software/Code</option>
                    <option value="video">Video Content</option>
                    <option value="invention">Invention/Idea</option>
                  </select>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 mt-1"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <Link href="#" className="text-emerald-600 hover:text-emerald-800 underline">
                      Terms of Service
                    </Link>{" "}
                    and understand this offer is limited to one free submission per user.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
                >
                  <Gift className="mr-2 h-4 w-4" />
                  Claim Free Registration
                </Button>
              </form>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-emerald-600 hover:text-emerald-800 underline font-medium">
                    Sign in here
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="h-6 w-6 text-purple-600" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-cyan-500" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              IPProtect
            </span>
          </div>
          <p className="text-sm text-gray-500">© 2025 IPProtect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
