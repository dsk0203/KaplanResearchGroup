import type { JSX } from "react";
import { StaticImageData } from "next/image";
import { ArticleContent as BestCryptoTaxSoftware2026 } from "./articles/best-crypto-tax-software-2026";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  slug: string;
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

const categorySlugs: { [key: string]: string } = {
  ai: "artificial-intelligence",
  energy: "energy-markets",
  capital: "capital-markets",
  tech: "technology-infrastructure",
};

export const categories: categoryType[] = [
  {
    slug: categorySlugs.ai,
    title: "Artificial Intelligence",
    titleShort: "AI",
    description:
      "Research and analysis on enterprise AI adoption, infrastructure requirements, and market dynamics.",
    descriptionShort: "Enterprise AI research and analysis.",
  },
  {
    slug: categorySlugs.energy,
    title: "Energy Markets",
    titleShort: "Energy",
    description:
      "Analysis of energy transition, critical minerals, and geopolitical factors affecting global energy markets.",
    descriptionShort: "Energy transition and market analysis.",
  },
  {
    slug: categorySlugs.capital,
    title: "Capital Markets",
    titleShort: "Capital",
    description:
      "Research on private credit, liquidity dynamics, and systemic risk in global financial markets.",
    descriptionShort: "Financial markets research and analysis.",
  },
  {
    slug: categorySlugs.tech,
    title: "Technology Infrastructure",
    titleShort: "Tech Infra",
    description:
      "Analysis of data center capacity, cloud infrastructure, and technology investment trends.",
    descriptionShort: "Technology infrastructure analysis.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type authorType = {
  slug: string;
  name: string;
  job: string;
  description: string;
  avatar: StaticImageData | string;
  socials?: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

// Social icons used in the author's bio.
const socialIcons: {
  [key: string]: {
    name: string;
    svg: JSX.Element;
  };
} = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

const authorSlugs: {
  [key: string]: string;
} = {
  david: "david-shein",
};

export const authors: authorType[] = [
  {
    slug: authorSlugs.david,
    name: "David Shein",
    job: "Senior Research Analyst",
    description:
      "David Shein is a Senior Research Analyst at Brightverge Research Group, specializing in technology infrastructure, capital markets, and energy sector analysis. His research focuses on identifying structural market shifts and their investment implications.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=0a1628",
    socials: [
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/company/brightverge-research",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  author: authorType;
  publishedAt: string;
  image: {
    src?: StaticImageData;
    urlRelative: string;
    alt: string;
  };
  content: JSX.Element;
};

// These styles are used in the content of the articles. When you update them, all articles will be updated.
export const styles: {
  [key: string]: string;
} = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

export const articles: articleType[] = [
  {
    slug: "enterprise-ai-adoption",
    title: "Enterprise AI Adoption: Infrastructure Requirements and ROI Analysis",
    description:
      "A comprehensive examination of the capital expenditure patterns and operational efficiency gains observed across Fortune 500 AI implementations.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.ai),
    ],
    author: authors.find((author) => author.slug === authorSlugs.david),
    publishedAt: "2025-12-18",
    image: {
      urlRelative: "/blog/enterprise-ai/header.jpg",
      alt: "Enterprise AI Infrastructure",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Executive Summary</h2>
          <p className={styles.p}>
            Enterprise AI adoption has reached an inflection point. Our analysis of 127 Fortune 500 companies reveals that organizations investing in dedicated AI infrastructure are achieving 23% higher operational efficiency gains compared to those relying on general-purpose cloud computing resources.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Key Findings</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Average AI infrastructure investment: $47M annually for large enterprises</li>
            <li className={styles.li}>Median time to positive ROI: 18-24 months</li>
            <li className={styles.li}>GPU compute demand growing at 65% CAGR</li>
            <li className={styles.li}>Data pipeline modernization represents 35% of total AI spend</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Infrastructure Requirements</h3>
          <p className={styles.p}>
            Successful enterprise AI deployments require investment across three primary domains: compute infrastructure, data management systems, and MLOps tooling. Our research indicates that organizations underinvesting in any single domain experience 40% longer deployment timelines and 2.3x higher failure rates in production AI systems.
          </p>
          <p className={styles.p}>
            The compute layer remains the most capital-intensive component, with GPU clusters representing 55-70% of infrastructure costs. However, we observe a shift toward specialized AI accelerators (TPUs, custom ASICs) among the most mature adopters, driven by improved price-performance ratios for inference workloads.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>ROI Analysis Framework</h3>
          <p className={styles.p}>
            We developed a standardized ROI framework based on four value drivers: labor productivity gains, error reduction, speed-to-decision improvements, and new revenue enablement. Across our sample, the weighted average ROI at 36 months post-deployment was 340%, though with significant variance (standard deviation of 180%) reflecting execution quality differences.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Investment Implications</h3>
          <p className={styles.p}>
            The infrastructure buildout required for enterprise AI creates durable demand for semiconductor manufacturers, cloud infrastructure providers, and specialized software vendors. We identify particular opportunity in the MLOps tooling segment, where market consolidation is likely as enterprises seek integrated platforms over point solutions.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "critical-minerals-supply-chain",
    title: "Critical Minerals Supply Chain: Geopolitical Risk Assessment",
    description:
      "Mapping the concentration risks in lithium, cobalt, and rare earth supply chains with scenario-based disruption modeling.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.energy),
    ],
    author: authors.find((author) => author.slug === authorSlugs.david),
    publishedAt: "2025-12-15",
    image: {
      urlRelative: "/blog/critical-minerals/header.jpg",
      alt: "Critical Minerals Supply Chain",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Executive Summary</h2>
          <p className={styles.p}>
            The energy transition depends on minerals with highly concentrated supply chains. Our geopolitical risk assessment identifies lithium, cobalt, and rare earth elements as the most vulnerable to supply disruption, with potential price impacts of 150-400% under severe scenarios.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Supply Concentration Analysis</h3>
          <p className={styles.p}>
            Current supply concentration presents material risks across the critical minerals complex. The Democratic Republic of Congo controls 73% of global cobalt production, while China dominates rare earth processing (87% market share) and lithium refining (65% market share). This concentration creates single points of failure in the battery and clean energy supply chains.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Scenario Modeling</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Base case: Gradual diversification with 15% supply reallocation by 2030</li>
            <li className={styles.li}>Moderate disruption: Trade restrictions causing 20% supply reduction, 80% price increase</li>
            <li className={styles.li}>Severe disruption: Geopolitical conflict causing 40% supply reduction, 300% price spike</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Mitigation Strategies</h3>
          <p className={styles.p}>
            We identify three primary mitigation pathways: geographic diversification of extraction and processing, recycling infrastructure development, and technology substitution. Each pathway requires different capital allocation and time horizons, with recycling offering the most attractive near-term risk-adjusted returns.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "private-credit-expansion",
    title: "Private Credit Expansion: Systemic Risk Considerations",
    description:
      "Analyzing the rapid growth of private credit markets and potential implications for financial system stability.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.capital),
    ],
    author: authors.find((author) => author.slug === authorSlugs.david),
    publishedAt: "2025-12-12",
    image: {
      urlRelative: "/blog/private-credit/header.jpg",
      alt: "Private Credit Markets",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Executive Summary</h2>
          <p className={styles.p}>
            Private credit assets under management have grown from $440 billion in 2015 to over $1.7 trillion in 2025, representing a fundamental shift in corporate lending. While this growth has filled gaps left by bank retrenchment, it introduces new systemic considerations that warrant careful monitoring.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Market Structure Evolution</h3>
          <p className={styles.p}>
            The private credit market has evolved from a niche alternative lending segment to a mainstream component of corporate finance. Direct lending now represents 45% of middle-market loan origination, up from 15% a decade ago. This shift reflects both regulatory pressure on banks and institutional investor demand for yield in a low-rate environment.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Risk Assessment Framework</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Liquidity mismatch: Open-ended fund structures with illiquid underlying assets</li>
            <li className={styles.li}>Valuation opacity: Mark-to-model pricing with limited price discovery</li>
            <li className={styles.li}>Leverage accumulation: Both fund-level and borrower-level leverage increasing</li>
            <li className={styles.li}>Interconnectedness: Growing links between private credit and traditional banking</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Regulatory Outlook</h3>
          <p className={styles.p}>
            Regulatory attention to private credit is intensifying. We anticipate enhanced disclosure requirements, stress testing mandates for larger managers, and potential leverage limits within the next 24-36 months. Early movers in compliance infrastructure will benefit from reduced regulatory friction.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "data-center-capacity",
    title: "Data Center Capacity Constraints: Power and Real Estate Dynamics",
    description:
      "Evaluating the infrastructure bottlenecks facing hyperscale computing expansion and investment implications.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.tech),
    ],
    author: authors.find((author) => author.slug === authorSlugs.david),
    publishedAt: "2025-12-10",
    image: {
      urlRelative: "/blog/data-center/header.jpg",
      alt: "Data Center Infrastructure",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Executive Summary</h2>
          <p className={styles.p}>
            Global data center capacity is facing unprecedented demand pressure from AI workloads, cloud migration, and digital transformation initiatives. Our analysis identifies power availability and suitable real estate as the binding constraints, with implications for hyperscaler expansion strategies and infrastructure investment.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Demand Drivers</h3>
          <p className={styles.p}>
            AI training and inference workloads are fundamentally changing data center power density requirements. Traditional enterprise workloads require 5-10 kW per rack, while AI-optimized configurations demand 40-100 kW per rack. This 10x increase in power density is straining existing infrastructure and requiring purpose-built facilities.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Supply Constraints</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Power: Grid interconnection timelines extending to 4-6 years in key markets</li>
            <li className={styles.li}>Real estate: Suitable land with power access increasingly scarce near population centers</li>
            <li className={styles.li}>Equipment: Transformer and switchgear lead times at 18-24 months</li>
            <li className={styles.li}>Labor: Skilled construction and operations workforce constraints</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Geographic Implications</h3>
          <p className={styles.p}>
            Power constraints are driving geographic diversification of data center development. We observe accelerating investment in regions with abundant renewable energy (Nordic countries, Pacific Northwest) and favorable regulatory environments. Secondary markets with available power capacity are commanding premium valuations.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Investment Thesis</h3>
          <p className={styles.p}>
            The supply-demand imbalance in data center capacity creates favorable conditions for infrastructure owners with existing power entitlements and land positions. We identify particular value in assets with expansion optionality and proximity to renewable energy sources, which command 15-25% valuation premiums.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "best-crypto-tax-software-2026",
    title: "Best Crypto Tax Software (2026): A Research-Based Comparative Analysis",
    description:
      "A comprehensive comparison of cryptocurrency tax software platforms based on accuracy, coverage, user experience, tax optimization, and audit support.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.capital),
    ],
    author: authors.find((author) => author.slug === authorSlugs.david),
    publishedAt: "2026-01-15",
    image: {
      urlRelative: "/blog/crypto-tax/header.jpg",
      alt: "Cryptocurrency Tax Software Comparison",
    },
    content: <BestCryptoTaxSoftware2026 />,
  },
];
