import Link from 'next/link';

const products = [
  {
    slug: "elebuds-lite",
    name: "Elebuds Lite",
    desc: `Perfect for the budget-conscious consumer who doesn’t want to
      compromise on sound quality. Offers basic features with solid
      performance.`,
    img: "/assets/3.png",
    priceOld: "$79",
    priceNew: "$59",
  },
  {
    slug: "harmony-pro-x",
    name: "Harmony Pro X",
    desc: `Targeted at the mid-range market, offering advanced features like
      noise cancellation and extended battery life for the everyday user.`,
    img: "/assets/2.png",
    priceOld: "$189",
    priceNew: "$149",
  },
  {
    slug: "auralx-elite",
    name: "AuralX Elite",
    desc: `Designed for audiophiles and tech enthusiasts, featuring superior
      sound quality, cutting-edge technology, and ultra-comfortable design
      for prolonged use.`,
    img: "/assets/1.png",
    priceOld: "$289",
    priceNew: "$249",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-gray-100 text-[#252B37] sm:py-16 px-6 sm:px-12 flex flex-col items-center"
    >
      <div className="mb-12 text-center space-y-3">
        <h6 className="inline-block bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase">
          New Launches
        </h6>
        <h2 className="text-3xl sm:text-4xl font-monument tracking-tight">
          Fresh off the boat
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col space-y-4"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-2xl font-monument">{product.name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{product.desc}</p>

            <div className="flex items-center justify-between mt-auto pt-4">
              <div className="space-x-2 text-sm sm:text-base">
                <span className="text-gray-500 line-through">{product.priceOld}</span>
                <span className="text-black font-semibold">{product.priceNew}</span>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="bg-[#0E101B] text-white px-4 py-2 rounded-lg hover:bg-[#1a1d2e] transition inline-block"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
