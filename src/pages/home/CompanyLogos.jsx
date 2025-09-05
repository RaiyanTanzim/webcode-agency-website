import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaFacebook,
  FaMicrosoft,
} from "react-icons/fa6";

const companyLogos = [
  {
    icon: FaApple,
    name: "Apple",
  },
  {
    icon: FaGoogle,
    name: "Google",
  },
  {
    icon: FaAmazon,
    name: "Amazon",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
  },
  {
    icon: FaMicrosoft,
    name: "Microsoft",
  },
];

export default function CompanyLogos() {
  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <HeadingSection
          heading={"Companies we have worked with"}
          subHeading={"Our trusted partners"}
          description={
            "We have paetnered with some of the most inovative and leading companies to bring the best solutions to you"
          }
        />
        {/* logo container */}
        <div className="relative overflow-hidden border-y-[1px] border-gray-200 p-8">
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
            {companyLogos.map((companyLogo, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white rounded-full p-6 w-28 hover:scale-110  transform"
                >
                  <companyLogo.icon
                    className="text-blue-500 text-4xl"
                    title={companyLogo.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
