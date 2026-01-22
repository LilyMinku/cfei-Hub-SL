import { Leaf, Target, Globe, Users, TrendingUp, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Climate Finance & Energy Innovation Hub
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Transforming Sierra Leone's energy landscape through innovative climate finance solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-[#0f4d3a]/20">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To accelerate Sierra Leone's transition to sustainable energy and climate resilience by mobilizing
                  climate finance, fostering innovation, and building capacity across all stakeholders to achieve
                  universal energy access and food security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0f4d3a]/20">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Sierra Leone powered by clean, reliable, and affordable energy, with resilient communities thriving
                  in a climate-adaptive economy that ensures food and nutrition security for all citizens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About PI-CREF */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About PI-CREF</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Presidential Initiative on Climate Change, Renewable Energy and Food Security (PI-CREF) was
                established under the Office of the President, Republic of Sierra Leone, to provide strategic leadership
                and coordination for the nation's climate and energy transformation.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Operating as a high-level policy and coordination body, PI-CREF works closely with Ministries,
                Departments and Agencies (MDAs) to ensure coherent and effective delivery of climate action, sustainable
                energy access, and food security programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-[#0f4d3a] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Presidential Mandate</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Direct oversight from the Office of the President ensures high-level commitment and cross-sectoral
                      coordination
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#0f4d3a] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Stakeholder Approach</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Collaboration with government agencies, development partners, private sector, and civil society
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#0f4d3a] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Results-Oriented</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Focus on measurable outcomes and transformative impact in climate and energy sectors
                    </p>
                  </div>
                </div>
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

      {/* The Hub */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The Climate Finance & Energy Innovation Hub
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              An end-to-end policy and finance platform designed to leverage capital for sustainable energy investments
              across Sierra Leone
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The CFEI Hub serves as a centralized platform that bridges the gap between policy ambition and financial
              implementation. By bringing together expertise in climate finance, energy innovation, and project
              development, the Hub creates a conducive ecosystem for transformative investments in Sierra Leone's
              sustainable energy transition.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
              <div className="bg-muted/50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Core Functions</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">✓</span>
                    <span>Investment opportunity identification and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">✓</span>
                    <span>Policy support and regulatory framework enhancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">✓</span>
                    <span>Capacity building for government and private sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">✓</span>
                    <span>Project pipeline management and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">✓</span>
                    <span>Innovative financing mechanism introduction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Strategic Partnerships</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>International Financial Institutions (IFIs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Development partners and donor agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Private sector investors and developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Climate funds and green finance institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f4d3a] mt-1">•</span>
                    <span>Regional and international networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alignment */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Strategic Alignment</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
              The Hub's work aligns with national and international frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">National Frameworks</h3>
              <ul className="space-y-3 text-emerald-100 text-sm">
                <li>• Medium-Term National Development Plan (MTNDP) 2024-2030</li>
                <li>• Energy and Green Growth Transition Plan</li>
                <li>• National Clean Cooking Strategy</li>
                <li>• Nationally Determined Contributions (NDCs)</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">International Commitments</h3>
              <ul className="space-y-3 text-emerald-100 text-sm">
                <li>• Paris Agreement on Climate Change</li>
                <li>• Sustainable Development Goals (SDGs)</li>
                <li>• Africa Renewable Energy Initiative</li>
                <li>• UN Energy Compact</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Sectoral Priorities</h3>
              <ul className="space-y-3 text-emerald-100 text-sm">
                <li>• Universal energy access</li>
                <li>• Clean cooking transition</li>
                <li>• Climate resilience</li>
                <li>• Food and nutrition security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Guiding principles that drive our work and partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                desc: "Embracing creative solutions and cutting-edge approaches to climate and energy challenges",
              },
              {
                title: "Collaboration",
                desc: "Working together with all stakeholders to achieve shared sustainable development goals",
              },
              {
                title: "Transparency",
                desc: "Operating with openness and accountability in all our processes and partnerships",
              },
              {
                title: "Impact",
                desc: "Focusing on measurable outcomes that transform lives and communities across Sierra Leone",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 mx-auto mb-4 flex items-center justify-center text-[#0f4d3a] font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
