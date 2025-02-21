import React from 'react'

type Banner = {
  title: string
  title2?: string
  description?: string
  position?: "left" | "right" // Controls image and text alignment
  image?: string
  buttonText?: string // Customizable button text
  showButton?: boolean // Controls button visibility

};

const Herobanner = (props: Banner) => {
  return (
    <div className={`flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto pt-5 ${props.position === "right" ? "md:flex-row-reverse" : ""}`}>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-5">
        <small className="text-amber-600 font-bold">Pet Shop</small>
        <h1 className="text-3xl md:text-5xl py-2 font-bold">{props.title}</h1>
        <h1 className="text-3xl md:text-5xl py-2 font-bold">{props.title2}</h1>
        <p className="py-6 text-sm opacity-80">{props.description}</p>
        {props.showButton && (
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-900 cursor-pointer"
            >
              {props.buttonText}
            </button>
          </div>
        )}
      </div>

      {/* Image Section */}
      {props.image && (
        <div className="w-full md:w-1/2 h-full flex ">
          <img src={props.image} alt="Pet" className="w-full h-full object-cover" />
        </div>
      )}

    </div>
  );
};

export default Herobanner;
