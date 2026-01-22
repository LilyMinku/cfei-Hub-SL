import { Leaf, Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// In production, this would fetch from a database based on the slug
const blogPost = {
  id: "climate-finance-roadmap-2025",
  title: "Sierra Leone's Climate Finance Roadmap for 2025",
  excerpt:
    "Unveiling our comprehensive strategy to mobilize over $500M in climate finance for transformative energy and resilience projects across Sierra Leone.",
  category: "Climate Finance",
  categorySlug: "climate-finance",
  author: "Dr. Sarah Kamara",
  authorRole: "Senior Climate Change and Energy Finance Advisor",
  date: "March 15, 2025",
  image: "/climate-finance-meeting.jpg",
  readTime: "8 min read",
  content: `
    <p>Sierra Leone stands at a pivotal moment in its climate and energy transition journey. As we navigate the complexities of climate change while pursuing sustainable development, the need for strategic climate finance mobilization has never been more critical.</p>

    <h2>The Challenge</h2>
    <p>Like many developing nations, Sierra Leone faces a significant climate finance gap. Our National Climate Change Strategy requires an estimated $3.5 billion over the next decade to achieve our climate and energy goals. Traditional financing mechanisms alone cannot bridge this gap—we need innovative approaches that leverage multiple sources of capital.</p>

    <h2>Our Strategic Approach</h2>
    <p>The Climate Finance Roadmap for 2025 represents a comprehensive strategy to unlock and deploy climate finance at scale. This roadmap is built on five strategic pillars:</p>

    <h3>1. Policy Enabling Environment</h3>
    <p>We're working with government agencies to strengthen regulatory frameworks that reduce investment risks and create attractive conditions for climate finance. This includes power purchase agreement frameworks, renewable energy feed-in tariffs, and carbon pricing mechanisms.</p>

    <h3>2. Project Pipeline Development</h3>
    <p>The Hub is developing a robust pipeline of bankable climate and energy projects across key sectors. Each project undergoes rigorous technical, financial, and environmental due diligence to ensure investment readiness.</p>

    <h3>3. Blended Finance Mechanisms</h3>
    <p>We're introducing innovative blended finance structures that combine concessional public finance with commercial capital. These mechanisms de-risk investments and attract private sector participation in climate projects.</p>

    <h3>4. Capacity Building</h3>
    <p>Building local capacity to develop, manage, and monitor climate projects is essential. Our comprehensive training programs target government officials, project developers, and financial institutions.</p>

    <h3>5. Strategic Partnerships</h3>
    <p>We're cultivating relationships with International Financial Institutions (IFIs), climate funds, development banks, and private investors to ensure diverse sources of climate finance.</p>

    <h2>Sector Priorities</h2>
    <p>The roadmap identifies four priority sectors for climate finance mobilization in 2025:</p>

    <ul>
      <li><strong>Renewable Energy:</strong> Solar, wind, and hydro projects to expand electricity access</li>
      <li><strong>Clean Cooking:</strong> Transition to clean cooking solutions for 2 million households</li>
      <li><strong>Climate-Smart Agriculture:</strong> Building agricultural resilience and food security</li>
      <li><strong>Nature-Based Solutions:</strong> Ecosystem restoration and conservation finance</li>
    </ul>

    <h2>Target Outcomes</h2>
    <p>By the end of 2025, the Climate Finance Roadmap aims to achieve:</p>

    <ul>
      <li>$500 million in committed climate finance across priority sectors</li>
      <li>30 investment-ready projects in the pipeline</li>
      <li>Establishment of a National Climate Finance Facility</li>
      <li>500+ stakeholders trained in climate finance mechanisms</li>
      <li>Partnerships with 15+ international financial institutions</li>
    </ul>

    <h2>Call to Action</h2>
    <p>Achieving our climate finance goals requires collective action. We invite investors, development partners, private sector actors, and civil society to join us in this transformative journey. Together, we can mobilize the capital needed to build a climate-resilient, sustainable Sierra Leone.</p>

    <p>For more information about investment opportunities or partnership possibilities, please contact our team at partnerships@cfih-sl.org.</p>
  `,
}

const relatedPosts = [
  {
    id: "clean-cooking-initiative",
    title: "National Clean Cooking Initiative: Progress and Partnerships",
    category: "Energy Access",
    image: "/clean-cooking-stoves.jpg",
  },
  {
    id: "renewable-energy-investments",
    title: "Unlocking Private Sector Investment in Renewable Energy",
    category: "Investment",
    image: "/solar-panels-investment.jpg",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-6 bg-background border-b">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-emerald-100 text-[#0f4d3a] rounded-full text-sm font-semibold uppercase tracking-wide">
              {blogPost.category}
            </span>
            <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">{blogPost.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <User className="w-6 h-6 text-[#0f4d3a]" />
              </div>
              <div>
                <div className="font-semibold">{blogPost.author}</div>
                <div className="text-sm text-muted-foreground">{blogPost.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{blogPost.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Share:</span>
            <Button size="icon" variant="outline" className="rounded-full bg-transparent">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full bg-transparent">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full bg-transparent">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="aspect-[21/9] bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl overflow-hidden">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:leading-relaxed
              prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-[#0f4d3a] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <Card className="border-2 border-[#0f4d3a]/20">
            <CardContent className="p-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-[#0f4d3a]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{blogPost.author}</h3>
                  <p className="text-sm text-[#0f4d3a] font-medium mb-3">{blogPost.authorRole}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dr. Kamara brings over 15 years of experience in climate finance and sustainable energy policy
                    across Africa. She holds a PhD in Environmental Economics and has led major climate initiatives for
                    international organizations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="px-3 py-1 bg-emerald-100 text-[#0f4d3a] rounded-full text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-4 text-balance group-hover:text-[#0f4d3a] transition-colors">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-[#0f4d3a] group-hover:text-white group-hover:border-[#0f4d3a] transition-colors bg-transparent"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl font-bold mb-6 text-balance">Don't Miss Our Latest Insights</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            Subscribe to receive updates on climate finance, energy innovation, and sustainable development
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button size="lg" className="bg-white text-[#0f4d3a] hover:bg-emerald-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
