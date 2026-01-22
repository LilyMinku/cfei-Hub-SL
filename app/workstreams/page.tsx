import { Leaf, Target, FileText, TrendingUp, Lightbulb, Globe, Users, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkstreamsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Target className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Workstreams & Components</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Three integrated components delivering comprehensive climate finance and energy solutions
          </p>
        </div>
      </section>

      {/* Component 1 */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#0f4d3a]" />
                </div>
                <span className="text-sm font-bold text-[#0f4d3a] uppercase tracking-wide">Component 1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Establish the Hub</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Design and operationalize the Climate Finance and Energy Innovation Hub with full institutional capacity
                and technical expertise.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#0f4d3a] pl-6">
                  <h3 className="text-xl font-bold mb-2">Team Recruitment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recruit and onboard highly qualified professional consultants across five key specialist roles to
                    provide technical expertise.
                  </p>
                </div>

                <div className="border-l-4 border-[#0f4d3a] pl-6">
                  <h3 className="text-xl font-bold mb-2">Infrastructure Setup</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Procure essential office equipment, facilities, and technology infrastructure to support Hub
                    operations and collaboration.
                  </p>
                </div>

                <div className="border-l-4 border-[#0f4d3a] pl-6">
                  <h3 className="text-xl font-bold mb-2">Operational Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Establish systems for financial management, administrative procedures, and ongoing operational
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-[#0f4d3a]/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Key Deliverables</h3>
                  <div className="space-y-4">
                    {[
                      "Fully staffed Hub with 5 specialist consultants",
                      "Operational office with complete equipment",
                      "Financial management and administrative systems",
                      "Stakeholder engagement framework",
                      "Knowledge management platform",
                      "Monitoring and reporting mechanisms",
                    ].map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#0f4d3a] text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Component 2 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-2 border-[#0f4d3a]/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Strategic Outputs</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#0f4d3a]" />
                        Climate Finance Road Maps
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comprehensive strategies for mobilizing climate finance across priority sectors
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#0f4d3a]" />
                        Clean Cooking Profiles
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Investment-ready project profiles for clean cooking transition initiatives
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-[#0f4d3a]" />
                        Policy Assessments
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gap analysis and recommendations for policy and regulatory improvements
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#0f4d3a]" />
                        Innovation Mechanisms
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        New financing instruments and innovative approaches to capital mobilization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#0f4d3a]" />
                </div>
                <span className="text-sm font-bold text-[#0f4d3a] uppercase tracking-wide">Component 2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Strategy & Investment</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Develop comprehensive strategies, climate finance roadmaps, and investment-ready project profiles for
                key climate and energy sectors.
              </p>

              <div className="space-y-6">
                <div className="bg-background p-6 rounded-xl border-2 border-[#0f4d3a]/20">
                  <h3 className="font-bold mb-2">Strategic Planning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creation of sector-specific climate finance roadmaps aligned with national development priorities
                    and international commitments.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-xl border-2 border-[#0f4d3a]/20">
                  <h3 className="font-bold mb-2">Project Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Design and preparation of bankable project profiles ready for investor engagement and
                    implementation.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-xl border-2 border-[#0f4d3a]/20">
                  <h3 className="font-bold mb-2">Policy Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Technical assistance for policy reforms and regulatory frameworks that enable climate investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component 3 */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#0f4d3a]" />
                </div>
                <span className="text-sm font-bold text-[#0f4d3a] uppercase tracking-wide">Component 3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Capacity & Advocacy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Strengthen the capacity of government agencies and stakeholders while mobilizing resources through
                strategic advocacy and international engagement.
              </p>

              <div className="grid gap-6">
                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-[#0f4d3a] mb-3" />
                    <h3 className="text-xl font-bold mb-2">Capacity Building</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Comprehensive training programs for MDAs and stakeholders on climate finance, project development,
                      and energy innovation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <Globe className="w-8 h-8 text-[#0f4d3a] mb-3" />
                    <h3 className="text-xl font-bold mb-2">Resource Mobilization</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Organization of high-level meetings with IFIs, development partners, and investors to secure
                      financing for priority projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#0f4d3a]/20">
                  <CardContent className="p-6">
                    <Target className="w-8 h-8 text-[#0f4d3a] mb-3" />
                    <h3 className="text-xl font-bold mb-2">Advocacy Campaigns</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Strategic communication and awareness-raising initiatives to build support for climate and energy
                      transitions at all levels.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#0f4d3a] to-[#0a362a] text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8">Impact Areas</h3>
                <div className="space-y-6">
                  {[
                    {
                      number: "500+",
                      label: "Stakeholders Engaged",
                      desc: "Government officials, private sector, and civil society trained",
                    },
                    {
                      number: "20+",
                      label: "Partnership Meetings",
                      desc: "High-level engagements with IFIs and development partners",
                    },
                    {
                      number: "$50M+",
                      label: "Finance Mobilized",
                      desc: "Target climate and energy finance secured through partnerships",
                    },
                    {
                      number: "15+",
                      label: "Advocacy Campaigns",
                      desc: "Strategic communications reaching millions of Sierra Leoneans",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="border-l-4 border-emerald-300 pl-6">
                      <div className="text-3xl font-bold mb-1 text-emerald-300">{stat.number}</div>
                      <div className="font-semibold mb-1">{stat.label}</div>
                      <p className="text-sm text-emerald-100 leading-relaxed">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Functions */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Strategic Delivery Functions</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
              Six interconnected functions that drive our work across all components
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Investment Data & Opportunities",
                desc: "Identify and develop high-impact climate and energy investment opportunities with comprehensive data analysis and market intelligence.",
              },
              {
                icon: Target,
                title: "Policy Support & Reform",
                desc: "Provide technical assistance for Energy Compact formulation, regulatory guidance, and policy framework enhancement.",
              },
              {
                icon: Lightbulb,
                title: "Capacity Building",
                desc: "Develop knowledge and skills of MDAs, private sector, and stakeholders through targeted training and technical support.",
              },
              {
                icon: TrendingUp,
                title: "Pipeline Project Management",
                desc: "Curate and manage a portfolio of transformative climate and energy projects from concept to bankability.",
              },
              {
                icon: Globe,
                title: "Innovative Financing",
                desc: "Introduce novel financing solutions including blended finance, green bonds, and risk mitigation instruments.",
              },
              {
                icon: Users,
                title: "Strategic Partnerships",
                desc: "Establish and nurture financing partnerships with IFIs, development partners, and private investors.",
              },
            ].map((func, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-300 flex items-center justify-center mb-4">
                    <func.icon className="w-6 h-6 text-[#0f4d3a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{func.title}</h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">{func.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Cross-Cutting Themes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Principles that guide all our workstreams and interventions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Gender Equality",
                desc: "Ensuring women's participation and benefit from climate and energy programs",
              },
              {
                title: "Social Inclusion",
                desc: "Reaching vulnerable and marginalized communities with targeted solutions",
              },
              {
                title: "Environmental Sustainability",
                desc: "Prioritizing nature-based solutions and ecosystem protection",
              },
              {
                title: "Private Sector Engagement",
                desc: "Catalyzing private investment and creating enabling business environments",
              },
            ].map((theme, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{theme.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
