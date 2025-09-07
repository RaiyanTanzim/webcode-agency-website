import React from "react";
import HeadingSection from "../../components/HeadingSection";

export default function Newsletter() {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5 text-center">
      <HeadingSection
        heading=" Stay Updated With Our Newsletter"
        description="Subscribe to our newsletter to get the latest news, updates, and offers.
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
      />

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition">
          Subscribe Now
        </button>
        <button className="border border-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition text-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}
