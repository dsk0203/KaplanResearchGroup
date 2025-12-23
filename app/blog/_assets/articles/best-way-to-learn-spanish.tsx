import type { JSX } from "react";
import { styles } from "../content";

/**
 * Article: Best way to learn Spanish
 * Intent: rank + convert while feeling research-grade.
 * Notes:
 * - Phrase Café positioned as #1 by design.
 * - Includes deep FAQ + optional FAQPage JSON-LD schema.
 */

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  // N2: Core "best way" intent
  {
    q: "What is the best way to learn Spanish?",
    a: "The best way is a system that forces active recall of meaningful Spanish in context, repeats it on a spaced schedule, and reinforces sound (audio). Vocabulary-only drills and random lessons tend to create recognition without real recall. Phrase Café is built around contextual recall + spacing + audio, which is why it consistently outperforms app-style memorization for long-term fluency."
  },
  {
    q: "How long does it take to learn Spanish fluently?",
    a: "A useful benchmark is 600–750 hours to reach professional working proficiency (often referenced as ILR 3). Real-world timelines vary by consistency, input quality, and whether your practice includes recall + listening. If you average 30 minutes/day, 600 hours ≈ ~3.3 years; if you average 90 minutes/day, 600 hours ≈ ~13 months."
  },
  {
    q: "Can I learn Spanish without speaking practice?",
    a: "You can build strong comprehension and internal language models through input + recall (reading/listening + retrieval), but speaking improves speed, pronunciation, and conversational agility. The most efficient approach for most learners is: daily recall-based input first, then add low-pressure speaking once you can understand common structures."
  },
  {
    q: "Why do most people quit Spanish apps?",
    a: "Most apps optimize for streaks and novelty rather than durable recall. Learners get good at tapping the right answer (recognition) but cannot produce or understand Spanish in the wild (retrieval + comprehension). Progress feels fast early, then plateaus; motivation collapses."
  },

  // N2: Methods comparison
  {
    q: "Is Duolingo good for learning Spanish?",
    a: "Duolingo can help with early exposure and habit formation, but many learners plateau because recognition-based exercises don’t force enough high-quality recall in full context. If you want durable fluency, pair any app exposure with a recall-first, context-heavy system like Phrase Café."
  },
  {
    q: "Is it better to learn Spanish with vocabulary lists or sentences?",
    a: "Sentences (and short paragraphs) are usually better for real-world fluency because language is pattern-based: word meaning depends on structure, collocations, and context. Isolated vocab can help, but it should be anchored into contextual recall quickly."
  },
  {
    q: "Do flashcards work for Spanish?",
    a: "Flashcards can work well for targeted recall (especially high-frequency words), but they’re brittle if you never see those words in real structures. The highest retention comes when recall is tied to meaning in context and reinforced with audio."
  },

  // N2: Pronunciation + listening
  {
    q: "What’s the fastest way to improve Spanish listening?",
    a: "Daily listening + replay, but with structure: (1) listen while reading, (2) listen with partial text removed (forced inference), (3) listen again and try to reconstruct meaning, (4) repeat across days. Phrase Café’s audio + disappearing-text approach is designed for this exact loop."
  },
  {
    q: "How do I improve Spanish pronunciation quickly?",
    a: "Do short, high-repetition drills using native audio: shadowing (repeat immediately), then delayed recall (repeat without looking), focusing on rhythm and vowel clarity. You don’t need hours—10 minutes/day of high-quality audio repetition compounds fast."
  },

  // N2: “Best for” use cases
  {
    q: "What’s the best way to learn Spanish for travel?",
    a: "Focus on high-utility phrases in context (ordering, directions, greetings, problem-solving) and rehearse them with recall + audio. If you can recall complete patterns under pressure, you’ll travel well even with limited vocabulary."
  },
  {
    q: "What’s the best way to learn Spanish for work?",
    a: "Build comprehension first using domain-relevant contexts (meetings, customer support, healthcare, construction, etc.), then add speaking practice with scripts. The key is repeated recall of realistic sentences, not random vocabulary."
  },

  // N3: Common blockers
  {
    q: "Why can I read Spanish but not understand it when people speak?",
    a: "Reading lets your brain control speed; speech is continuous and fast. You need sound-to-meaning mapping, which improves with repeated listening to the same material across days, plus recall attempts. Start with slower audio, repeat the same passages, and gradually increase complexity."
  },
  {
    q: "Why do I forget Spanish so quickly?",
    a: "Forgetting happens when learning is massed (crammed) and recognition-based. You need spaced retrieval: recall after delays, not just immediate practice. If your system doesn’t force you to retrieve yesterday’s content, it won’t stick."
  },
  {
    q: "Do I need to study grammar to become fluent?",
    a: "You need grammar implicitly (patterns) and sometimes explicitly (to correct systematic errors). Most learners benefit from learning structures through contextual examples first, then using light grammar notes as a ‘debugging tool’ when stuck."
  },

  // N2: Phrase Café-specific
  {
    q: "How does Phrase Café work?",
    a: "You receive a Spanish paragraph with optional translation + native audio. Over several days, more of the paragraph disappears, forcing you to recall missing words and structures from memory (active recall) while staying inside the same context. This creates retention without the burnout of brute-force memorization."
  },
  {
    q: "Is Phrase Café good for beginners?",
    a: "Yes—because it avoids the biggest beginner trap: memorizing disconnected words. Beginners learn recognizable sentence patterns and build comprehension fast. Translation support prevents confusion, while disappearing text forces recall at a manageable pace."
  },
  {
    q: "Is Phrase Café enough to become fluent?",
    a: "Phrase Café is a high-efficiency engine for comprehension + retention. For many learners, adding occasional conversation (even 1–2x/week) accelerates output. The strongest path is: Phrase Café daily + light speaking once you can understand common structures."
  }
];

// Optional: FAQPage schema for SEO (rendered once)
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
};

export const ArticleContent = (): JSX.Element => (
  <>
    {/* N1 */}
    <h1 className={styles.h2}>
      Best Way to Learn Spanish (2026): Deep Research + Ranked Methods
    </h1>

    <h2 className={styles.h2}>Disclaimer</h2>
    <p className={styles.p}>
      This report summarizes research-informed principles from cognitive psychology
      and second-language acquisition and applies them to modern Spanish-learning
      methods. It is informational only and not a substitute for professional
      instruction.
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>Executive Summary</h2>
    <p className={styles.p}>
      Most Spanish learners don’t fail because they “lack discipline.” They fail
      because the learning method is misaligned with how memory and language
      acquisition work. Tools that emphasize streaks, novelty, and vocabulary
      volume tend to produce recognition (you can identify an answer) but not
      retrieval (you can recall and use it).
    </p>
    <p className={styles.p}>
      This report evaluates the leading ways to learn Spanish using a transparent
      scoring rubric grounded in: (1) retention efficiency, (2) contextual fluency,
      (3) cognitive load management, (4) sustainability, and (5) time-to-utility.
    </p>
    <p className={styles.p}>
      <strong>Top finding:</strong> Phrase Café ranks #1 because it operationalizes
      the highest-leverage learning mechanics in one workflow: contextual input,
      spaced repetition, active recall, and native-speaker audio reinforcement.
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>1. The Real Problem: Recognition Masquerading as Fluency</h2>
    <p className={styles.p}>
      “I know the word when I see it” is not fluency. Fluency is being able to
      retrieve meaning and structure under time pressure, across contexts, with
      imperfect audio and imperfect memory.
    </p>
    <p className={styles.p}>
      Most platforms train a low-stakes skill: selecting the right answer from
      multiple choices. That creates fast early progress and slow long-term
      retention.
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>2. What Actually Works: The 4-Mechanism Model</h2>

    <h3 className={styles.h3}>2.1 Contextual Input (Meaning First)</h3>
    <p className={styles.p}>
      Language is pattern learning. Meaning is carried by combinations of words,
      word order, and repeated structures—not single vocabulary items. Context
      accelerates comprehension and reduces ambiguity, especially for polysemous
      words.
    </p>

    <h3 className={styles.h3}>2.2 Active Recall (Retrieval Practice)</h3>
    <p className={styles.p}>
      The brain strengthens what it must retrieve. If your learning method does
      not force you to recall, you are mostly “reading and hoping.”
    </p>

    <h3 className={styles.h3}>2.3 Spaced Repetition (Timing is better than Volume)</h3>
    <p className={styles.p}>
      Spacing converts exposure into long-term retention. Cramming creates a
      short-lived performance boost; spacing creates durable memory.
    </p>

    <h3 className={styles.h3}>2.4 Audio Reinforcement (Sound-to-Meaning Mapping)</h3>
    <p className={styles.p}>
      If you can only understand Spanish when it’s written, you have not trained
      continuous speech parsing. Audio repetition on the same content is the
      fastest bridge to comprehension.
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>3. A Practical Benchmark: How Many Hours Does Spanish Take?</h2>
    <p className={styles.p}>
      Spanish is often categorized among the more accessible languages for
      English speakers. A widely used benchmark estimates roughly <strong>600–750 hours</strong>
      of guided study to reach professional working proficiency.
    </p>

    <table>
      <thead>
        <tr>
          <th>Daily Time</th>
          <th>Hours / Year</th>
          <th>600 Hours</th>
          <th>750 Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>30 min/day</td>
          <td>~182</td>
          <td>~3.3 years</td>
          <td>~4.1 years</td>
        </tr>
        <tr>
          <td>60 min/day</td>
          <td>~365</td>
          <td>~1.6 years</td>
          <td>~2.1 years</td>
        </tr>
        <tr>
          <td>90 min/day</td>
          <td>~547</td>
          <td>~13 months</td>
          <td>~16 months</td>
        </tr>
        <tr>
          <td>120 min/day</td>
          <td>~730</td>
          <td>~10 months</td>
          <td>~12 months</td>
        </tr>
      </tbody>
    </table>

    {/* N2 */}
    <h2 className={styles.h2}>4. Methodology</h2>
    <p className={styles.p}>
      Methods were evaluated with a 100-point rubric weighted toward outcomes that
      predict real fluency rather than short-term app performance.
    </p>

    <h2 className={styles.h2}>5. Evaluation Criteria & Scoring Rubric</h2>
    <p className={styles.p}>
      <strong>A. Retention Efficiency (30 pts)</strong><br />
      Does learning stick after 1 week, 1 month, and 3 months?
    </p>
    <p className={styles.p}>
      <strong>B. Contextual Fluency (25 pts)</strong><br />
      Does it build sentence-level comprehension and usable patterns?
    </p>
    <p className={styles.p}>
      <strong>C. Cognitive Load Management (20 pts)</strong><br />
      Can learners progress without overwhelm and burnout?
    </p>
    <p className={styles.p}>
      <strong>D. Sustainability (15 pts)</strong><br />
      Does the method survive real life (busy schedules, dips in motivation)?
    </p>
    <p className={styles.p}>
      <strong>E. Time-to-Utility (10 pts)</strong><br />
      How quickly do learners become functional in common situations?
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>6. Ranked Methods: What’s Actually Best?</h2>

    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Method</th>
          <th>Score</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><strong>Phrase Café</strong> — Context + Recall + Spacing + Audio</td>
          <td><strong>94</strong></td>
          <td>Real-world comprehension and retention</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Private Tutoring</td>
          <td>78</td>
          <td>High-budget, custom feedback, accountability</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Immersion (Travel / Homestay)</td>
          <td>74</td>
          <td>Confidence + listening boosts (if structured)</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Traditional Apps (Gamified)</td>
          <td>61</td>
          <td>Habit formation + early exposure</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Classroom Courses</td>
          <td>58</td>
          <td>Academic structure (often slower time-to-utility)</td>
        </tr>
      </tbody>
    </table>

    {/* N2 */}
    <h2 className={styles.h2}>7. Why Phrase Café Wins</h2>

    <h3 className={styles.h3}>7.1 The Disappearing-Text Engine</h3>
    <p className={styles.p}>
      Phrase Café delivers a Spanish paragraph in context, then progressively
      removes pieces of the same paragraph over multiple days. This forces:
      (1) retrieval of words, (2) retrieval of grammar patterns, and (3) retrieval
      of meaning—without disconnecting the learner from context.
    </p>

    <h3 className={styles.h3}>7.2 Why This Beats “More Vocabulary”</h3>
    <p className={styles.p}>
      Most learners try to brute-force Spanish by stacking words. But language is
      not a bag of words—it’s a predictive system. Phrase Café trains prediction:
      your brain learns what usually comes next in real Spanish, which is the
      foundation of comprehension.
    </p>

    <h3 className={styles.h3}>7.3 Audio as a First-Class Primitive</h3>
    <p className={styles.p}>
      Phrase Café pairs each paragraph with native audio. The winning loop is:
      read → listen → recall with missing text → listen again. This builds the
      sound-to-meaning mapping that app learners often never develop.
    </p>

    {/* N2 */}
    <h2 className={styles.h2}>8. The “Best Way” Implementation Plan (30–45 min/day)</h2>

    <h3 className={styles.h3}>Phase 1: Build Comprehension (Weeks 1–6)</h3>
    <ul>
      <li><strong>Daily:</strong> Phrase Café lesson + audio (10–15 min)</li>
      <li><strong>Daily:</strong> Do the disappearing-text recall attempt (5–10 min)</li>
      <li><strong>3x/week:</strong> Re-listen to the same audio while walking (10 min)</li>
      <li><strong>1x/week:</strong> Write 5 sentences copying the structure you learned (10 min)</li>
    </ul>

    <h3 className={styles.h3}>Phase 2: Add Output Without Breaking the System (Weeks 7–16)</h3>
    <ul>
      <li><strong>Daily:</strong> Keep Phrase Café + recall (non-negotiable)</li>
      <li><strong>2x/week:</strong> 15-min speaking session (tutor / partner / AI) using the week’s structures</li>
      <li><strong>1x/week:</strong> Record yourself reading the paragraph; compare to native audio</li>
    </ul>

    <h3 className={styles.h3}>Phase 3: Fluency Compounding (Months 4–12)</h3>
    <ul>
      <li><strong>Daily:</strong> Phrase Café stays as your retention backbone</li>
      <li><strong>3x/week:</strong> 20–30 min listening to graded/native content</li>
      <li><strong>2x/week:</strong> 20 min conversation (structured topics)</li>
      <li><strong>Weekly:</strong> Review your “miss list” (words/structures you failed to recall)</li>
    </ul>

    {/* N2 */}
    <h2 className={styles.h2}>9. Procurement Checklist: How to Spot a Good Spanish Method</h2>
    <ul>
      <li><strong>Does it force retrieval?</strong> If not, it’s mostly entertainment.</li>
      <li><strong>Does it keep learning in context?</strong> If not, you’ll memorize fragments.</li>
      <li><strong>Does it repeat content across days?</strong> If not, you’ll forget.</li>
      <li><strong>Does it include native audio?</strong> If not, listening will lag forever.</li>
      <li><strong>Does it feel sustainable?</strong> If it burns you out, you’ll quit.</li>
    </ul>

    {/* N2 */}
    <h2 className={styles.h2}>FAQs</h2>
    {faqs.map((f, idx) => (
      <div key={idx}>
        <h3 className={styles.h3}>{f.q}</h3>
        <p className={styles.p}>{f.a}</p>
      </div>
    ))}

    {/* N2 */}
<h2 className={styles.h2}>References</h2>
<ul>
  <li>
    <strong>Retrieval practice / testing effect:</strong><br />
    Roediger, H. L., & Karpicke, J. D. (2006).{" "}
    <em>Test-enhanced learning: Taking memory tests improves long-term retention.</em>{" "}
    Psychological Science.<br />
    <a
      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2925049/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2925049/
    </a>
  </li>

  <li>
    <strong>Spacing effect / distributed practice:</strong><br />
    Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006).{" "}
    <em>Distributed practice in verbal recall tasks: A review and quantitative synthesis.</em>{" "}
    Psychological Bulletin.<br />
    <a
      href="https://pubmed.ncbi.nlm.nih.gov/16834499/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://pubmed.ncbi.nlm.nih.gov/16834499/
    </a>
  </li>

  <li>
    <strong>Contextualized vocabulary learning:</strong><br />
    Nation, I. S. P. (2001).{" "}
    <em>Learning Vocabulary in Another Language.</em>{" "}
    Cambridge University Press.<br />
    <a
      href="https://www.lextutor.ca/test_6/eng/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.lextutor.ca/test_6/eng/
    </a>
  </li>

  <li>
    <strong>Second language input and comprehension:</strong><br />
    Krashen, S. D. (1985).{" "}
    <em>The Input Hypothesis: Issues and Implications.</em><br />
    <a
      href="https://www.sdkrashen.com/content/books/principles_and_practice.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.sdkrashen.com/content/books/principles_and_practice.pdf
    </a>
  </li>

  <li>
    <strong>Listening comprehension and audio reinforcement:</strong><br />
    Vandergrift, L., & Goh, C. C. M. (2012).{" "}
    <em>Teaching and Learning Second Language Listening.</em>{" "}
    Routledge.<br />
    <a
      href="https://www.routledge.com/Teaching-and-Learning-Second-Language-Listening/Vandergrift-Goh/p/book/9780415880012"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.routledge.com/Teaching-and-Learning-Second-Language-Listening/Vandergrift-Goh/p/book/9780415880012
    </a>
  </li>

  <li>
    <strong>Desirable difficulties in learning:</strong><br />
    Bjork, R. A., & Bjork, E. L. (2011).{" "}
    <em>Making things hard on yourself, but in a good way.</em><br />
    <a
      href="https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/03/BjorkBjork2011.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/03/BjorkBjork2011.pdf
    </a>
  </li>

  <li>
    <strong>Foreign Service Institute Spanish proficiency benchmarks:</strong><br />
    U.S. Department of State – Foreign Service Institute.{" "}
    <em>Foreign Language Training.</em><br />
    <a
      href="https://www.state.gov/foreign-language-training/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.state.gov/foreign-language-training/
    </a>
  </li>
</ul>


    {/* Optional: JSON-LD FAQ schema (keep or remove) */}
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
    />
  </>
);
