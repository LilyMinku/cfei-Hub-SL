import { Leaf, Users, Mail, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Kamara",
      role: "Senior Climate Change and Energy Finance Advisor",
      bio: "Dr. Kamara brings over 15 years of experience in climate finance and sustainable energy policy across Africa. She holds a PhD in Environmental Economics and has led major climate initiatives for international organizations.",
      expertise: ["Climate Finance", "Policy Development", "Strategic Planning", "Stakeholder Engagement"],
    },
    {
      name: "Mohamed Sesay",
      role: "Energy Investment Specialist",
      bio: "Mohamed specializes in renewable energy project development and investment structuring. With a background in energy engineering and finance, he has facilitated over $200M in clean energy investments across West Africa.",
      expertise: ["Project Finance", "Renewable Energy", "Investment Analysis", "Risk Management"],
    },
    {
      name: "Fatmata Koroma",
      role: "Climate Investment Specialist",
      bio: "Fatmata focuses on climate adaptation and resilience investments. Her expertise spans agricultural finance, water security, and nature-based solutions with a strong track record in securing climate fund financing.",
      expertise: ["Climate Adaptation", "Agriculture Finance", "Green Climate Fund", "Impact Assessment"],
    },
    {
      name: "Ibrahim Bangura",
      role: "Monitoring and Evaluation Specialist",
      bio: "Ibrahim ensures all Hub activities deliver measurable impact through robust M&E frameworks. With expertise in development evaluation and data analytics, he tracks progress across all workstreams.",
      expertise: ["M&E Frameworks", "Data Analytics", "Impact Measurement", "Results Management"],
    },
    {
      name: "Aminata Conteh",
      role: "Programme Assistant",
      bio: "Aminata provides critical operational and administrative support to the Hub team. With strong organizational skills and stakeholder coordination experience, she ensures smooth day-to-day operations.",
      expertise: ["Administration", "Stakeholder Coordination", "Event Management", "Communications"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <Users className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">Meet Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Driving Climate Innovation</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            A dedicated team of experts committed to transforming Sierra Leone's climate and energy landscape
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The Climate Finance and Energy Innovation Hub is powered by a diverse team of highly qualified professionals
            with deep expertise in climate finance, renewable energy, project development, and stakeholder engagement.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Together, we bring decades of combined experience from international development institutions, government
            agencies, private sector, and civil society organizations to drive transformative change in Sierra Leone.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-4">
                        <Users className="w-24 h-24 text-[#0f4d3a]" />
                      </div>
                      <div className="flex gap-3">
                        <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-xl text-[#0f4d3a] font-semibold mb-6">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-4 py-2 bg-emerald-100 text-[#0f4d3a] rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Support */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Advisory & Support Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              The Hub operates with strategic guidance and technical support from key stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#0f4d3a]/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 mx-auto">
                  <Leaf className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Presidential Oversight</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Direct supervision from the Office of the President ensures high-level commitment and cross-government
                  coordination for Hub activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0f4d3a]/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">MDA Collaboration</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Close partnership with relevant Ministries, Departments and Agencies to ensure alignment and effective
                  program delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0f4d3a]/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 mx-auto">
                  <Linkedin className="w-8 h-8 text-[#0f4d3a]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Technical Partners</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Strategic support from development partners, IFIs, and technical experts to enhance Hub capabilities
                  and reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Join Our Mission</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            We're always looking for talented individuals passionate about climate action and sustainable energy to
            collaborate with us on transformative projects.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-[#0f4d3a] hover:bg-emerald-50 text-lg px-8 py-6">
              View Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
