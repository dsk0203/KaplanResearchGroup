import Link from "next/link";
import Script from "next/script";
import { articles } from "../_assets/content";
import BadgeCategory from "../_assets/components/BadgeCategory";
import Avatar from "../_assets/components/Avatar";
import TableOfContents from "../_assets/components/TableOfContents";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((article) => article.slug === resolvedParams.articleId);

  return getSEOTags({
    title: article.title,
    description: article.description,
    canonicalUrlRelative: `/blog/${article.slug}`,
    extraTags: {
      openGraph: {
        title: article.title,
        description: article.description,
        url: `/blog/${article.slug}`,
        images: [
          {
            url: article.image.urlRelative,
            width: 1200,
            height: 660,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    },
  });
}

export default async function Article({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((article) => article.slug === resolvedParams.articleId);
  const articlesRelated = articles
    .filter(
      (a) =>
        a.slug !== resolvedParams.articleId &&
        a.categories.some((c) =>
          article.categories.map((c) => c.slug).includes(c.slug)
        )
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
          <Script
            type="application/ld+json"
            id={`json-ld-article-${article.slug}`}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://${config.domainName}/blog/${article.slug}`,
                },
                name: article.title,
                headline: article.title,
                description: article.description,
                image: `https://${config.domainName}${article.image.urlRelative}`,
                datePublished: article.publishedAt,
                dateModified: article.publishedAt,
                author: {
                  "@type": "Person",
                  name: article.author.name,
                },
              }),
            }}
          />

          {/* GO BACK LINK */}
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-slate-600 hover:text-[#0a1628] transition-colors"
              title="Back to Research Library"
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
              Back to Research Library
            </Link>
          </div>

          <article>
            {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
            <section className="my-12 md:my-16 max-w-[800px]">
              <div className="flex items-center gap-4 mb-6">
                {article.categories.map((category) => (
                  <BadgeCategory
                    category={category}
                    key={category.slug}
                    extraStyle="!badge-lg"
                  />
                ))}
                <span className="text-slate-500 text-sm" itemProp="datePublished">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#0a1628]">
                {article.title}
              </h1>

              <p className="text-slate-600 md:text-lg max-w-[700px]">
                {article.description}
              </p>
            </section>

            <div className="flex flex-col md:flex-row">
              {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
              <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-slate-200">
                <p className="text-slate-500 text-sm mb-2 md:mb-3">
                  Posted by
                </p>
                <Avatar article={article} />

                <div className="mt-8">
                  <TableOfContents containerId="article-content" />
                </div>

                {articlesRelated.length > 0 && (
                  <div className="hidden md:block mt-12">
                    <p className="text-slate-500 text-sm mb-2 md:mb-3">
                      Related Research
                    </p>
                    <div className="space-y-2 md:space-y-5">
                      {articlesRelated.map((article) => (
                        <div className="" key={article.slug}>
                          <p className="mb-0.5">
                            <Link
                              href={`/blog/${article.slug}`}
                              className="text-[#0a1628] hover:text-[#0a1628]/70 font-medium transition-colors"
                              title={article.title}
                              rel="bookmark"
                            >
                              {article.title}
                            </Link>
                          </p>
                          <p className="text-slate-500 max-w-full text-sm">
                            {article.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* ARTICLE CONTENT */}
              <section
                id="article-content"
                className="w-full max-md:pt-4 md:pr-20 space-y-8 md:space-y-12"
              >
                {article.content}
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
