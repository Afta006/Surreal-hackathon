"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sparkles, Users, Award, Globe, Heart, Target, Zap, CheckCircle } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-purple-600">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-600 text-purple-600">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden sm:block">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Sign In
              </Button>
            </Link>
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
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  IPProtect
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed">
                We're on a mission to democratize intellectual property protection, making it accessible, affordable,
                and simple for creators worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2023, IPProtect was born from a simple observation: too many brilliant creators were losing
                  their intellectual property rights due to complex, expensive, and time-consuming protection processes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our founders, a team of legal experts, technologists, and creators, came together to build a platform
                  that would level the playing field. We believe that every idea, no matter how small, deserves
                  protection.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we've helped thousands of creators protect their work, from individual artists to Fortune 500
                  companies, making IP protection as simple as uploading a file.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                        <div className="text-gray-600">Protected Files</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-cyan-600 mb-2">25K+</div>
                        <div className="text-gray-600">Happy Creators</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                        <div className="text-gray-600">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                        <div className="text-gray-600">Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
                  <p className="text-gray-600">
                    Your intellectual property is precious. We use bank-grade security to ensure your creations are
                    always protected.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-cyan-100 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicity</h3>
                  <p className="text-gray-600">
                    Complex legal processes shouldn't stop creativity. We make IP protection as simple as a few clicks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-emerald-100 rounded-full w-fit mx-auto mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Creator-Centric</h3>
                  <p className="text-gray-600">
                    Every feature we build is designed with creators in mind. Your success is our success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                  <p className="text-gray-600">
                    Intellectual property knows no borders. Our platform serves creators from every corner of the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-pink-100 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    We're committed to providing the highest quality service and continuously improving our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-indigo-100 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                  <p className="text-gray-600">
                    We're building more than a platform - we're fostering a community of protected creators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose IPProtect?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're not just another IP service - we're your creative partner
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Protection</h3>
                    <p className="text-gray-600">
                      Get immediate timestamp certification and ownership documentation the moment you upload.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-100 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Expertise</h3>
                    <p className="text-gray-600">
                      Our team of IP attorneys ensures your protection meets all legal requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">
                      Professional IP protection shouldn't break the bank. We offer transparent, fair pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Questions about your IP? Our support team is always here to help, day or night.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="p-4 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full w-fit mx-auto">
                        <Target className="h-12 w-12 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To empower every creator with accessible, reliable, and comprehensive intellectual property
                      protection, fostering innovation and creativity worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
          <div className="container px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Protect Your Ideas?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who trust IPProtect with their most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/upload">
                <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
                  Start Protecting Now
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between px-4">
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
          <div className="flex gap-4">
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
      </footer>
    </div>
  )
}
