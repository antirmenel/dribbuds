"use client";

import React from "react";
import Link from "next/link";

const AboutUs = () => (
  <section className="bg-gray-100 text-[#252B37] sm:py-16 px-6 sm:px-12 flex flex-col items-center max-w-5xl mx-auto min-h-screen">
    {/* Header */}
    <div className="mb-12 text-center space-y-3">
      <h6 className="inline-block bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full shadow-md">
        Our Story
      </h6>
      <h2 className="text-3xl sm:text-4xl font-monument tracking-tight font-semibold">
        About DRIBBUDS
      </h2>
    </div>

    {/* Content */}
    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg max-w-4xl leading-relaxed text-lg sm:text-xl space-y-6">
      <p>
        At DRIBBUDS, we’re passionate about delivering immersive sound experiences
        that elevate your daily life. Founded by audio enthusiasts, our mission is
        to create headphones and earbuds that blend cutting-edge technology with
        exceptional comfort and style.
      </p>

      <p>
        We believe that music is more than just sound — it’s a feeling, a rhythm,
        a connection. That’s why every product we design undergoes rigorous testing
        to ensure crystal-clear audio, long-lasting battery life, and durability.
      </p>

      <p>
        Our team is dedicated to innovation and customer satisfaction, constantly
        pushing boundaries to bring you the best in personal audio. Whether you’re
        commuting, working out, or relaxing, DRIBBUDS provides the perfect soundtrack
        to your life.
      </p>

      <p>Thank you for choosing DRIBBUDS — pure bass, pure joy.</p>

      {/* Go Home Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="
            inline-block
            bg-[#0E101B]
            text-white
            px-6
            py-3
            rounded-[720px]
            font-semibold
            hover:bg-[#1a1d2e]
            transition
            shadow-lg
            focus:outline-none
            focus:ring-4
            focus:ring-yellow-400
          "
          aria-label="Go Home"
        >
          Go Home
        </Link>
      </div>
    </div>
  </section>
);

export default AboutUs;
