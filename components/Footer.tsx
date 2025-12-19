import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Quote Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 max-w-4xl mx-auto">
            &ldquo;In markets defined by uncertainty, rigorous analysis is the foundation of confident action.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-[#c9a962] font-medium tracking-wider uppercase">
            Brightverge Research Group
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
          <p className="text-lg text-white/80">
            Independent research for institutional decision-makers. Analytical rigor without conflicts of interest.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-[#c9a962] tracking-wider uppercase mb-6">
              Expertise
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Capital Markets
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Macroeconomic Outlook
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#c9a962] tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Global Offices
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h3 className="text-sm font-semibold text-[#c9a962] tracking-wider uppercase mb-6">
              Intelligence
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Knowledge Portal
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="hover:text-white transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Client Briefings
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">BV</span>
              </div>
              <span className="font-semibold text-lg">Brightverge Research Group</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Strategic market intelligence and deep-sector analysis for global leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Disclosure */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <h4 className="text-xs font-semibold text-[#c9a962] tracking-wider uppercase mb-3">
            Important Disclosure
          </h4>
          <p className="text-xs text-white/50 leading-relaxed max-w-5xl">
            The information provided by Brightverge Research Group (brightverge.com) is intended for general informational purposes only and does not constitute professional financial, legal, or strategic advice. While we strive for absolute accuracy, the complexities of market dynamics mean that all data is subject to change. Readers are encouraged to conduct their own independent research and consult with qualified professionals to make informed decisions based on their specific needs and circumstances. Brightverge Research Group shall not be held liable for decisions made based on these materials.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Brightverge Research Group. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/50">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/tos" className="hover:text-white transition-colors">
                Terms of Engagement
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
