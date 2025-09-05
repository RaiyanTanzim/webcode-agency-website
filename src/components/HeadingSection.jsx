import React from "react";

export default function HeadingSection({ subHeading, heading, description }) {
  return (
    <div className="text-center mb-12">
      <p className="text-blue-600 font-semibold uppercase">{subHeading}</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3 md:w-1/2 mx-auto">
        {heading}{" "}
      </h2>
      {description && <p className="text-gray-600 mt-4 sm:w-3/5 mx-auto">{description}</p>}
    </div>
  );
}
