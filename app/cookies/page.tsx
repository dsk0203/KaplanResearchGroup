import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const metadata = getSEOTags({
  title: `Cookie Policy | ${config.appName}`,
  canonicalUrlRelative: "/cookies",
});

const CookiePolicy = () => {
  return (
    <>
      <Suspense fallback={<div className="h-16 bg-white/95 backdrop-blur-sm shadow-sm" />}>
        <Suspense fallback={<div className="h-16 bg-white/95 backdrop-blur-sm shadow-sm" />}>
          <Header />
        </Suspense>
      </Suspense>
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-slate-600 hover:text-[#0a1628] mb-8 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8">
            Cookie Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 mb-8">Last Updated: December 18, 2025</p>

            <p className="text-slate-600 leading-relaxed mb-6">
              This Cookie Policy explains how Brightverge Research Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website brightverge.com (the &quot;Website&quot;).
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-lg font-medium text-[#0a1628] mt-6 mb-3">2.1 Essential Cookies</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              These cookies are necessary for the Website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies as the Website would not function without them.
            </p>

            <h3 className="text-lg font-medium text-[#0a1628] mt-6 mb-3">2.2 Analytics Cookies</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              We use analytics cookies to understand how visitors interact with our Website. This helps us improve the Website&apos;s structure, content, and user experience. These cookies collect information anonymously and report website trends without identifying individual visitors.
            </p>

            <h3 className="text-lg font-medium text-[#0a1628] mt-6 mb-3">2.3 Functional Cookies</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              These cookies allow the Website to remember choices you make (such as your preferred language or region) and provide enhanced, personalized features.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">3. Third-Party Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Some cookies on our Website are placed by third-party services that appear on our pages. We do not control these third-party cookies. Please refer to the respective privacy policies of these third parties for more information about their cookies.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>View what cookies are stored on your device and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Please note that if you choose to block or delete cookies, some features of our Website may not function properly.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">5. Cookie Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The length of time a cookie remains on your device depends on whether it is a &quot;persistent&quot; or &quot;session&quot; cookie. Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or you delete them.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">6. Updates to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have any questions about our use of cookies, please contact us at privacy@brightverge.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
