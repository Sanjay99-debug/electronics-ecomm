import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Sanjay</h2>
          <p className="mb-2">📍 Address: Ludhiana, Punjab, India</p>
          <p className="mb-2">📞 Phone: +91 8146774370</p>
          <p className="mb-2">✉️ Email: support@electroshop.com</p>
          <p className="mt-4 text-gray-600">
            We’re always happy to help! Reach out to us with any questions or
            feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
