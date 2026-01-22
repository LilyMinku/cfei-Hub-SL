import { Leaf } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#0f4d3a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="text-xl font-bold">CFIH-SL</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Climate Finance and Energy Innovation Hub for Sierra Leone
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-emerald-200 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About PI-CREF
                </Link>
              </li>
              <li>
                <Link href="/workstreams" className="hover:text-white transition-colors">
                  Workstreams
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-emerald-200 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Office of the President
              <br />
              Republic of Sierra Leone
              <br />
              Freetown, Sierra Leone
              <br />
              <br />
              <a href="mailto:info@cfih-sl.org" className="hover:text-white transition-colors">
                info@cfih-sl.org
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-800 text-center text-emerald-300 text-sm">
          <p>© 2025 Climate Finance and Energy Innovation Hub for Sierra Leone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
