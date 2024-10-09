"use client"
import { FaCheckCircle, FaHandshake, FaChartLine, FaUsers } from "react-icons/fa";
import { Image } from "antd";
function WhyChooseUs() {
    return (
        <div className="relative bg-gray-50 text-black py-16 px-4 md:px-12 lg:px-24 bg-cover bg-center"
        >
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                {/* How It Works Section */}
                <div className="mb-12">
                    <p className="text-3xl font-semibold text-center mb-6 text-gray-800 md:text-4xl">
                        How It Works
                    </p>
                    <span className="block text-gray-700">
                        <ul className="space-y-6 list-none">
                            <li className="flex items-center ">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    <strong>Apply or Register:</strong> Submit a loan application or register for advisory or consultancy service.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    <strong>Assessment & Matchmaking:</strong> We assess your needs and match you with the right financial solution, advisory service & consultancy service.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    <strong>Engage & Grow:</strong> Access funds or expert advice to help grow your business.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    <strong>Ongoing Support:</strong> Continue benefiting from our flexible repayment terms, consultancy services, and follow-up support.
                                </span>
                            </li>
                        </ul>
                    </span>
                </div>

                {/* Why Choose PANGWA Section */}
                <div>
                    <p className="text-3xl font-semibold text-center mb-6 text-gray-800 md:text-4xl">
                        Why Choose PANGWA?
                    </p>
                    <span className="block text-gray-700 md:mb-10">
                        <ul className="space-y-6 list-none">
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    Expert financial and business advisory services tailored to your business needs.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    Access to a wide network of financial partners and industry experts.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    Flexible and customized financial solutions that support business growth.
                                </span>
                            </li>
                            <li className="flex items-center ">
                                <Image src="./image micro.png" preview={false} width={40} height={40} />
                                <span>
                                    Dedicated ongoing support and consultancy throughout your business journey.
                                </span>
                            </li>
                        </ul>
                    </span>
                    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-8 md:p-12">
                        {/* Image section */}
                        <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                            <Image
                                src="./headshot.jpeg" // Replace with actual image source
                                alt="Wesley Onyango"
                                className="rounded-sm shadow-lg w-auto max-w-[200px] md:max-w-[200px]" // Auto width and height, limit max width for responsiveness
                                preview={false}
                            />
                        </div>

                        {/* Quote section */}
                        <div className="sm:ml-5 md:w-1/2 text-left md:text-left">
                            <p className="text-lg italic text-gray-700 mb-4 text-left">
                                &#34;At PANGWA, we believe that empowering micro and small businesses with
                                accessible financial solutions is the cornerstone of sustainable
                                economic growth in East Africa. By bridging financial gaps, we are not
                                just supporting businesses; we are nurturing the future of our
                                communities.&#34;
                            </p>
                            <p className="font-bold text-gray-900">Wesley Onyango, Co-founder & CEO</p>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
