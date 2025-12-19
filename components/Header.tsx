"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/#insights",
    label: "Insights",
  },
  {
    href: "/#capabilities",
    label: "Capabilities",
  },
  {
    href: "/#intelligence-engine",
    label: "Intelligence Engine",
  },
  {
    href: "/#about",
    label: "About",
  },
];

const HeaderContent = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0"
            href="/"
            title="Brightverge Research Group homepage"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0a1628] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">BV</span>
              </div>
              <span className="font-semibold text-lg text-[#0a1628] hidden sm:block">
                Brightverge Research Group
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#0a1628]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:gap-10 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-sm font-medium text-[#0a1628]/80 hover:text-[#0a1628] transition-colors"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-[#0a1628] hover:text-[#0a1628]/80 transition-colors px-4 py-2 border border-[#0a1628]/20 rounded-md hover:border-[#0a1628]/40"
          >
            Client access
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-10 w-full px-6 py-4 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300">
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0"
              title="Brightverge Research Group homepage"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0a1628] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BV</span>
                </div>
                <span className="font-semibold text-lg text-[#0a1628]">
                  Brightverge Research Group
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flow-root mt-8">
            <div className="py-4">
              <div className="flex flex-col gap-y-6 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="text-base font-medium text-[#0a1628] hover:text-[#0a1628]/70"
                    title={link.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 my-6"></div>
            <Link
              href="/dashboard"
              className="block w-full text-center text-sm font-medium text-white bg-[#0a1628] px-4 py-3 rounded-md hover:bg-[#1a2d4a] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Client access
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Header() {
  return (
    <Suspense fallback={<div className="h-16 bg-white/95 backdrop-blur-sm shadow-sm" />}>
      <HeaderContent />
    </Suspense>
  );
}
