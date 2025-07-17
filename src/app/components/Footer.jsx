"use client";

import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-white text-[#252B37] px-6 sm:px-12 py-12 flex flex-col items-center space-y-4">
    {/* Navigation Links */}
    <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/aboutus" className="hover:underline">About Us</Link>
      <Link href="/#products" className="hover:underline">Products</Link>
      <a href="mailto:mail@antirmenel@gmail.com" className="hover:underline">Support</a>
    </nav>

    {/* Legal Links */}
    <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
      <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
      <span className="hidden sm:inline">|</span>
      <Link href="/termsofuse" className="hover:underline">Terms of Use</Link>
    </div>

    {/* Copyright */}
    <p className="text-gray-400 text-center">© 2025 Dribbuds. All rights reserved.</p>

    {/* Logo */}
    <h1 className="text-5xl sm:text-8xl font-monument text-center leading-tight">DRIBBUDS</h1>
  </footer>
);

export default Footer;
