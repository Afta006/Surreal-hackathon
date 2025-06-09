"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Upload,
  CheckCircle,
  Sparkles,
  Award,
  FileText,
  ImageIcon,
  Music,
  Code,
  Film,
  Search,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-purple-600" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cyan-500" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              IPProtect
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium transition-colors hover:text-purple-600">
              Search Files
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-purple-600">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-600">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/search" className="hidden sm:block">
              <Button variant="outline" className="gap-2 border-purple-200 text-purple-600 hover:bg-purple-50">
                <Search className="h-4 w-4" />
                <span className="hidden lg:inline">Search</span>
              </Button>
            </Link>
            <Link href="/upload">
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg">
                <Upload className="h-4 w-4" />
                <span className="hidden sm:inline">Upload</span>
              </Button>
            </Link>
            <Link href="/login" className="hidden sm:block">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-4" data-banner>
        <div className="flex items-center justify-center gap-2 rounded-lg border bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 p-3 text-sm shadow-sm">
          <CheckCircle className="h-4 w-4 text-emerald-600" />
          <p>
            Creators now get{" "}
            <Link
              href="/register"
              className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800 cursor-pointer"
            >
              free registration
            </Link>{" "}
            for their first intellectual property submission.{" "}
            <Link href="#" className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              Learn more
            </Link>
          </p>
          <button
            className="ml-auto rounded-full p-1 transition-colors hover:bg-emerald-100 flex items-center justify-center"
            onClick={() => {
              const banner = document.querySelector("[data-banner]")
              if (banner) banner.style.display = "none"
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-600 hover:text-emerald-800"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-purple-600/10 animate-gradient-x">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Abstract IP Logo */}
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10 animate-spin-slow"
                          style={{ filter: "blur(1px)" }}
                        >
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#logoGradient)" strokeWidth="4" />
                          <path
                            d="M50 10 L50 90 M10 50 L90 50"
                            stroke="url(#logoGradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                          <path
                            d="M30 30 L70 70 M30 70 L70 30"
                            stroke="url(#logoGradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="60"
                            strokeDashoffset="0"
                            className="animate-dash"
                          />
                          <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#9333EA" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Shield
                    className="h-24 w-24 text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text relative z-10 animate-float"
                    style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  />
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Protect your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  intellectual property
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl px-4">
                Secure your creative works, inventions, and ideas with our comprehensive IP protection services. Join
                thousands of creators who trust us with their most valuable assets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 px-4">
                <Link href="/upload">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-xl text-lg px-8 py-6"
                  >
                    <Upload className="h-5 w-5" />
                    Upload Your Work
                  </Button>
                </Link>
                <Link href="/search">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto gap-2 border-purple-300 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                  >
                    <Search className="h-5 w-5" />
                    Search Files
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              What We Protect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive IP protection covers all forms of creative and intellectual works
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Documents & Writing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Protect your written works, research papers, manuscripts, and business documents.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Research papers & articles</li>
                <li>• Books & manuscripts</li>
                <li>• Business plans & proposals</li>
                <li>• Technical documentation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <ImageIcon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Visual Arts</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Secure your visual creations, designs, and artistic works from unauthorized use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital artwork & illustrations</li>
                <li>• Photography & images</li>
                <li>• Logo & brand designs</li>
                <li>• UI/UX designs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Music className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Audio & Music</h3>
              </div>
              <p className="text-gray-600 mb-4">Protect your musical compositions, recordings, and audio content.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Original music compositions</li>
                <li>• Podcast episodes</li>
                <li>• Voice recordings</li>
                <li>• Sound effects & samples</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Code className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Software & Code</h3>
              </div>
              <p className="text-gray-600 mb-4">Secure your software applications, algorithms, and source code.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Source code & algorithms</li>
                <li>• Mobile applications</li>
                <li>• Web applications</li>
                <li>• Software libraries</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-rose-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Film className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Video Content</h3>
              </div>
              <p className="text-gray-600 mb-4">Protect your video productions, animations, and multimedia content.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Video productions</li>
                <li>• Animations & motion graphics</li>
                <li>• Educational content</li>
                <li>• Marketing videos</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inventions & Ideas</h3>
              </div>
              <p className="text-gray-600 mb-4">Document and protect your innovative ideas and inventions.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product concepts</li>
                <li>• Technical innovations</li>
                <li>• Business methods</li>
                <li>• Process improvements</li>
              </ul>
            </div>
          </div>
        </section>
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
      <style jsx global>{`
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 15s ease infinite;
  }

  @keyframes spin-slow {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  @keyframes dash {
    to {
      stroke-dashoffset: 120;
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  
  .animate-dash {
    animation: dash 15s linear infinite;
  }
`}</style>
    </div>
  )
}
