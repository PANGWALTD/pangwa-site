"use client"
import { Image } from "antd";
function AboutUs() {
    return (<div className="text-black">
        <p className="font-bold text-center text-4xl">About Us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg text-black">
            {/* Mission */}
            <div className="shadow-md p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image preview={false} src="./mission.png" width={90} alt=""  className="pt-2"/>
                <p className="font-semibold text-lg mt-7 text-gray-800">Our Mission</p>
                <span className="mt-2 text-gray-600 text-base">
                    To empower businesses by providing innovative financial solutions, expert advisory.
                </span>
            </div>

            {/* Story */}
            <div className="shadow-md p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image preview={false} src="./story1.png" width={90} alt="" />
                <p className="font-semibold text-lg mt-4 text-gray-800">Our Story</p>
                <span className="mt-2 text-gray-600 text-base">
                    PANGWA was founded with a vision to address the financial gaps faced by micro and small businesses in East Africa.
                </span>
            </div>

            {/* Values */}
            <div className="shadow-md p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <Image preview={false} src="./values2.png" width={80}alt="" />
                <p className="font-semibold text-lg mt-6 text-gray-800">Our Values</p>
                <ol className="mt-2 text-gray-600 text-base">
                    <li className="">Impact-Driven</li>
                    <li className="">Customer-Centricity</li>
                    <li className="">Collaboration</li>
                </ol>
            </div>
        </div>


    </div>);
}

export default AboutUs;