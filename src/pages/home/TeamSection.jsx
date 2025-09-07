import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { Link } from "react-router";
import { FaLinkedin,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <HeadingSection subHeading="Our Team" heading="Meet The Experts" />

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((teamMember) => {
            return (
              <div
                key={teamMember.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="h-56 w-full object-cover"
                />

                {/* content */}
                <div className="p-3">
                  <h3 className="text-xl font-bold mb-2">{teamMember.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    {teamMember.role}
                  </p>

                  {/* social icons */}
                  <div className="flex space-x-4 my-2 text-lg items-center">
                    <Link to={teamMember.linkedIn}>
                      <FaLinkedin className="text-blue-400 hover:text-blue-600"/>
                    </Link>
                    <Link to={teamMember.facebook}>
                      <FaFacebook className="text-blue-500 hover:text-blue-700"/>
                    </Link>
                    <Link to={teamMember.twitter}>
                      <FaTwitter className="text-blue-300 hover:text-blue-400"/>
                    </Link>
                    <Link to={teamMember.linkedIn}>
                      <FaInstagram className="text-red-500 hover:text-red-700"/>
                    </Link>
                  </div>
                  {/* contact btn */}
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded-full my-4">Contact {teamMember.name.split(' ')[0]}</button>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
