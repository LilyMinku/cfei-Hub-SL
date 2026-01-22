import { Leaf, Target, Users, TrendingUp, FileText, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Presidential Initiative on Climate Change
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Climate Finance & Energy Innovation Hub
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-4 max-w-4xl mx-auto text-pretty leading-relaxed">
            Driving Sierra Leone's transition to sustainable energy and climate resilience
          </p>
          <p className="text-lg text-emerald-200/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            An end-to-end policy and finance platform introducing innovative solutions to leverage capital for
            sustainable energy investments across Sierra Leone
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about">
              <Button size="lg" className="bg-white text-[#0f4d3a] hover:bg-emerald-50 text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
            <Link href="/workstreams">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About PI-CREF */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About CFEI Hub</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Presidential Initiative on Climate Change, Renewable Energy and Food Security (PI-CREF) operates
                under the Office of the President, Republic of Sierra Leone.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mandate is to leverage support for related Ministries, Departments and Agencies (MDAs) to develop,
                manage, coordinate and strategically align public policy and national development efforts to drive
                effective delivery of climate change actions, universal access to sustainable energy, and food and
                nutrition security programmes.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-8">
                <Globe className="w-5 h-5 text-[#0f4d3a]" />
                <span>Office of the President, Republic of Sierra Leone</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/solar-panels-in-sierra-leone-rural-community.jpg"
                  alt="Renewable Energy in Sierra Leone"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Components */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Hub Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Three interrelated components working together to establish and operationalize the Hub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#0f4d3a] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Component 1</h3>
                <h4 className="text-lg font-semibold text-[#0f4d3a] mb-4">Establish the Hub</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Design and operationalize the Climate Finance and Energy Innovation Hub, including staffing
                  requirements and team recruitment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Recruit professional consultants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Procure office equipment & facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Provide operational support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0f4d3a] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Component 2</h3>
                <h4 className="text-lg font-semibold text-[#0f4d3a] mb-4">Strategy & Investment</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Develop comprehensive strategies, climate finance roadmaps, and investment project profiles for key
                  sectors.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Climate Finance Road Maps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Clean cooking project profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Policy assessments & innovations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0f4d3a] transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Component 3</h3>
                <h4 className="text-lg font-semibold text-[#0f4d3a] mb-4">Capacity & Advocacy</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Strengthen capacity of stakeholders through training, international engagement, and advocacy
                  campaigns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Capacity-building programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Resource mobilization meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Monitoring & awareness campaigns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Functions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Strategic Delivery Functions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Six key functions driving climate finance and energy innovation across Sierra Leone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Investment Data",
                desc: "High-impact climate and energy investment opportunities",
              },
              { icon: Target, title: "Policy Support", desc: "Energy Compact formulation and regulatory guidance" },
              { icon: Lightbulb, title: "Capacity Building", desc: "Knowledge development for MDAs and stakeholders" },
              {
                icon: TrendingUp,
                title: "Pipeline Projects",
                desc: "Transformative project development and management",
              },
              { icon: Globe, title: "Innovative Finance", desc: "Introduction of novel financing solutions" },
              { icon: Users, title: "Partnerships", desc: "Establish financing partnerships with IFIs" },
            ].map((func, index) => (
              <div key={index} className="p-6 rounded-xl border-2 hover:border-[#0f4d3a] transition-colors bg-card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <func.icon className="w-6 h-6 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{func.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{func.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-[#0f4d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Objectives</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
              Driving sustainable energy transformation and climate resilience in Sierra Leone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-[#0f4d3a] font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Operationalize Strategic Plans</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Facilitate implementation of Sierra Leone's Energy and Green Growth Transition Plan, National Clean
                  Cooking Strategy, and MTNDP 2024-2030 objectives.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-[#0f4d3a] font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Develop Pipeline Projects</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Create a comprehensive suite of transformative climate and energy projects ready for investment and
                  implementation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-[#0f4d3a] font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Policy Reform Support</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Identify gaps and provide targeted support for climate and energy sector policy reforms and regulatory
                  frameworks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-[#0f4d3a] font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Resource Mobilization</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Support fundraising efforts through strategic partnerships with IFIs and development partners,
                  organizing financing meetings and events.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-[#0f4d3a] font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Capacity Building</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Contribute to strengthening capabilities of Ministries, Departments and Agencies in climate and energy
                  sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A dedicated group of experts driving climate finance and energy innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Senior Climate Change and Energy Finance Advisor",
              "Energy Investment Specialist",
              "Climate Investment Specialist",
              "Monitoring and Evaluation Specialist",
              "Programme Assistant",
            ].map((role, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#0f4d3a]" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">{role}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/team">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0f4d3a] text-[#0f4d3a] hover:bg-[#0f4d3a] hover:text-white bg-transparent"
              >
                Meet the Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 text-[#0f4d3a] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Building a Sustainable Future Together</h2>
          <p className="text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
            Join us in transforming Sierra Leone's energy landscape and driving climate resilience through innovative
            finance and strategic partnerships.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0f4d3a] text-white hover:bg-[#0a362a] text-lg px-10 py-6">
                Get Involved
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="border-[#0f4d3a] text-[#0f4d3a] hover:bg-[#0f4d3a] hover:text-white text-lg px-10 py-6 bg-transparent"
              >
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
