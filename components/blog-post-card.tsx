import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    category: string
    author: string
    date: string
    image: string
    readTime: string
  }
  variant?: "default" | "compact"
}

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  if (variant === "compact") {
    return (
      <Card className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden">
        <div className="flex gap-4 p-4">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex-shrink-0 overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <span className="px-2 py-1 bg-emerald-100 text-[#0f4d3a] rounded-full text-xs font-semibold uppercase">
              {post.category}
            </span>
            <h3 className="text-sm font-bold mt-2 mb-1 line-clamp-2">{post.title}</h3>
            <p className="text-xs text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden group">
      <div className="aspect-[16/10] bg-gradient-to-br from-emerald-100 to-emerald-50 overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-emerald-100 text-[#0f4d3a] rounded-full text-xs font-semibold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-balance leading-tight group-hover:text-[#0f4d3a] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
        </div>
        <Link href={`/blog/${post.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-[#0f4d3a] group-hover:text-white group-hover:border-[#0f4d3a] transition-colors bg-transparent"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
