"use client";
import { useState } from 'react';
import { Image } from 'antd';

function Team() {
    // State to toggle between short and full descriptions for each member
    const [showFullDescription, setShowFullDescription] = useState({
        queenie: false,
        wesley: false,
    });

    // Function to handle the "Read more" click
    const toggleDescription = (member: keyof typeof showFullDescription) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [member]: !prevState[member],
        }));
    };

    return (
        <div className="py-12">
            <div className="container mx-auto">
                <p className="font-extrabold text-center text-4xl mb-10 text-gray-800">Our Team</p>
                <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 justify-center items-center">
                    {/* Team Member 1 */}
                    <div className="shadow-lg p-8 flex flex-col items-center text-center bg-white rounded-lg transition-transform scale hover:scale-105 hover:shadow-2xl hover:bg-gray-50 max-w-[600px]">
                        <Image 
                            src="/lady.png" 
                            preview={false} 
                            className="w-36 h-36 rounded-full object-cover" 
                            alt="Queenie Taylor Wong"
                        />
                        <p className="font-bold text-xl mt-6 text-gray-800">Queenie Taylor Wong</p>
                        <span className="mt-2 text-sm text-gray-500">Co-founder and Board Chair</span>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                            {showFullDescription.queenie ? (
                                <>
                                    Queenie is an accomplished professional with a decade of experience in international event organisation
                                    within the trade and export finance industry... {/* Full description */}
                                    <span className="text-indigo-600 cursor-pointer ml-2" onClick={() => toggleDescription('queenie')}> Show less</span>
                                </>
                            ) : (
                                <>
                                    Queenie is an accomplished professional with a decade of experience in international event organisation...
                                    <span className="text-indigo-600 cursor-pointer ml-2" onClick={() => toggleDescription('queenie')}> Read more</span>
                                </>
                            )}
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="shadow-lg p-8 flex flex-col items-center text-center bg-white rounded-lg transition-transform scale hover:scale-105 hover:shadow-2xl hover:bg-gray-50 max-w-[600px]">
                        <Image 
                            src="/gentleman1.jpeg" 
                            preview={false} 
                            className="w-36 h-36 rounded-full object-cover"
                            alt="Wesley Onyango Ogada" 
                        />
                        <p className="font-bold text-xl mt-6 text-gray-800">Wesley Onyango Ogada</p>
                        <span className="mt-2 text-sm text-gray-500">CEO & Co-Founder</span>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                            {showFullDescription.wesley ? (
                                <>
                                    Wesley Onyango is a seasoned financial professional with over 12 years of experience... {/* Full description */}
                                    <span className="text-indigo-600 cursor-pointer ml-2" onClick={() => toggleDescription('wesley')}> Show less</span>
                                </>
                            ) : (
                                <>
                                    Wesley Onyango is a seasoned financial professional with over 12 years of experience...
                                    <span className="text-indigo-600 cursor-pointer ml-2" onClick={() => toggleDescription('wesley')}> Read more</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
