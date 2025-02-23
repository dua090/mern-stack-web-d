import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-200 p-4 text-gray-900 flex justify-between items-center shadow-lg fixed w-full top-0 z-10">
        <h1 className="text-3xl font-extrabold tracking-wide">Dua's Tech Doctorz</h1>
        <div>
          <button className="bg-white text-gray-600 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 mr-2">Login</button>
          <button className="bg-white text-gray-600 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-32 bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold drop-shadow-md">Affordable Repair Services & Tutorials</h2>
        <p className="mt-4 text-lg max-w-2xl">Learn DIY repairs or hire skilled professionals for electronics, plumbing, and vehicle repairs – all at affordable prices.</p>
        <button className="mt-6 bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-300 transition duration-300">Get Started</button>
      </header>

      {/* Services Section */}
      <section className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h3 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold text-gray-600">Electronics Repair</h4>
            <p className="text-gray-600 mt-2">Get expert help for your gadgets.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold text-gray-600">Plumbing Solutions</h4>
            <p className="text-gray-600 mt-2">Fix leaks and plumbing issues easily.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold text-gray-600">Vehicle Repairs</h4>
            <p className="text-gray-600 mt-2">Car & bike maintenance made simple.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h3 className="text-4xl font-bold mb-6 text-gray-800">Get Started Today!</h3>
        <p className="text-lg max-w-2xl">Take the first step towards affordable repair services and tutorials.</p>
        <button className="mt-6 bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-300 transition duration-300">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
