import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";

import bannerImg from "../../assets/banner.png";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* left side content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Creative Web Design For Business
          </h1>
          <p className="lext-lg text-gray-700 mb-6">
            Join thousands of business already growing with our solutions. Let's
            help you take your business to the next level
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition">
              <span>Get Started</span> <FaArrowRightLong />
            </button>
            <button className="border border-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition text-blue-600">
              Contact Us
            </button>
          </div>
        </div>

        {/* right side content */}
        <div className="lg-w-1/2 mt-10  lg:mt-0 flex justify-end relative">
          <div className="relative group">
            <img src={bannerImg} alt="banner Image" />
            <button
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0"
            >
              <IoPlayCircleOutline className="text-white text-5xl hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <button
                onClick={closeModal}
                className="cursor-pointer hover:bg-gray-200 px-2 text-lg mb-2 border border-gray-400 rounded-md"
              >
                &times;
              </button>
              <iframe
                className="w-full aspect-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JnX7Oc8LqD8?si=bVeKKwMqhGqO56hu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
