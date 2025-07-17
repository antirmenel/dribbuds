import Link from "next/link";
import ProductDetail from '../../components/ProductDetail';

const products = {
  "elebuds-lite": {
    name: "Elebuds Lite",
    desc: `Perfect for the budget-conscious consumer who doesn’t want to
      compromise on sound quality. Offers basic features with solid
      performance.`,
    img: "/assets/3.png",
    priceOld: "$79",
    priceNew: "$59",
  },
  "harmony-pro-x": {
    name: "Harmony Pro X",
    desc: `Targeted at the mid-range market, offering advanced features like
      noise cancellation and extended battery life for the everyday user.`,
    img: "/assets/2.png",
    priceOld: "$189",
    priceNew: "$149",
  },
  "auralx-elite": {
    name: "AuralX Elite",
    desc: `Designed for audiophiles and tech enthusiasts, featuring superior
      sound quality, cutting-edge technology, and ultra-comfortable design
      for prolonged use.`,
    img: "/assets/1.png",
    priceOld: "$289",
    priceNew: "$249",
  },
};

async function getProductData(slug) {
  return products[slug] || null;
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = await getProductData(slug);

  if (!product) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center text-[#252B37] px-6 sm:px-12">
        <p className="mb-4 text-lg font-semibold">Product not found.</p>
        <Link href="/">
          <a className="underline text-lg hover:text-gray-700">Back to Home</a>
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center px-6 sm:px-12 py-16 text-[#252B37] max-w-5xl mx-auto">
      <Link href="/">
        <a className="self-start mb-6 underline hover:no-underline text-lg text-gray-700 hover:text-gray-900 transition">
          &larr; Back to Home
        </a>
      </Link>

      <ProductDetail product={product} />
    </section>
  );
}
