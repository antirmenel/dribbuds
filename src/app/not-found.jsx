'use client';

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex flex-col sm:min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md">
        <h1 className="font-monument text-black text-3xl sm:text-4xl md:text-5xl">DRIBBUDS</h1>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 h-[50px] px-6 py-3 rounded-[720px] bg-[linear-gradient(100.3deg,rgba(14,16,27,0.8)_34.4%,rgba(255,193,0,0.5)_83.83%)] backdrop-blur-[12px] text-white font-semibold transition hover:brightness-110"
        >
          Go Home
          <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
            <ArrowUpRight className="h-4 w-4 text-black" />
          </span>
        </Link>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 z-10">
        <h1 className="font-monument text-[#252B37] text-5xl sm:text-7xl md:text-9xl font-bold mb-4 leading-tight">404</h1>
        <h2 className="font-monument text-[#252B37] text-xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          This page got lost in the beat.
        </h2>
        <p className="text-[#535862] max-w-md text-sm sm:text-base mb-8">
          The page you're looking for doesn't exist or has been moved. <br />But don't worry — the rhythm goes on.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full max-w-[280px] h-[60px] px-6 py-3 rounded-[720px] bg-[linear-gradient(100.3deg,rgba(14,16,27,0.8)_34.4%,rgba(255,193,0,0.5)_83.83%)] backdrop-blur-[12px] text-white font-semibold transition hover:brightness-110"
        >
          Back to homepage
          <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
            <ArrowUpRight className="h-4 w-4 text-black" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
