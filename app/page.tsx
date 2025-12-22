import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/app/blog/_assets/content";

const insights = articles
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 12)
  .map(article => ({
  category: article.categories[0]?.title || '',
  date: new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
  author: `${article.author.name}, ${article.author.job}`,
  title: article.title,
  excerpt: article.description,
  slug: article.slug,
}));

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-6">
              Strategic Market Intelligence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight max-w-4xl mx-auto">
              Research-Driven Intelligence<br />
              <span className="text-[#0a1628]/80">for Strategic Decision Makers.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Brightverge Research Group provides rigorous sector analysis and quantitative insights to institutional investors, corporate strategists, and policy advisors navigating complex market dynamics.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#insights"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#0a1628] rounded-md hover:bg-[#1a2d4a] transition-colors"
              >
                Explore Our Reports
              </Link>
              <Link
                href="/#methodology"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#0a1628] border border-[#0a1628]/20 rounded-md hover:border-[#0a1628]/40 transition-colors"
              >
                Our Methodology
              </Link>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Analytical Depth</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our research methodology combines quantitative modeling with primary source verification to deliver insights grounded in empirical evidence.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Cross-Sector Perspective</h3>
                <p className="text-slate-600 leading-relaxed">
                  We synthesize developments across industries, geographies, and asset classes to identify interconnected risks and opportunities.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Decision-Ready Output</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our deliverables are structured for direct application in investment committees, board presentations, and strategic planning processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights Section */}
        <section id="insights" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-2">
                  Featured Knowledge
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
                  Latest Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="mt-4 md:mt-0 text-sm font-medium text-[#0a1628] hover:text-[#0a1628]/70 transition-colors flex items-center gap-2"
              >
                View Research Library
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insights.map((insight, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-[#c9a962] bg-[#c9a962]/10 px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    {insight.date}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    By {insight.author}
                  </p>
                  <Link href={`/blog/${insight.slug}`} className="block hover:text-[#0a1628]/80 transition-colors">
                    <h3 className="text-xl font-semibold text-[#0a1628] mb-3 leading-tight">
                      {insight.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {insight.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Market Dynamics Section */}
        <section className="py-24 bg-[#0a1628] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-4">
                  Research Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quantified & Verified
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  Our research process integrates proprietary data collection, third-party validation, and systematic peer review to ensure analytical integrity across all published work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-8 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-4xl md:text-5xl font-bold text-[#c9a962]">12</p>
                  <p className="mt-2 text-sm text-white/60">Sector Verticals</p>
                </div>
                <div className="text-center p-8 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-4xl md:text-5xl font-bold text-[#c9a962]">50+</p>
                  <p className="mt-2 text-sm text-white/60">Reports Published</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-4">
                  About Brightverge
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                  Independent analysis<br />
                  for informed decisions.
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Brightverge Research Group operates as an independent research practice, free from conflicts that compromise analytical objectivity. Our work product is designed for direct integration into investment processes and strategic planning frameworks.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-[#0a1628]">2019</p>
                  <p className="mt-2 text-sm text-slate-600">Founded</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-[#0a1628]">100%</p>
                  <p className="mt-2 text-sm text-slate-600">Independent</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-[#0a1628]">40+</p>
                  <p className="mt-2 text-sm text-slate-600">Data Partners</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-[#0a1628]">Monthly</p>
                  <p className="mt-2 text-sm text-slate-600">Research Updates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Engine Section */}
        <section id="intelligence-engine" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-4">
                Research Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                From data collection<br />
                to actionable insight.
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our research workflow is designed to transform raw market data into structured analysis through systematic collection, rigorous validation, and expert interpretation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1628]">Data Collection</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  We aggregate data from regulatory filings, industry databases, proprietary surveys, and verified primary sources across target sectors.
                </p>
              </div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1628]">Analysis & Validation</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  Our analysts apply quantitative frameworks and cross-reference findings against multiple data sources to ensure accuracy and identify patterns.
                </p>
              </div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1628]">Report Delivery</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-14">
                  Findings are structured into comprehensive reports with executive summaries, detailed analysis, and specific recommendations for client application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-4">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Research depth designed for real decisions.
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our capabilities sit at the intersection of data, domain expertise, and strategic judgment. Every engagement is tailored to support high-stakes decisions across strategy, investment, and risk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Market & Sector Research</h3>
                <p className="text-slate-600 leading-relaxed">
                  Deep dives into industries, value chains, competitive landscapes, and growth dynamics.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Strategic Intelligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Early-warning signals, scenario planning, and forward-looking risk assessment.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Custom Briefings & Advisory</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bespoke analysis aligned to leadership priorities, investment theses, and operational decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
