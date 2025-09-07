import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250, // 25 * 12
    saves: "$25 USD per month, paid annually",
    features: [
      "1 Project",
      "Basic Support",
      "Access to all templates",
      "5GB Storage",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650, // 65 * 12
    saves: "$55 USD per month, paid annually",
    features: [
      "5 Projects",
      "Priority Support",
      "Access to all templates",
      "25GB Storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950, // 95 * 12
    saves: "$95 USD per month, paid annually",
    features: [
      "Unlimited Projects",
      "24/7 Support",
      "Access to all templates",
      "Unlimited Storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeadingSection
        subHeading="Pricing"
        heading="Choose Your Plan"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      />

      {/* plan toggling */}
      <div className="text-center mb-10">
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-3 text-lg text-gray-600">
            {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="toggle-bg w-14 h-8 rounded-full bg-gray-300"></div>
            <div
              className={`toggle-circle absolute top-1 left-1 h-6 w-6 bg-blue-600 rounded-full transition transform duration-300 ${
                isYearly ? "transform translate-x-6" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Pricing plan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPlans.map((plan) => {
          return (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-5 text-center">
                <h3 className="text-2xl font-bold text-gray-800 my-3">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Best for {plan.name.toLowerCase()}
                </p>

                {/* pricing */}
                <div className="text-3xl font-bold text-gray-800">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-sm text-gray-600">
                    {" "}
                    / {isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="my-4 text-gray-600">
                  {isYearly ? plan.saves : ""}
                </p>
                <div className="text-center p-5">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full my-2 transition duration-300 cursor-pointer">
                    Choose {plan.name}
                  </button>
                </div>
                {/* fueatures */}
                <div className="p-5 md:px-12 md:py-5">
                  <ul className="text-center text-gray-600">
                    {plan.features.map((feature, i) => {
                      return (
                        <li key={i} className="flex items-center mb-2">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12l5 5L20 7"
                            />
                          </svg>

                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
