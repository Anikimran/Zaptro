import React from "react";
import img from "../assets/img.png"; // ✅ সঠিকভাবে ইমেজ ইম্পোর্ট

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24 py-10">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{ backgroundImage: `url(${img})` }} // ✅ ব্যাকগ্রাউন্ডে ইমেজ ব্যবহার
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>
            <button className="bg-red-500  text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 hover:bg-red-800">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-around mt-10">
        <button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
      </div>
    </div>
   
  );
};

export default MidBanner;
