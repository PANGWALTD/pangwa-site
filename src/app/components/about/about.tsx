"use client"
import { Image } from "antd";
function AboutUs() {
    return (<div className="text-black">
        <p className="font-bold text-center text-2xl">About Us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg text-black">
            {/* Mission */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./mission.png" width={100} alt="" />
                <p className="font-semibold text-lg mt-4">Our Mission</p>
                <span className="mt-2 text-gray-600">
                    To empower businesses by providing innovative financial solutions, expert advisory, and networking opportunities for sustainable growth.
                </span>
            </div>

            {/* Vision */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./vision.png" width={100} alt=""  />
                <p className="font-semibold text-lg mt-4">Our Vision</p>
                <span className="mt-2 text-gray-600">
                    To be the leading financial partner for businesses across East Africa, creating a thriving ecosystem to access capital, expert guidance, and market opportunities.
                </span>
            </div>

            {/* Story */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./story.png" width={100} alt="" />
                <p className="font-semibold text-lg mt-4">Our Story</p>
                <span className="mt-2 text-gray-600">
                    PANGWA was founded with a vision to address the financial gaps faced by micro and small businesses in East Africa. We offer a suite of services including trade finance solutions, credit solutions, business consultancy, and access to networks, ensuring businesses get the support they need to scale and thrive.
                </span>
            </div>

            {/* Values */}
            <div className="shadow-lg p-6 flex flex-col items-center text-center bg-white rounded-lg transition-transform transform hover:scale-105">
                <Image preview={false} src="./values.png" width={100} alt="" />
                <p className="font-semibold text-lg mt-4">Our Values</p>
                <ul className="mt-2 text-gray-600">
                    <li>Innovation</li>
                    <li>Transparency</li>
                    <li>Customer-Centricity</li>
                    <li>Collaboration</li>
                    <li>Impact-Driven</li>
                </ul>
            </div>
        </div>

    </div>);
}

export default AboutUs;