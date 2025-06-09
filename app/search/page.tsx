"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Sparkles,
  Search,
  FileText,
  ImageIcon,
  Music,
  Code,
  Film,
  Calendar,
  User,
  Download,
  Eye,
} from "lucide-react"
import { useState } from "react"

// Mock data for demonstration
const mockFiles = [
  {
    id: "IP-2025-001",
    name: "Revolutionary AI Algorithm",
    type: "code",
    owner: "John Doe",
    uploadDate: "2025-01-15",
    status: "Protected",
    description: "Machine learning algorithm for predictive analytics",
  },
  {
    id: "IP-2025-002",
    name: "Brand Logo Design",
    type: "image",
    owner: "Jane Smith",
    uploadDate: "2025-01-14",
    status: "Pending",
    description: "Modern logo design for tech startup",
  },
  {
    id: "IP-2025-003",
    name: "Original Music Composition",
    type: "audio",
    owner: "Mike Johnson",
    uploadDate: "2025-01-13",
    status: "Protected",
    description: "Instrumental piece for commercial use",
  },
  {
    id: "IP-2025-004",
    name: "Product Demo Video",
    type: "video",
    owner: "Sarah Wilson",
    uploadDate: "2025-01-12",
    status: "Protected",
    description: "Marketing video for new product launch",
  },
  {
    id: "IP-2025-005",
    name: "Research Paper Draft",
    type: "document",
    owner: "Dr. Robert Chen",
    uploadDate: "2025-01-11",
    status: "Protected",
    description: "Academic research on renewable energy",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "document":
      return <FileText className="h-5 w-5" />
    case "image":
      return <ImageIcon className="h-5 w-5" />
    case "audio":
      return <Music className="h-5 w-5" />
    case "code":
      return <Code className="h-5 w-5" />
    case "video":
      return <Film className="h-5 w-5" />
    default:
      return <FileText className="h-5 w-5" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "document":
      return "bg-purple-100 text-purple-700"
    case "image":
      return "bg-cyan-100 text-cyan-700"
    case "audio":
      return "bg-emerald-100 text-emerald-700"
    case "code":
      return "bg-orange-100 text-orange-700"
    case "video":
      return "bg-pink-100 text-pink-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("all")
  const [filteredFiles, setFilteredFiles] = useState(mockFiles)

  const handleSearch = () => {
    let filtered = mockFiles

    if (searchQuery) {
      filtered = filtered.filter(
        (file) =>
          file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          file.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          file.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
          file.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (searchType !== "all") {
      filtered = filtered.filter((file) => file.type === searchType)
    }

    setFilteredFiles(filtered)
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/upload" className="text-sm font-medium transition-colors hover:text-purple-600">
              Upload Files
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-purple-600">
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
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Search Protected Files
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">Find and manage your intellectual property submissions</p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Search className="h-6 w-6" />
                Search Files
              </CardTitle>
              <CardDescription className="text-purple-100">
                Search by file name, ID, owner, or description
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 space-y-2">
                    <Label htmlFor="search" className="text-gray-700 font-medium">
                      Search Query
                    </Label>
                    <Input
                      id="search"
                      placeholder="Enter file name, ID, or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-gray-700 font-medium">
                      File Type
                    </Label>
                    <select
                      id="type"
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="w-full px-3 py-2 border border-purple-200 rounded-md focus:border-purple-400 focus:ring-purple-400 bg-white"
                    >
                      <option value="all">All Types</option>
                      <option value="document">Documents</option>
                      <option value="image">Images</option>
                      <option value="audio">Audio</option>
                      <option value="code">Code</option>
                      <option value="video">Video</option>
                    </select>
                  </div>
                </div>
                <Button
                  onClick={handleSearch}
                  className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Search Results ({filteredFiles.length})</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Sort by Date
                </Button>
                <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Filter
                </Button>
              </div>
            </div>

            {filteredFiles.length === 0 ? (
              <Card className="p-12 text-center bg-white/80 backdrop-blur-sm">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No files found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or upload a new file</p>
                <Link href="/upload">
                  <Button className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                    Upload New File
                  </Button>
                </Link>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredFiles.map((file) => (
                  <Card
                    key={file.id}
                    className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div className={`p-3 rounded-lg ${getTypeColor(file.type)} flex-shrink-0`}>
                            {getTypeIcon(file.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 truncate">{file.name}</h3>
                              <Badge
                                variant={file.status === "Protected" ? "default" : "secondary"}
                                className={
                                  file.status === "Protected"
                                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 w-fit"
                                    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 w-fit"
                                }
                              >
                                {file.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3 text-sm sm:text-base">{file.description}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">ID:</span>
                                <span className="font-mono">{file.id}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{file.owner}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{file.uploadDate}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 w-full lg:w-auto lg:ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 lg:flex-none border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 lg:flex-none border-cyan-200 text-cyan-600 hover:bg-cyan-50"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
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
