import React from "react";
import { Link } from "react-router-dom";
import { exploreData } from "../Assets/exploreData";

export default function Explore() {
  return (
    <div className="explore bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Start Exploring
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreData.map((item) => {
            const { id, path, img, name } = item;
            return (
              <div
                key={id}
                className="group border border-gray-200 rounded-md overflow-hidden shadow hover:shadow-lg transition transform duration-300"
              >
                {/* Wrap the entire card with Link */}
                <Link to={path} onClick={() => window.scroll(0, 0)}>
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Bestseller
                    </div>
                    <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-50 text-center py-2">
                      <button className="text-white text-sm font-semibold">
                        Quick view
                      </button>
                    </div>
                  </div>
                  {/* Text Section */}
                  <div className="p-4">
                    <h2 className="text-base font-bold text-gray-800">
                      {name}
                    </h2>
                    <div className="text-yellow-500 mt-2 flex items-center">
                      <span className="text-xs">★★★★★</span>
                      <span className="ml-2 text-gray-500 text-sm">
                        {Math.floor(Math.random() * 30) + 5} reviews
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-red-500 font-bold">
                        ₹{(Math.random() * 2000 + 1500).toFixed(2)}
                      </span>{" "}
                      <span className="line-through text-gray-500 ml-2">
                        ₹{(Math.random() * 5000 + 3000).toFixed(2)}
                      </span>{" "}
                      <span className="text-green-500 text-sm font-bold ml-2">
                        60% off
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
