import { Leaf, Calendar, User, ArrowRight, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Sample blog posts data - in production, this would come from a database or CMS
const blogPosts = [
  {
    id: "climate-finance-roadmap-2025",
    title: "Sierra Leone's Climate Finance Roadmap for 2025",
    excerpt:
      "Unveiling our comprehensive strategy to mobilize over $500M in climate finance for transformative energy and resilience projects across Sierra Leone.",
    category: "Climate Finance",
    categorySlug: "climate-finance",
    author: "Dr. Sarah Kamara",
    date: "March 15, 2025",
    image: "/climate-finance-meeting.jpg",
    readTime: "8 min read",
  },
  {
    id: "clean-cooking-initiative",
    title: "National Clean Cooking Initiative: Progress and Partnerships",
    excerpt:
      "Exploring the innovative approaches and strategic partnerships driving Sierra Leone's transition to clean cooking solutions for 2 million households.",
    category: "Energy Access",
    categorySlug: "energy-access",
    author: "Mohamed Sesay",
    date: "March 10, 2025",
    image: "/clean-cooking-stoves-africa.jpg",
    readTime: "6 min read",
  },
  {
    id: "renewable-energy-investments",
    title: "Unlocking Private Sector Investment in Renewable Energy",
    excerpt:
      "How innovative financing mechanisms are catalyzing private investment in solar, wind, and hydro projects across Sierra Leone.",
    category: "Investment",
    categorySlug: "investment",
    author: "Mohamed Sesay",
    date: "March 5, 2025",
    image: "/solar-panels-investment-africa.jpg",
    readTime: "7 min read",
  },
  {
    id: "climate-adaptation-agriculture",
    title: "Climate Adaptation Strategies for Agricultural Resilience",
    excerpt:
      "Building food security through climate-smart agriculture and nature-based solutions that protect farmers from climate shocks.",
    category: "Climate Resilience",
    categorySlug: "climate-resilience",
    author: "Fatmata Koroma",
    date: "February 28, 2025",
    image: "/climate-smart-agriculture-africa.jpg",
    readTime: "9 min read",
  },
  {
    id: "capacity-building-success",
    title: "Capacity Building: Empowering MDAs for Climate Action",
    excerpt:
      "Our comprehensive training programs have equipped over 300 government officials with skills in climate finance and project development.",
    category: "Capacity Building",
    categorySlug: "capacity-building",
    author: "Ibrahim Bangura",
    date: "February 20, 2025",
    image: "/training-workshop-africa.jpg",
    readTime: "5 min read",
  },
  {
    id: "energy-compact-commitments",
    title: "Sierra Leone's Energy Compact: Commitments and Progress",
    excerpt: "Tracking our progress toward universal energy access by 2030 and the partnerships making it possible.",
    category: "Policy & Regulation",
    categorySlug: "policy-regulation",
    author: "Dr. Sarah Kamara",
    date: "February 15, 2025",
    image: "/energy-policy-africa.jpg",
    readTime: "10 min read",
  },
]

const categories = [
  { name: "All Posts", slug: "all", count: 6 },
  { name: "Climate Finance", slug: "climate-finance", count: 1 },
  { name: "Energy Access", slug: "energy-access", count: 1 },
  { name: "Investment", slug: "investment", count: 1 },
  { name: "Climate Resilience", slug: "climate-resilience", count: 1 },
  { name: "Capacity Building", slug: "capacity-building", count: 1 },
  { name: "Policy & Regulation", slug: "policy-regulation", count: 1 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">Insights & Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Blog & Resources</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Latest insights on climate finance, energy innovation, and sustainable development in Sierra Leone
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={category.slug === "all" ? "default" : "outline"}
                  className={category.slug === "all" ? "bg-[#0f4d3a] hover:bg-[#0a362a]" : ""}
                  size="sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest insights on climate and energy transformation</p>
          </div>

          <Card className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-50">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-[#0f4d3a] rounded-full text-xs font-semibold uppercase tracking-wide">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-balance leading-tight">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  <Button className="bg-[#0f4d3a] hover:bg-[#0a362a]">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Explore our collection of insights and updates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden group"
              >
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
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm" className="bg-[#0f4d3a]">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stay Updated</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            Subscribe to our newsletter for the latest insights on climate finance and energy innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-emerald-200"
            />
            <Button size="lg" className="bg-white text-[#0f4d3a] hover:bg-emerald-50 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
