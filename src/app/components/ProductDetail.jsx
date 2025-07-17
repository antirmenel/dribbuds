'use client';

import { useState } from "react";

export default function ProductDetail({ product }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, cardNumber, expiry, cvc } = formData;
    if (
      !name.trim() ||
      !email.trim() ||
      !cardNumber.trim() ||
      !expiry.trim() ||
      !cvc.trim()
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsProcessing(true);
    setSuccessMessage("");
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessMessage(`Thank you, ${formData.name}! Your purchase of ${product.name} is confirmed.`);
      setFormData({
        name: "",
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8">
      <img
        src={product.img}
        alt={product.name}
        className="w-full md:w-1/2 h-auto rounded-lg object-contain"
        loading="lazy"
      />

      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-monument font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.desc}</p>
          <div className="flex items-center space-x-4 text-xl sm:text-2xl mb-8">
            <span className="line-through text-gray-500">{product.priceOld}</span>
            <span className="font-semibold text-black">{product.priceNew}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isProcessing}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isProcessing}
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            maxLength={19}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            disabled={isProcessing}
          />
          {/* Improved expiry + cvc container */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              maxLength={5}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow min-w-[120px]"
              value={formData.expiry}
              onChange={handleChange}
              required
              disabled={isProcessing}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              maxLength={4}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-24 min-w-[72px]"
              value={formData.cvc}
              onChange={handleChange}
              required
              disabled={isProcessing}
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`mt-4 bg-[#0E101B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a1d2e] transition ${
              isProcessing ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isProcessing ? "Processing..." : "Confirm Purchase"}
          </button>

          {successMessage && (
            <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
