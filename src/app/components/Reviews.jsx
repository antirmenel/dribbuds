import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    rating: '4.9/5',
    stars: '★★★★☆',
    content:
      "Exceptional clarity and comfort. These earbuds deliver balanced sound and a snug fit, perfect for daily use whether working or relaxing.",
    name: 'Marcus Lee',
    title: 'Audio Engineer',
  },
  {
    rating: '4.8/5',
    stars: '★★★★★',
    content:
      "As someone constantly on the move, these earbuds are perfect. Noise cancellation is incredible and the fit is super comfortable. Would definitely buy again. They've become an essential part of my daily routine, whether I’m commuting or working out.",
    name: 'James Tran',
    title: 'Tech Reviewer',
  },
  {
    rating: '5.0/5',
    stars: '★★★★★',
    content:
      "Incredible build quality and the audio clarity is just unmatched. They pair instantly and work seamlessly with my devices. Love them! It’s rare to find a product that consistently performs at this level every single day.",
    name: 'Amina Youssef',
    title: 'Audiophile',
  },
  {
    rating: '4.9/5',
    stars: '★★★★★',
    content:
      "Finally found earbuds that actually stay in during workouts. The bass is powerful and the mids are clear. Fantastic product! I’ve recommended them to all my clients because they’re just that reliable and comfortable.",
    name: 'Ethan Brooks',
    title: 'Fitness Trainer',
  },
  {
    rating: '4.7/5',
    stars: '★★★★☆',
    content:
      "They deliver premium sound at an affordable price. Only downside was a slight delay in shipping, but worth the wait. Customer service was helpful throughout, which made the whole experience feel professional and smooth.",
    name: 'Chloe Renard',
    title: 'Frequent Flyer',
  },
  {
    rating: '5.0/5',
    stars: '★★★★★',
    content:
      "I use them daily for calls and music. Mic quality is great and people hear me clearly even in noisy areas. The battery easily lasts through long meetings, and switching between devices is seamless and frustration-free.",
    name: 'Oscar Martínez',
    title: 'Remote Worker',
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-100 text-[#252B37] py-16 px-6 sm:px-12 flex flex-col items-center">
      <div className="mb-12 text-center max-w-3xl space-y-4">
        <h2 className="text-3xl sm:text-4xl font-monument tracking-tight text-black">
          Product Reviews
        </h2>
        <h3 className="text-base sm:text-lg text-gray-700">
          We’ve sent our products to a couple of customers to test and review them. Here’s their brutally honest feedback.
        </h3>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-[#0E101B] text-white p-6 pt-10 rounded-xl flex flex-col gap-4 shadow-lg min-h-[320px] overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 w-16 h-16 text-white/5" />

            <div className="flex items-center justify-between text-white font-semibold text-sm">
              <span>{review.rating}</span>
              <span>{review.stars}</span>
            </div>

            <p className="text-base text-gray-200 leading-relaxed py-2 z-10">
              {review.content}
            </p>

            <div className="text-sm text-gray-400 mt-auto">
              <span className="text-white font-medium">{review.name}</span>, {review.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
