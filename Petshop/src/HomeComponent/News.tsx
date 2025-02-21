import React from "react";
import Label from '../assets/Img+ label (1).svg'
import Label2 from '../assets/Img+ label (2).svg'
import Label3 from '../assets/Img+ label.svg'
const News = () => {
  const newsItems = [
    {
      title: "Urna Cras Et Mauris Congue Nunc Nisi Nec Tempus Cursus",
      date: "24 May, 2024",
      img: Label3,
    },
    {
      title: "Id Tellus Dignissim Eu Nisi Aliquam. Massa Id Interdum",
      date: "24 May, 2024",
      img: Label,
    },
    {
      title: "Mus Cursus Pellentesque Blandit Tortor Suspendisse Ornare",
      date: "24 May, 2024",
      img: Label2,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-10 px-5 md:px-0">
      {/* Header */}
      <div>
        <h1 className="text-center py-10 text-4xl font-semibold">News and Blog</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-gray-500 text-sm">{item.date}</p>
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
