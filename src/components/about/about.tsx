"use client"
import { Image } from "antd";
function AboutUs() {
    return (<div className="text-black">
        <p className="font-bold text-center text-4xl">About Us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg text-black">
            {/* Mission */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./mission.png" width={100} alt="" />
                <p className="font-semibold text-lg mt-4">Our Mission</p>
                <span className="mt-2 text-gray-600">
                    To empower businesses by providing innovative financial solutions, expert advisory.
                </span>
            </div>



            {/* Story */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./story1.png" width={100} alt="" />
                <p className="font-semibold text-lg mt-4">Our Story</p>
                <span className="mt-2 text-gray-600">
                    PANGWA was founded with a vision to address the financial gaps faced by micro and small businesses in East Africa.
                </span>
            </div>

            {/* Values */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                <Image preview={false} src="./values2.png" width={100} alt="" />
                <p className="font-bold text-xl mt-4 text-gray-800">Our Values</p>
                <ol className="mt-4 text-gray-600 space-y-2 text-lg">
                    <li className="hover:text-blue-500 transition-colors">Impact-Driven</li>

                    <li className="hover:text-blue-500 transition-colors">Customer-Centricity</li>
                    <li className="hover:text-blue-500 transition-colors">Collaboration</li>
                </ol>
            </div>

        </div>

    </div>);
}

export default AboutUs;