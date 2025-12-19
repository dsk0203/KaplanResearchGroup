import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: `Research Library | ${config.appName}`,
  description:
    "Independent research and analysis on technology, energy, capital markets, and infrastructure.",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 6);
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <section className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-[#c9a962] tracking-wider uppercase mb-4">
              Research Library
            </p>
            <h1 className="font-bold text-3xl lg:text-5xl tracking-tight mb-6 text-[#0a1628]">
              Latest Research & Analysis
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Independent research on technology infrastructure, energy markets, capital markets, and strategic investment themes.
            </p>
          </section>

          <section className="grid lg:grid-cols-2 mb-24 gap-8">
            {articlesToDisplay.map((article, i) => (
              <CardArticle
                article={article}
                key={article.slug}
                isImagePriority={i <= 2}
              />
            ))}
          </section>

          <section>
            <p className="font-bold text-2xl lg:text-3xl tracking-tight text-center mb-8 text-[#0a1628]">
              Browse by Research Category
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <CardCategory key={category.slug} category={category} tag="div" />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
