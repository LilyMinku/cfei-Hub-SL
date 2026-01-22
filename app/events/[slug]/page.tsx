import { Leaf, Calendar, MapPin, Clock, Users, ArrowLeft, Share2, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// In production, this would fetch from a database based on the slug
const event = {
  id: "climate-finance-summit-2025",
  title: "Climate Finance Summit 2025",
  date: "2025-04-15",
  time: "9:00 AM - 5:00 PM",
  location: "Freetown International Conference Center",
  category: "Summit",
  attendees: 500,
  description:
    "Annual summit bringing together government officials, investors, and development partners to discuss climate finance opportunities in Sierra Leone.",
  image: "/placeholder.svg?key=summit-detail",
  status: "upcoming",
  longDescription: `
    The Climate Finance Summit 2025 is the premier annual gathering of climate finance stakeholders in Sierra Leone. 
    This full-day event brings together over 500 participants including government ministers, international financial 
    institutions, private sector investors, development partners, and civil society organizations.
  `,
  objectives: [
    "Showcase investment-ready climate and energy projects",
    "Facilitate networking between project developers and investors",
    "Share best practices in climate finance mobilization",
    "Launch new financing mechanisms and partnerships",
    "Present progress on national climate goals",
  ],
  agenda: [
    { time: "9:00 AM - 9:30 AM", title: "Registration & Networking", speaker: "" },
    { time: "9:30 AM - 10:00 AM", title: "Opening Remarks", speaker: "Hon. Minister of Energy" },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Panel: Mobilizing Climate Finance at Scale",
      speaker: "IFI Representatives",
    },
    { time: "11:30 AM - 12:00 PM", title: "Project Showcase Session", speaker: "CFIH Team" },
    { time: "12:00 PM - 1:00 PM", title: "Lunch & Networking", speaker: "" },
    { time: "1:00 PM - 2:30 PM", title: "Investor Roundtable", speaker: "Private Sector Leaders" },
    {
      time: "2:30 PM - 4:00 PM",
      title: "Workshop: Innovative Financing Mechanisms",
      speaker: "Climate Finance Experts",
    },
    { time: "4:00 PM - 5:00 PM", title: "Closing Remarks & Networking", speaker: "" },
  ],
  speakers: [
    { name: "Hon. Kanja Sesay", role: "Minister of Energy", bio: "Leading Sierra Leone's energy transformation" },
    {
      name: "Dr. Sarah Kamara",
      role: "Senior Climate Finance Advisor, CFIH",
      bio: "15+ years climate finance experience",
    },
    {
      name: "James Wilson",
      role: "Representative, World Bank",
      bio: "Infrastructure and climate investments in Africa",
    },
    {
      name: "Fatmata Koroma",
      role: "Climate Investment Specialist, CFIH",
      bio: "Expert in climate adaptation finance",
    },
  ],
  registration: {
    required: true,
    deadline: "2025-04-10",
    fee: "Free",
    link: "#",
  },
}

export default function EventDetailPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-6 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/events">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Event Header */}
      <section className="py-12 bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr,400px] gap-12 items-center">
            <div>
              <span className="px-4 py-2 bg-emerald-300 text-[#0f4d3a] rounded-full text-sm font-semibold uppercase tracking-wide">
                {event.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-balance leading-tight">{event.title}</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">{event.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-emerald-100">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Time</div>
                    <div className="text-emerald-100">{event.time}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-emerald-100">{event.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Expected Attendees</div>
                    <div className="text-emerald-100">{event.attendees} participants</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Register Now</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle className="w-5 h-5" />
                    <span>Free admission</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle className="w-5 h-5" />
                    <span>Certificate of participation</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle className="w-5 h-5" />
                    <span>Networking opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle className="w-5 h-5" />
                    <span>Event materials included</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-white text-[#0f4d3a] hover:bg-emerald-50 mb-3">
                  Register for Event
                </Button>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <p className="text-sm text-emerald-200 mt-4 text-center">
                  Registration deadline:{" "}
                  {new Date(event.registration.deadline).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Image */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl overflow-hidden">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr,1fr] gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Event</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{event.longDescription}</p>

              <h3 className="text-2xl font-bold mb-4">Event Objectives</h3>
              <ul className="space-y-3 mb-12">
                {event.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0f4d3a] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-6">Event Agenda</h3>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <Card key={index} className="border-2 border-[#0f4d3a]/20">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="text-[#0f4d3a] font-bold text-sm whitespace-nowrap">{item.time}</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          {item.speaker && <p className="text-sm text-muted-foreground">{item.speaker}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Featured Speakers</h3>
              <div className="space-y-6">
                {event.speakers.map((speaker, index) => (
                  <Card key={index} className="border-2 border-[#0f4d3a]/20">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-[#0f4d3a]" />
                      </div>
                      <h4 className="font-bold mb-1">{speaker.name}</h4>
                      <p className="text-sm text-[#0f4d3a] font-medium mb-2">{speaker.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 border-[#0f4d3a]/20 mt-8">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Event Contact</h4>
                  <p className="text-sm text-muted-foreground mb-4">For inquiries about this event, please contact:</p>
                  <p className="text-sm">
                    <strong>Email:</strong> events@cfih-sl.org
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Phone:</strong> +232 XX XXX XXXX
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl font-bold mb-6 text-balance">Don't Miss This Opportunity</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            Join hundreds of climate and energy leaders at Sierra Leone's premier climate finance event
          </p>
          <Button size="lg" className="bg-white text-[#0f4d3a] hover:bg-emerald-50 text-lg px-10 py-6">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  )
}
