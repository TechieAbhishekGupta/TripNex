import React from "react";

function Testimonials() {
  return (
    <section id="customers_sec" className="my-10 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">What Users Say About TripNex</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover how TripNex’s AI-powered travel planning has transformed
          trips for our users.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-1">Anjali Patel</h4>
          <p className="text-sm text-gray-500 mb-3">
            Frequent Traveler & Tech Enthusiast
          </p>
          <p className="italic text-gray-700">
            "TripNex made my trip planning effortless! The AI-generated
            itineraries matched my style perfectly, saving me hours. Highly
            recommend for anyone wanting a personalized travel experience."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-1">Rahul Singh</h4>
          <p className="text-sm text-gray-500 mb-3">
            Adventure Seeker & Budget Traveler
          </p>
          <p className="italic text-gray-700">
            "I loved how TripNex found affordable flights and hotels that fit my
            budget. The AI budget planner helped me keep expenses in check while
            exploring new places!"
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-1">Sneha Kapoor</h4>
          <p className="text-sm text-gray-500 mb-3">
            Nature Lover & Solo Traveler
          </p>
          <p className="italic text-gray-700">
            "Thanks to TripNex’s itinerary suggestions, I discovered hidden gems
            off the beaten path. The AI truly thinks like a local guide!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
