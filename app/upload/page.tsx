"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Upload, FileText, ImageIcon, Music, Code, Film, Sparkles, CheckCircle } from "lucide-react"
import { AISuggestions } from "@/components/ai-suggestions"
import { MobileNav } from "@/components/mobile-nav"
import { SocialMedia } from "@/components/social-media"
import { useState } from "react"

export default function UploadPage() {
  const [documentTitle, setDocumentTitle] = useState("")
  const [documentDescription, setDocumentDescription] = useState("")
  const [imageTitle, setImageTitle] = useState("")
  const [imageDescription, setImageDescription] = useState("")
  const [audioTitle, setAudioTitle] = useState("")
  const [audioDescription, setAudioDescription] = useState("")
  const [codeTitle, setCodeTitle] = useState("")
  const [codeDescription, setCodeDescription] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [videoDescription, setVideoDescription] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
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
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-purple-600">
              How It Works
            </Link>
            <Link href="/search" className="text-sm font-medium transition-colors hover:text-purple-600">
              Search Files
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

      <div data-banner className="relative z-40">
        <div className="container py-3 px-4">
          <div className="flex items-center justify-between gap-2 rounded-lg border bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 p-3 text-sm shadow-sm">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <p className="text-xs sm:text-sm">
                Creators now get{" "}
                <Link
                  href="/register"
                  className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800 cursor-pointer"
                >
                  free registration
                </Link>{" "}
                for their first IP submission.
              </p>
            </div>
            <button
              className="rounded-full p-1 transition-colors hover:bg-emerald-100 flex items-center justify-center flex-shrink-0"
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
      </div>

      <main className="flex-1 container py-8 sm:py-12 relative px-4">
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-8 text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Upload Your Intellectual Property
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Secure your creative works with our advanced protection services
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
              <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                <Upload className="h-5 w-5 sm:h-6 sm:w-6" />
                File Upload
              </CardTitle>
              <CardDescription className="text-purple-100">
                Choose the type of intellectual property you want to protect
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Tabs defaultValue="document" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 bg-gradient-to-r from-purple-100 to-cyan-100 p-1 rounded-xl w-full">
                  <TabsTrigger
                    value="document"
                    className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-3 lg:py-4 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-600 rounded-lg transition-all text-xs sm:text-sm"
                  >
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">Document</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="image"
                    className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-3 lg:py-4 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-600 rounded-lg transition-all text-xs sm:text-sm"
                  >
                    <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">Image</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="audio"
                    className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-3 lg:py-4 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-600 rounded-lg transition-all text-xs sm:text-sm"
                  >
                    <Music className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">Audio</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-3 lg:py-4 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-600 rounded-lg transition-all text-xs sm:text-sm"
                  >
                    <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">Code</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="video"
                    className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-3 lg:py-4 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-600 rounded-lg transition-all text-xs sm:text-sm col-span-2 sm:col-span-1"
                  >
                    <Film className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium">Video</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="document" className="space-y-8 mt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 mb-8">
                    <div className="space-y-2 relative">
                      <Label htmlFor="title" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Title of Work
                      </Label>
                      <Input
                        id="title"
                        placeholder="Enter the title of your document"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="title"
                          value={documentTitle}
                          onSuggestionSelect={(suggestion) => setDocumentTitle(suggestion)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <Label htmlFor="description" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Description
                      </Label>
                      <Input
                        id="description"
                        placeholder="Briefly describe your document"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={documentDescription}
                        onChange={(e) => setDocumentDescription(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="description"
                          value={documentDescription}
                          onSuggestionSelect={(suggestion) => setDocumentDescription(suggestion)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <Label htmlFor="file" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                      Upload Document
                    </Label>
                    <div className="border-2 border-dashed border-purple-300 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-lg opacity-30"></div>
                        <Upload className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto text-purple-600 relative z-10" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 font-medium">
                        Drag and drop your file here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">Supports PDF, DOC, DOCX, TXT (Max 50MB)</p>
                      <Input id="file" type="file" className="hidden" />
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 w-full sm:w-auto"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="document" className="space-y-8 mt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 mb-8">
                    <div className="space-y-2 relative">
                      <Label htmlFor="image-title" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Title of Work
                      </Label>
                      <Input
                        id="image-title"
                        placeholder="Enter the title of your image"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={imageTitle}
                        onChange={(e) => setImageTitle(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="title"
                          value={imageTitle}
                          onSuggestionSelect={(suggestion) => setImageTitle(suggestion)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="image-description"
                        className="text-gray-700 font-medium text-sm sm:text-base mt-2"
                      >
                        Description
                      </Label>
                      <Input
                        id="image-description"
                        placeholder="Briefly describe your image"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={imageDescription}
                        onChange={(e) => setImageDescription(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="description"
                          value={imageDescription}
                          onSuggestionSelect={(suggestion) => setImageDescription(suggestion)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <Label htmlFor="image-file" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                      Upload Image
                    </Label>
                    <div className="border-2 border-dashed border-cyan-300 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30"></div>
                        <ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto text-cyan-600 relative z-10" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 font-medium">
                        Drag and drop your image here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">Supports JPG, PNG, GIF, SVG (Max 25MB)</p>
                      <Input id="image-file" type="file" className="hidden" />
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-cyan-300 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-400 w-full sm:w-auto"
                        onClick={() => document.getElementById("image-file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="document" className="space-y-8 mt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 mb-8">
                    <div className="space-y-2 relative">
                      <Label htmlFor="audio-title" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Title of Work
                      </Label>
                      <Input
                        id="audio-title"
                        placeholder="Enter the title of your audio"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={audioTitle}
                        onChange={(e) => setAudioTitle(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="title"
                          value={audioTitle}
                          onSuggestionSelect={(suggestion) => setAudioTitle(suggestion)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="audio-description"
                        className="text-gray-700 font-medium text-sm sm:text-base mt-2"
                      >
                        Description
                      </Label>
                      <Input
                        id="audio-description"
                        placeholder="Briefly describe your audio"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={audioDescription}
                        onChange={(e) => setAudioDescription(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="description"
                          value={audioDescription}
                          onSuggestionSelect={(suggestion) => setAudioDescription(suggestion)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <Label htmlFor="audio-file" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                      Upload Audio
                    </Label>
                    <div className="border-2 border-dashed border-emerald-300 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-lg opacity-30"></div>
                        <Music className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto text-emerald-600 relative z-10" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 font-medium">
                        Drag and drop your audio file here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">Supports MP3, WAV, FLAC, AAC (Max 100MB)</p>
                      <Input id="audio-file" type="file" className="hidden" accept="audio/*" />
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400 w-full sm:w-auto"
                        onClick={() => document.getElementById("audio-file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="document" className="space-y-8 mt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 mb-8">
                    <div className="space-y-2 relative">
                      <Label htmlFor="code-title" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Title of Work
                      </Label>
                      <Input
                        id="code-title"
                        placeholder="Enter the title of your code"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={codeTitle}
                        onChange={(e) => setCodeTitle(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="title"
                          value={codeTitle}
                          onSuggestionSelect={(suggestion) => setCodeTitle(suggestion)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <Label htmlFor="code-description" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Description
                      </Label>
                      <Input
                        id="code-description"
                        placeholder="Briefly describe your code"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={codeDescription}
                        onChange={(e) => setCodeDescription(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="description"
                          value={codeDescription}
                          onSuggestionSelect={(suggestion) => setCodeDescription(suggestion)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <Label htmlFor="code-file" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                      Upload Code
                    </Label>
                    <div className="border-2 border-dashed border-orange-300 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-30"></div>
                        <Code className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto text-orange-600 relative z-10" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 font-medium">
                        Drag and drop your code files here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">
                        Supports JS, TS, PY, JAVA, ZIP, RAR (Max 50MB)
                      </p>
                      <Input
                        id="code-file"
                        type="file"
                        className="hidden"
                        accept=".js,.ts,.py,.java,.zip,.rar,.txt,.md"
                      />
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 w-full sm:w-auto"
                        onClick={() => document.getElementById("code-file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="document" className="space-y-8 mt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 mb-8">
                    <div className="space-y-2 relative">
                      <Label htmlFor="video-title" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                        Title of Work
                      </Label>
                      <Input
                        id="video-title"
                        placeholder="Enter the title of your video"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="title"
                          value={videoTitle}
                          onSuggestionSelect={(suggestion) => setVideoTitle(suggestion)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="video-description"
                        className="text-gray-700 font-medium text-sm sm:text-base mt-2"
                      >
                        Description
                      </Label>
                      <Input
                        id="video-description"
                        placeholder="Briefly describe your video"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                      />
                      <div className="relative mt-1">
                        <AISuggestions
                          field="description"
                          value={videoDescription}
                          onSuggestionSelect={(suggestion) => setVideoDescription(suggestion)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <Label htmlFor="video-file" className="text-gray-700 font-medium text-sm sm:text-base mt-2">
                      Upload Video
                    </Label>
                    <div className="border-2 border-dashed border-pink-300 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-lg opacity-30"></div>
                        <Film className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto text-pink-600 relative z-10" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 font-medium">
                        Drag and drop your video file here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4">Supports MP4, AVI, MOV, WMV (Max 500MB)</p>
                      <Input id="video-file" type="file" className="hidden" accept="video/*" />
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 w-full sm:w-auto"
                        onClick={() => document.getElementById("video-file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-b-lg">
              <Button
                variant="outline"
                asChild
                className="border-gray-300 text-gray-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                <Link href="/">Cancel</Link>
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg px-8 w-full sm:w-auto">
                <Upload className="mr-2 h-4 w-4" />
                Submit for Protection
              </Button>
            </CardFooter>
          </Card>
        </div>
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
