import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiCalendar, FiCompass, FiActivity, FiTruck } from "react-icons/fi";

const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
  },
  {
    icon: FiCompass,
    title: "Developer-Friendly",
    description:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
  },
  {
    icon: FiActivity,
    title: "Responsive Design",
    description:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    icon: FiTruck,
    title: "Cloud Integration",
    description:
      "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeadingSection
        subHeading={"Services"}
        heading={
          "Explore Our Range Of Professional Services Tailored To Meet Your Business Needs."
        }
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus, excepturi eos eaque provident iusto sint hic nihil iste architecto temporibus quasi facere aliquam sed in repellendus cupiditate ipsa, quas quae sapiente. Perspiciatis repudiandae vel magni facilis nulla, ex et modi. Placeat nobis minima porro, mollitia molestiae dolores provident obcaecati!"
        }
      />
      {/* services container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer border border-gray-200 rounded-md"
            >
              <service.icon className="text-4xl text-blue-500 mb-4" />
              <p className="text-gray-600 mt-2 md:px-10">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center my-4">
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-md transition cursor-pointer">
          Explore More
        </button>
      </div>
    </div>
  );
}
