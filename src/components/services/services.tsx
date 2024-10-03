"use client";
import { Image } from "antd";

function Services() {
  return (
    <div className="text-black px-4 md:px-16 lg:px-24 py-12">
      <p className="font-bold text-2xl md:text-4xl mb-12 text-center text-gray-800">
        Our Services
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./growth.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Trade Finance Solutions"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Trade Finance Solutions
            </p>
            <span className="text-gray-600">
              PANGWA assists businesses in structuring and funding trade finance transactions.
            </span>
          </div>
        </div>

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./loans.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Business Loans"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Business Loans
            </p>
            <span className="text-gray-600">
              PANGWA offers tailored loans to meet the working capital and expansion needs of Small Businesses and Micro-traders.
            </span>
          </div>
        </div>

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./consultancy.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Business Advisory"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Business Advisory
            </p>
            <span className="text-gray-600">
              Our team of experienced consultants provides advice on business model & strategy, financial management, credit and risk management, capital raising strategies, and growth planning.
            </span>
          </div>
        </div>

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./bank-investent.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Funding Fairs"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Funding Fairs
            </p>
            <span className="text-gray-600">
              PANGWA works with various financial institutions to organize funding fairs, providing opportunities for businesses to secure funding.
            </span>
          </div>
        </div>

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./business-partnerships.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Broking Services"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Broking Services
            </p>
            <span className="text-gray-600">
              We facilitate partnerships between local and international financial service providers and businesses, offering services like deal origination and due diligence.
            </span>
          </div>
        </div>

        {/* Service Item */}
        <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
          <Image preview={false}
            src="./business-workshop.jpg"
            width="100%"
            className="w-full md:w-auto rounded-md object-cover"
            alt="Associated Services"
          />
          <div className="p-4">
            <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
              Associated Services
            </p>
            <span className="text-gray-600">
              PANGWA offers workshops, seminars, and networking events that help businesses improve operations and gain knowledge.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
