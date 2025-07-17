"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Products", action: scrollToProducts },
    { name: "Support", href: "mailto:mail@antirmenel@gmail.com", isMail: true },
  ];

  return (
    <section className="relative flex flex-col bg-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/assets/Grid.png')] bg-center bg-no-repeat bg-cover opacity-30"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md">
        <h1 className="font-monument text-black text-3xl sm:text-4xl md:text-5xl">DRIBBUDS</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row items-center gap-6 text-[#535862] text-lg sm:text-xl font-medium">
            {navItems.map(({ name, href, action, isMail }) => (
              <li key={name}>
                {href ? (
                  isMail ? (
                    <a href={href} className="hover:underline">{name}</a>
                  ) : (
                    <Link href={href} className="hover:underline">{name}</Link>
                  )
                ) : (
                  <button
                    onClick={action}
                    type="button"
                    className="hover:underline bg-transparent border-none cursor-pointer text-[#535862]"
                  >
                    {name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button – large screens only */}
        <button
          onClick={scrollToProducts}
          aria-label="Shop Now"
          className="hidden lg:flex items-center justify-center gap-2 h-[60px] px-6 py-3 border-3 border-white rounded-[720px] bg-[linear-gradient(100.3deg,rgba(14,16,27,0.8)_34.4%,rgba(255,193,0,0.5)_83.83%)] backdrop-blur-[12px] text-white font-semibold transition hover:brightness-110"
        >
          Shop Now
          <span className="flex items-center justify-center bg-white rounded-full w-8 h-8">
            <ArrowUpRight className="h-6 w-6 text-black" />
          </span>
        </button>

        {/* Hamburger Icon – small screens */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 z-10 flex flex-col gap-4 text-[#535862] text-lg font-medium">
          {navItems.map(({ name, href, action, isMail }) => {
            if (href) {
              return isMail ? (
                <a
                  key={name}
                  href={href}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  href={href}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              );
            }
            return (
              <button
                key={name}
                onClick={() => {
                  action();
                  setIsOpen(false);
                }}
                type="button"
                className="hover:underline bg-transparent border-none text-left"
              >
                {name}
              </button>
            );
          })}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 py-10 sm:py-32 z-10">
        <img
          src="/assets/Img.png"
          alt="Hero visual"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-7xl max-h-[75vh] object-contain opacity-50"
          loading="lazy"
        />

        <h1 className="text-[#252B37] text-5xl sm:text-6xl md:text-9xl font-monument leading-tight mb-3">
          Pure Bass
        </h1>
        <h1 className="text-[#252B37] text-5xl sm:text-6xl md:text-9xl font-monument leading-tight mb-12">
          Pure Joy
        </h1>

        {/* CTA Button – small & medium screens */}
        <button
          onClick={scrollToProducts}
          aria-label="Shop Now"
          className="lg:hidden flex items-center justify-center gap-2 w-full max-w-[280px] h-[60px] px-6 py-3 border-3 border-white rounded-[720px] bg-[linear-gradient(100.3deg,rgba(14,16,27,0.8)_34.4%,rgba(255,193,0,0.5)_83.83%)] backdrop-blur-[12px] text-white font-semibold transition hover:brightness-110"
        >
          Shop Now
          <span className="flex items-center justify-center bg-white rounded-full w-8 h-8">
            <ArrowUpRight className="h-6 w-6 text-black" />
          </span>
        </button>
      </div>

      {/* Marquee Text */}
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide sm:my-4 my-12">
        <h1 className="text-3xl sm:text-4xl text-black font-monument inline-block">
          try now — try now — try now — try now — try now — try now — try now —
        </h1>
      </div>
    </section>
  );
};

export default Hero;
