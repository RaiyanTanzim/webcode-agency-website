import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { TfiCloudDown } from "react-icons/tfi";
import HeadingSection from "../../components/HeadingSection";

const tools = [
  {
    icon: CiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements",
  },
  {
    icon: FaCode,
    title: "Developer Friendly",
    description: "Easily configure tools to fit your project requirements",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Easily configure tools to fit your project requirements",
  },
  {
    icon: TfiCloudDown,
    title: "Cloud Integration",
    description: "Easily configure tools to fit your project requirements",
  },
];

export default function ToolsSection() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        {/* Heading Section */}
        {/* <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold uppercase">
            The tools you need
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
            All-in-one Solution for Your Projects{" "}
          </h2>
        </div> */}
        <HeadingSection
          heading={"All-in-one Solution for Your Projects"}
          subHeading={" The tools you need"}
        />
        {/* render tools here */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            return (
              <div
                key={index}
                className="flex flex-col text-center p-6 shadow-lg items-center rounded-lg hover:shadow-xl transition cursor-pointer mb-8"
              >
                <div className="text-4xl text-blue-500 mb-4">
                  <tool.icon />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {tool.title}
                </h2>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            );
          })}
        </div>
        {/* tool section button */}
        <div className="text-center my-4">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-md transition cursor-pointer">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
}
