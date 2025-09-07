import React from "react";
import errorIcon from "../assets/rocket-icon.png";
import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-4">
      <img src={errorIcon} alt="rocket icon" />
      <h3 className="text-3xl font-bold text-gray-700 mt-4">Page Not Found</h3>
      <p className="text-gray-600 my-2 md:w-2/5 w-full mx-auto">
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
        scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus
        iaculis.
      </p>
      <Link
        to="/"
        className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition mt-2"
      >
        Go To Home Page
      </Link>
    </div>
  );
}
