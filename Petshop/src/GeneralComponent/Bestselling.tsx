import React from "react";
import heart from '../assets/heart.svg'
type Product = {
  title: string
  products: number
  img: string
};

type BestsellingProps = {
  heading?: string
  items: Product[]
  columns?: number// New prop to control column count
};

function Bestselling({ heading, items, columns = 4 }: BestsellingProps) {
  // Define Tailwind grid class based on `columns` prop
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns] || "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"; // Default to 4 columns

  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-0">
      {/* Title */}
      <div>
        <h1 className="text-center py-5 text-4xl font-semibold">{heading}</h1>
      </div>

      {/* Grid Layout */}
      <div className={`grid ${gridClass} gap-6`}>
        {items.map((item, index) => (
          <div key={index} className=" rounded-2xl overflow-hidden border-2 border-gray-50">
            {/* Image */}
            <img src={item.img} alt={item.title} className="w-full object-cover" />

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <img src={heart}/>
              </div>
              <p className="text-gray-500 text-sm">{item.products} products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestselling;
