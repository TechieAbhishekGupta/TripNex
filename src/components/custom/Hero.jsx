import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Testimonials from "./Testimonials";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-57 gap-9 ">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#c08bf5]">TripNex : </span>
        <span className="text-[#f56551]">
          Your AI-Powered Travel Buddy.
        </span>{" "}
        <br></br> From dream to destination - your trip, your way.
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Plan less, Travel more — just tell us where, and our AI will handle the
        rest with personalized trips tailored to your vibe and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free.</Button>
      </Link>
      {/* <img src='/landing.png' className='-mt-30 width-[120px] height-[120px]'/> */}

      <div className="flex gap-6 text-gray-600 text-sm mt-4">
        <span>✈️ Smart Flights</span>
        <span>🏨 Hotel Picks</span>
        <span>📍 Itineraries</span>
        <span>💸 Budget Planner</span>
      </div>
      <input
        type="text"
        placeholder="Where do you want to go?"
        className="border px-4 py-2 rounded-lg shadow-sm mt-4 w-full max-w-md"
      />
      <Testimonials></Testimonials>
    </div>
  );
}

export default Hero;
