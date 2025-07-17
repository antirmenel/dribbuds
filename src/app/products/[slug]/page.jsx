"use client";

import React from "react";

export default function ProductDetail({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-5xl w-full flex flex-col md:flex-row gap-8">
      {/* Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-full md:w-1/2 h-auto rounded-lg object-contain"
      />

      {/* Content and Form */}
      <div className="flex flex-col justify-between md:w-1/2 space-y-6">
        {/* Product Info */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-monument font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.desc}</p>
          <div className="flex items-center space-x-4 text-lg sm:text-xl">
            <span className="line-through text-gray-400">{product.priceOld}</span>
            <span className="font-semibold text-black">{product.priceNew}</span>
          </div>
        </div>

        {/* Payment Form */}
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`Purchase confirmed for ${product.name}!`); }}>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              maxLength={19}
              pattern="[0-9\s]{13,19}"
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              required
              className="w-24 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              required
              className="w-20 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              maxLength={4}
              pattern="[0-9]{3,4}"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0E101B] text-white py-3 rounded-lg font-semibold hover:bg-[#1a1d2e] transition"
          >
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
