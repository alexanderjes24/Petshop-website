import { useState } from "react";
import Bestselling from "../GeneralComponent/Bestselling";
import Product1 from '../assets/Img (19).svg'
import Product2 from '../assets/Img (20).svg'
import Product3 from '../assets/Img (21).svg'
import Product4 from '../assets/Img (22).svg'
import Product5 from '../assets/Img (23).svg'
import Product6 from '../assets/Img (24).svg'
import Product7 from '../assets/Img (25).svg'
import Product8 from '../assets/Img (26).svg'
import Product9 from '../assets/Img (27).svg'
import Product10 from '../assets/Img (28).svg'
import Product11 from '../assets/Img (29).svg'
import Product12 from '../assets/Img (30).svg'
import Product13 from '../assets/Img (31).svg'
const productsData=[
  { title: "Cat Bowl", products: 20.99, img: Product1 },
  { title: "Cat Bowk", products: 49.99, img: Product2 },
  { title: "Dog Leash", products: 9.99, img: Product3 },
  { title: "Premium Cat Food", products: 19.99, img: Product4 },
  { title: "Dog Bowl", products: 19.99, img: Product5 },
  { title: "Premium Dog Food", products: 29.99, img: Product6 },
  { title: "Dog Bed", products: 49.99, img: Product7 },
  { title: "Bags", products: 19.99, img: Product8 },
]
const ProductsPage= () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Burger Menu Button (Mobile) */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow-md rounded-full"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰ {/* Unicode burger icon */}
      </button>

      {/* Sidebar - Full Screen on Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4 md:p-4 md:bg-transparent`}
      >
        <div className="bg-white w-full md:w-80 h-full p-6 overflow-y-auto">
          {/* Close Button (Mobile) */}
          <button
            className="absolute top-4 right-4 text-lg md:hidden px-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            X {/* Unicode close icon */}
          </button>

          {/* Filter by Categories */}
          <h2 className="font-bold text-lg mb-4">Filter by categories</h2>
          <div className="space-y-2">
            {[
              { name: "Furniture", count: 21 },
              { name: "Bowls", count: 28 },
              { name: "Clothing", count: 12 },
              { name: "Food", count: 80 },
              { name: "Toys", count: 90 },
              { name: "Sale", count: 24 },
            ].map(({ name, count }) => (
              <label key={name} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-orange-500" />
                  <span>{name}</span>
                </div>
                <span className="text-amber-500 rounded-xl bg-gray-100 px-2">{count}</span>
              </label>
            ))}
          </div>
          <h2 className="font-bold text-lg mt-6">Filter by Price</h2>
          <div className="flex items-center space-x-2">
            <input type="range" className="w-full accent-orange-500" />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Price: $9 - $399</p>
          <button className=" bg-black text-white rounded px-3 py-1">Apply</button>
          </div>
          
          {/* Filter by Brands */}
          <h2 className="font-bold text-lg mt-6">Filter by brands</h2>
          <div className="space-y-2">
            {[
              { name: "Natural food", count: 28 },
              { name: "Pet care", count: 18 },
              { name: "Dogs friend", count: 16 },
              { name: "Pet food", count: 40 },
              { name: "Favorite pet", count: 28 },
              { name: "Green line", count: 18 },
            ].map(({ name, count }) => (
              <label key={name} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-orange-500" />
                  <span>{name}</span>
                </div>
                <span className="text-amber-500 rounded-xl bg-gray-100 px-2">{count}</span>
              </label>
            ))}
          </div>

          {/* Filter by Tags */}
          <h2 className="font-bold text-lg mt-6">Filter by tags</h2>
          <div className="flex flex-wrap gap-2">
            {["Dog food", "Cat food", "Natural", "Parrot", "Small dog", "Cat"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tag}</span>
            ))}
          </div>

          {/* Popular Products */}
          <h2 className="font-bold text-lg mt-6">Popular products</h2>
          <div className="space-y-4">
            {[
              { name: "Premium Dog Food", price: "$99", img: Product9 },
              { name: "Premium Cat Food", price: "$220", img: Product10 },
              { name: "Cat Bed", price: "$50", img: Product11 },
              { name: "Dog Leash", price: "$220", img:Product12 },
              { name: "Cat Bowl", price: "$220", img: Product13 },
            ].map(({ name, price, img }) => (
              <div key={name} className="flex items-center space-x-4">
                <img src={img} alt={name} className="bg-gray-300 rounded-md" />
                <div>
                  <p className="text-gray-700">{name}</p>
                  <p className="text-black font-bold">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">Showing 12-20 of 14 results</p>
          <select className="border border-gray-300 px-3 py-1 text-sm rounded">
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>

        {/* Product Grid */}
        <Bestselling items={productsData} columns={3}/>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded bg-orange-500 text-white">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProductsPage