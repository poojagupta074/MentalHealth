import React from 'react';

export default function MentalHealthLanding() {
  return (
    <div className="font-sans text-gray-800 bg-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-r from-blue-100 to-blue-300">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome to Ekta DB</h1>
        <p className="text-xl text-blue-700 mb-6 max-w-xl">Your trusted partner for online mental health counseling and emotional well-being.</p>
        <a href="#book" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">Ekta DB is committed to supporting mental wellness by connecting individuals with certified mental health professionals in a safe and confidential space.</p>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-blue-100">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["One-on-One Therapy", "Group Sessions", "Mindfulness Workshops"].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700">{service}</h3>
              <p className="text-gray-600 mt-2">Get personalized care with experienced professionals in a confidential environment.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapist Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-6">Meet Our Therapists</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Dr. Meera Sharma", "Ankit Joshi", "Riya Kapoor"].map((name, index) => (
            <div key={index} className="w-60 bg-blue-50 p-4 rounded-lg shadow">
              <div className="h-32 bg-blue-200 rounded mb-4"></div>
              <h3 className="font-semibold text-blue-800">{name}</h3>
              <p className="text-sm text-gray-600">Clinical Psychologist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10 bg-blue-100 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">"Ekta DB helped me through a very difficult time with compassion and professionalism. Highly recommended!"</blockquote>
      </section>

      {/* Booking Section */}
      <section id="book" className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-6">Book a Session</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Message / Concern" rows="4" className="p-3 border border-gray-300 rounded-lg"></textarea>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-blue-800 text-white">
        <p>Contact us: contact@ektadb.org | +91 98765 43210</p>
        <p className="mt-2">&copy; 2025 Ekta DB. All rights reserved.</p>
      </footer>
    </div>
  );
}
