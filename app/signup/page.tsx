"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Sparkles, Eye, EyeOff, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectWithMetaMask = async () => {
    try {
      if (!window.ethereum) return alert("MetaMask is not installed!")

      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      // Optional: Ask user to sign a message
      const message = "Please sign this message to verify your wallet."
      const signature = await signer.signMessage(message)

      // Save to backend (if needed)
      const res = await fetch("/api/registerWallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature }),
      })

      if (res.ok) {
        setWalletAddress(address)
        alert("Wallet connected and registered!")
      } else {
        alert("Failed to register wallet.")
      }
    } catch (error) {
      console.error(error)
      alert("Wallet connection failed.")
    }
  }

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
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="mx-auto max-w-sm sm:max-w-md relative z-10">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-white rounded-full p-4 shadow-lg">
                  <Shield className="h-12 w-12 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Create Account
              </CardTitle>
              <CardDescription className="text-gray-600">
                Join IPProtect to start protecting your intellectual property today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Free Registration Offer</span>
                </div>
                <p className="text-xs text-emerald-600">
                  Get your first IP submission protected for free when you sign up today!
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                    <Input id="firstName" placeholder="John" className="border-purple-200 focus:border-purple-400 focus:ring-purple-400" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="border-purple-200 focus:border-purple-400 focus:ring-purple-400" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-purple-200 focus:border-purple-400 focus:ring-purple-400" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Create a strong password" className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 pr-10" required />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 pr-10" required />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input id="terms" type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500 mt-1" required />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <Link href="#" className="text-purple-600 hover:text-purple-800 underline">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="#" className="text-purple-600 hover:text-purple-800 underline">Privacy Policy</Link>
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg">
                  Create Account
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600">or</p>
                <Button onClick={connectWithMetaMask} variant="outline" className="w-full mt-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                  Sign up with MetaMask
                </Button>
                {walletAddress && (
                  <p className="text-xs text-center mt-2 text-emerald-600">
                    Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                )}
              </div>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-purple-600 hover:text-purple-800 underline font-medium">
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
