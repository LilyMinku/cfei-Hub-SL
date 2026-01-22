"use client"

import { Leaf, CalendarIcon, MapPin, Clock, Users, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// Sample events data
const events = [
  {
    id: "climate-finance-summit-2025",
    title: "Climate Finance Summit 2025",
    date: "2025-04-15",
    time: "9:00 AM - 5:00 PM",
    location: "Freetown International Conference Center",
    category: "Summit",
    categorySlug: "summit",
    attendees: 500,
    description:
      "Annual summit bringing together government officials, investors, and development partners to discuss climate finance opportunities in Sierra Leone.",
    image: "/placeholder.svg?key=summit2025",
    status: "upcoming",
  },
  {
    id: "energy-investment-forum",
    title: "Energy Investment Forum",
    date: "2025-04-22",
    time: "10:00 AM - 4:00 PM",
    location: "Radisson Blu Mammy Yoko Hotel",
    category: "Forum",
    categorySlug: "forum",
    attendees: 200,
    description:
      "Interactive forum showcasing renewable energy investment opportunities and connecting project developers with potential investors.",
    image: "/placeholder.svg?key=energyforum",
    status: "upcoming",
  },
  {
    id: "capacity-building-workshop",
    title: "Capacity Building Workshop: Climate Project Development",
    date: "2025-04-10",
    time: "9:00 AM - 1:00 PM",
    location: "CFIH Hub Office",
    category: "Workshop",
    categorySlug: "workshop",
    attendees: 50,
    description: "Hands-on workshop for MDA officials on developing bankable climate and energy project proposals.",
    image: "/placeholder.svg?key=workshop1",
    status: "upcoming",
  },
  {
    id: "clean-cooking-roundtable",
    title: "Clean Cooking Stakeholder Roundtable",
    date: "2025-05-05",
    time: "2:00 PM - 5:00 PM",
    location: "Ministry of Energy Conference Room",
    category: "Roundtable",
    categorySlug: "roundtable",
    attendees: 75,
    description: "Strategic discussion with stakeholders on accelerating clean cooking transition in Sierra Leone.",
    image: "/placeholder.svg?key=cooking",
    status: "upcoming",
  },
  {
    id: "renewable-energy-expo",
    title: "Renewable Energy Expo 2025",
    date: "2025-05-20",
    time: "9:00 AM - 6:00 PM",
    location: "Bintumani Conference Center",
    category: "Expo",
    categorySlug: "expo",
    attendees: 1000,
    description:
      "West Africa's premier renewable energy exhibition featuring the latest technologies, solutions, and partnerships.",
    image: "/placeholder.svg?key=expo2025",
    status: "upcoming",
  },
  {
    id: "policy-dialogue-march",
    title: "Policy Dialogue: Energy Sector Reform",
    date: "2025-03-20",
    time: "10:00 AM - 3:00 PM",
    location: "State House",
    category: "Policy Dialogue",
    categorySlug: "policy",
    attendees: 100,
    description:
      "High-level policy dialogue on regulatory reforms to enable private sector participation in energy sector.",
    image: "/placeholder.svg?key=policy",
    status: "past",
  },
]

const categories = [
  { name: "All Events", slug: "all" },
  { name: "Summit", slug: "summit" },
  { name: "Forum", slug: "forum" },
  { name: "Workshop", slug: "workshop" },
  { name: "Roundtable", slug: "roundtable" },
  { name: "Expo", slug: "expo" },
  { name: "Policy Dialogue", slug: "policy" },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const filteredEvents = selectedCategory === "all" ? events : events.filter((e) => e.categorySlug === selectedCategory)

  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming")
  const pastEvents = filteredEvents.filter((e) => e.status === "past")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3d2e] via-[#0f4d3a] to-[#0a362a] text-white">
        <div className="absolute inset-0 bg-[url('/african-landscape-with-mountains-and-sky.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-emerald-300">
            <CalendarIcon className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide uppercase">Events & Engagement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Event Calendar</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Join us at upcoming events, workshops, and conferences driving climate action in Sierra Leone
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  className={selectedCategory === category.slug ? "bg-[#0f4d3a] hover:bg-[#0a362a]" : ""}
                  size="sm"
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Event Calendar</h2>
            <p className="text-muted-foreground">View all scheduled events and mark your calendar</p>
          </div>

          <Card className="border-2 border-[#0f4d3a]/20 overflow-hidden">
            <CardContent className="p-0">
              {/* Calendar Header */}
              <div className="bg-[#0f4d3a] text-white p-6 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <h3 className="text-2xl font-bold">
                  {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = i - 5 + 1
                    const hasEvent = date === 15 || date === 22 || date === 10
                    return (
                      <div
                        key={i}
                        className={`aspect-square flex items-center justify-center rounded-lg border-2 transition-colors ${
                          date > 0 && date <= 30
                            ? hasEvent
                              ? "border-[#0f4d3a] bg-emerald-50 font-bold text-[#0f4d3a] cursor-pointer hover:bg-emerald-100"
                              : "border-muted hover:border-[#0f4d3a]/30 cursor-pointer"
                            : "border-transparent text-muted-foreground"
                        }`}
                      >
                        {date > 0 && date <= 30 ? date : ""}
                        {hasEvent && <div className="absolute mt-8 w-1.5 h-1.5 rounded-full bg-[#0f4d3a]" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Register now to secure your spot at these events</p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden"
              >
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-emerald-100 to-emerald-50">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="px-3 py-1 bg-emerald-100 text-[#0f4d3a] rounded-full text-xs font-semibold uppercase tracking-wide">
                          {event.category}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/events/${event.id}`}>
                          <Button size="sm" className="bg-[#0f4d3a] hover:bg-[#0a362a]">
                            View Details
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline">
                          Register
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <CalendarIcon className="w-5 h-5 text-[#0f4d3a] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Date</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#0f4d3a] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Time</div>
                          <div className="text-sm text-muted-foreground">{event.time}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#0f4d3a] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">Location</div>
                          <div className="text-sm text-muted-foreground">{event.location}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Past Events</h2>
              <p className="text-muted-foreground">Explore our previous events and their outcomes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-2 border-[#0f4d3a]/20 hover:border-[#0f4d3a] transition-colors overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold uppercase tracking-wide">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-3">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    <Link href={`/events/${event.id}`}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        View Event Summary
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#0f4d3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stay Informed</h2>
          <p className="text-xl text-emerald-100 mb-10 text-pretty leading-relaxed">
            Subscribe to receive notifications about upcoming events, workshops, and opportunities to engage with our
            work
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
