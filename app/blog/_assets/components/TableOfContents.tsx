"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function TableOfContents({
  containerId,
  selector = "h2, h3, h4",
}: {
  containerId: string;
  selector?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);

  const baseIndentByLevel = useMemo(() => {
    return {
      2: "pl-0",
      3: "pl-3",
      4: "pl-6",
    } as Record<number, string>;
  }, []);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const headings = Array.from(container.querySelectorAll(selector)).filter(
      (el): el is HTMLHeadingElement =>
        el instanceof HTMLHeadingElement && !!el.textContent
    );

    const usedIds = new Map<string, number>();

    const newItems: TocItem[] = headings
      .map((heading) => {
        const rawText = heading.textContent?.trim() ?? "";
        if (!rawText) return null;

        const level = Number(heading.tagName.replace("H", ""));
        const baseId = slugify(rawText) || "section";
        const count = usedIds.get(baseId) ?? 0;
        usedIds.set(baseId, count + 1);
        const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

        if (!heading.id) heading.id = id;
        heading.style.scrollMarginTop = "96px";

        return { id: heading.id, text: rawText, level };
      })
      .filter((x): x is TocItem => x !== null);

    setItems(newItems);
  }, [containerId, selector]);

  if (items.length === 0) return null;

  return (
    <div className="mb-8">
      <p className="text-slate-500 text-sm mb-3">Table of Contents</p>
      <nav aria-label="Table of contents">
        <ol className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className={baseIndentByLevel[item.level] ?? "pl-0"}>
              <a
                href={`#${item.id}`}
                className="text-sm text-[#0a1628] hover:text-[#0a1628]/70 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  history.replaceState(null, "", `#${item.id}`);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
