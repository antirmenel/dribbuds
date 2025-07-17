import React from 'react';

const Features = () => (
  <section className="bg-gray-100 text-[#252B37] py-12 sm:py-20 px-6 sm:px-12 flex flex-col items-center">
    {/* Header */}
    <div className="mb-10 sm:mb-16 text-center space-y-3 max-w-3xl">
      <h6 className="inline-block bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase">
        Features
      </h6>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-monument tracking-tight leading-tight">
        Start your audiophile<br /> journey here
      </h2>
    </div>

    <img
      src="/assets/Features.png"
      alt="Feature Highlights"
      className="w-full max-w-6xl h-auto object-contain"
      loading="lazy"
    />
  </section>
);

export default Features;
