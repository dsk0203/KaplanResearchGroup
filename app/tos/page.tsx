import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Terms of Engagement | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TermsOfEngagement = () => {
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
            Terms of Engagement
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 mb-8">Last Updated: December 18, 2025</p>

            <p className="text-slate-600 leading-relaxed mb-6">
              These Terms of Engagement (&quot;Terms&quot;) govern your access to and use of the research services, publications, and website provided by Brightverge Research Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our Website or engaging our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">1. Research Services</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Brightverge Research Group provides independent market research, sector analysis, and strategic intelligence services. Our research is intended for informational purposes and to support decision-making processes. It does not constitute investment advice, legal counsel, or professional recommendations.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">2. Use of Research Materials</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All research reports, analyses, data, and other materials provided by Brightverge Research Group are proprietary and protected by intellectual property laws. You may:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Use our research for your internal business purposes</li>
              <li>Share excerpts with proper attribution to Brightverge Research Group</li>
              <li>Reference our findings in internal presentations and reports</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              You may not redistribute, resell, or republish our research materials without prior written consent.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              While we strive for accuracy in all our research, we provide our services and materials &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or timeliness of any information provided. Market conditions change rapidly, and past performance is not indicative of future results.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Brightverge Research Group shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our research or services. This includes, but is not limited to, losses resulting from investment decisions, business strategies, or other actions taken based on our research.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">5. Client Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We maintain strict confidentiality regarding our client relationships and any proprietary information shared with us during engagements. We do not disclose client identities or engagement details without explicit consent.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">6. Independence and Conflicts</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Brightverge Research Group operates as an independent research practice. We do not accept compensation from companies or entities that are subjects of our research. We will disclose any material conflicts of interest that may affect our objectivity.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">7. Account Access</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you are provided with account credentials to access our client portal or research library, you are responsible for maintaining the confidentiality of your login information. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">8. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these Terms shall be resolved through binding arbitration.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">9. Modifications</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our Website. Your continued use of our services after any modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-semibold text-[#0a1628] mt-8 mb-4">10. Contact</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              For questions regarding these Terms of Engagement, please contact us at legal@brightverge.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfEngagement;
