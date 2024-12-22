import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { exploreData } from "../Assets/exploreData";
import "./Explore.css";

export default function Explore() {
  return (
    <div className="explore bg-[#EBD96B] py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Start exploring</h1>
        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exploreData.map((item) => {
            const { id, path, img, bcImg, name, num } = item;
            return (
              <Link
                key={id}
                to={path}
                className="box relative bg-white shadow-md rounded-lg overflow-hidden"
                onClick={() => window.scroll(0, 0)}
              >
                <div className="box-content p-4">
                  <div className="img-num flex items-center justify-between">
                    <div className="imgbx w-20 h-20 overflow-hidden rounded-full">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="num text-gray-600">
                      <span>{num} products</span>
                    </div>
                  </div>
                  <div className="title mt-4">
                    <span className="type text-sm uppercase text-gray-500">
                      Manufacturer
                    </span>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {name}
                    </h2>
                  </div>
                  <span className="see-btn flex items-center text-blue-500 mt-4">
                    See collection <IoIosArrowRoundForward className="arrow ml-2" />
                  </span>
                </div>
                <div className="bc-img absolute inset-0 z-[-1] opacity-30">
                  <img src={bcImg} alt="Background" className="w-full h-full object-cover" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="blur-color"></div>
    </div>
  );
}
