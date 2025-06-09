"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sparkles, Upload, FileCheck, Clock, CheckCircle, Lock, Globe, Award, Zap } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { SocialMedia } from "@/components/social-media"

export default function HowItWorksPage() {
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium transition-colors hover:text-purple-600">
              Search Files
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium transition-colors hover:text-purple-600 text-purple-600"
            >
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-600">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden sm:block">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Sign Up
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  It Works
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed">
                Protecting your intellectual property has never been easier. Follow these simple steps to secure your
                creative works in minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-6">
                    <Upload className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Upload Your Work</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Simply drag and drop your files or browse to select them. We support documents, images, audio,
                    video, and code files.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="p-4 bg-cyan-100 rounded-full w-fit mx-auto mb-6">
                    <FileCheck className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Verify & Process</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Our system automatically verifies your file integrity and creates a secure digital fingerprint for
                    your intellectual property.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="p-4 bg-emerald-100 rounded-full w-fit mx-auto mb-6">
                    <Clock className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Timestamp & Secure</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    We create an immutable timestamp and store your work securely using blockchain technology and
                    encrypted storage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Protected</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Receive your protection certificate and unique ID. Your intellectual property is now legally
                    documented and protected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                What Happens Behind the Scenes?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our advanced technology ensures your IP is protected with the highest standards
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg mt-1">
                    <Lock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cryptographic Hashing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We create a unique digital fingerprint of your work using SHA-256 cryptographic hashing, ensuring
                      any changes to your file can be detected.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg mt-1">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Timestamping</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your file's hash is recorded on the blockchain with an immutable timestamp, providing undeniable
                      proof of when your work was created.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg mt-1">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Documentation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We generate comprehensive legal documentation that can be used in court to prove ownership and
                      creation date of your intellectual property.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg mt-1">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Verification</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Anyone can verify the authenticity and timestamp of your protected work using our verification
                      system and your unique protection ID.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full w-fit mx-auto mb-4">
                        <Shield className="h-12 w-12 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank-Grade Security</h3>
                      <p className="text-gray-600">
                        Your files are encrypted and stored with the same security standards used by financial
                        institutions.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">256-bit AES encryption</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">Redundant backup systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">SOC 2 Type II compliant</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">24/7 security monitoring</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about protecting your intellectual property
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long does the protection process take?
                  </h3>
                  <p className="text-gray-600">
                    The protection process is instant! As soon as you upload your file, it's timestamped and secured.
                    You'll receive your protection certificate immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Is my protected work legally binding?</h3>
                  <p className="text-gray-600">
                    Yes! Our protection creates legally admissible evidence of ownership and creation date that can be
                    used in legal proceedings worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What file types do you support?</h3>
                  <p className="text-gray-600">
                    We support all major file types including documents (PDF, DOC), images (JPG, PNG), audio (MP3, WAV),
                    video (MP4, AVI), and code files.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I protect work I created in the past?
                  </h3>
                  <p className="text-gray-600">
                    You can protect any existing work. The timestamp will reflect when you uploaded it to our platform,
                    establishing your claim from that point forward.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
          <div className="container px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Protect your intellectual property in minutes with our simple, secure process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/upload">
                <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Start Protecting Now
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  Get Free Registration
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container py-10 px-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-cyan-500" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  IPProtect
                </span>
              </div>
              <SocialMedia />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t">
              <p className="text-sm text-gray-500 text-center sm:text-left">© 2025 IPProtect. All rights reserved.</p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
                <Link href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
