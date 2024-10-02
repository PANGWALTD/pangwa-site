"use client"
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import { useState } from "react";
import Link from "next/link";
function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    inquiryType: "Loan",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send the formData somewhere)
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 text-gray-300 py-12 px-3">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Contact Us</h3>
          <p className="mb-6 text-gray-400">
            For further details about our services, availability, and inquiries,
            feel free to contact us through the information below.
          </p>
          <div className="flex items-center mb-4">
            <FaPhone className="text-white mr-3" />
            <p>+254 123 456 789</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-white mr-3" />
            <p>pangwacapitalemail@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
           <Link href="">
           <FaFacebookF className="text-white cursor-pointer hover:text-gray-400" />
           </Link>
           <Link href="">
           <FaTwitter className="text-white cursor-pointer hover:text-gray-400" />
           </Link>
           <Link href="">
           <FaLinkedin className="text-white cursor-pointer hover:text-gray-400" />
           </Link>
            {/* Add other social icons if needed */}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Loan">Loan</option>
              <option value="Consultancy">Consultancy</option>
              <option value="Matchmaking">Matchmaking</option>
              <option value="Event">Event</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12">
        <p className="text-center py-4 text-gray-500">
          Copyright © 2024 SME Support Centre. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
