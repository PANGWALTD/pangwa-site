"use client";
import { Image } from "antd";

function Services() {
    return (
        <div className="text-black px-4 md:px-16 lg:px-24 py-12">
            <p className="font-bold text-2xl md:text-4xl mb-12 text-center text-gray-800">
                Our Services
            </p>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-center">
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
                        PANGWA offers tailored loans to meet the working capital and expansion needs of Micro-traders and Small Businesses.

                        </span>
                    </div>
                </div>
                {/* Service Item */}
                <div className=" md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
                    <Image preview={false}
                        src="./port2.jpeg"
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
                        src="./consultancy.jpg"
                        width="100%"
                        className="w-full md:w-auto rounded-md object-cover"
                        alt="Business Advisory"
                    />
                    <div className="p-4">
                        <p className="font-bold text-lg md:text-xl mb-2 text-gray-900">
                            Business Advisory & Consultancy
                        </p>
                        <span className="text-gray-600">
                            Our team of experienced consultants provides advice on business model & strategy, financial management, credit and risk management, capital raising strategies, and growth planning.
                        </span>
                    </div>
                </div>






            </div>
        </div>
    );
}

export default Services;
