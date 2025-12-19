import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
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
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 mb-8">Last Updated: December 18, 2025</p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Brightverge Research Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website brightverge.com (the &quot;Website&quot;) or engage with our research services.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-[#0a1628] mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Register for an account or subscribe to our research services</li>
              <li>Request access to our reports or briefings</li>
              <li>Contact us with inquiries or feedback</li>
              <li>Subscribe to our newsletter or updates</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              This information may include your name, email address, organization, job title, and professional contact details.
            </p>

            <h3 className="text-lg font-medium text-[#0a1628] mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              When you access our Website, we may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar tracking technologies.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Provide and maintain our research services</li>
              <li>Process your requests and deliver research materials</li>
              <li>Send you updates, newsletters, and relevant communications</li>
              <li>Improve our Website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our Website and delivering our services, and only to the extent necessary for them to perform their functions.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">6. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@brightverge.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
