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
                    <div className="shadow-lg p-8 flex flex-col items-center text-center bg-white rounded-lg transition-transform scale hover:scale-100 hover:shadow-xl hover:bg-gray-50 max-w-[600px]">
                        <Image 
                            src="/lady.png" 
                            preview={false} 
                            className="h-36 rounded-full object-cover" 
                            alt="Queenie Taylor Wong"
                            width={200}
                        />
                        <p className="font-bold text-xl mt-6 text-gray-800">Queenie Taylor Wong</p>
                        <span className="mt-2 text-sm text-gray-500">Co-founder and Board Chair</span>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                            {showFullDescription.queenie ? (
                                <>
                                    Queenie is an accomplished professional with a decade of experience in international event organisation
                                    within the trade and export finance industry. With a passion for connecting individuals and businesses
                                    in the global market, Queenie has built a wide network of corporates, financial institutions, legal experts,
                                    insurance providers and fintech companies. Throughout Queenie’s career, she has successfully organised and
                                    executed numerous international events across different regions especially in MENA, Africa, Europe, and Asia.
                                    Driven by a desire to foster collaboration and facilitate growth, Queenie has cultivated an extensive network
                                    of industry professionals, forging strong relationships with key stakeholders across various sectors. These
                                    connections have been instrumental in promoting exchanges of ideas, knowledge sharing and forging strategic
                                    partnerships for growth. Recognizing the scarcity of trade finance providers for MSMEs and SMEs, especially
                                    in Africa, Queenie is now also dedicated to assisting micro businesses in securing funding for their local
                                    and global growth by leveraging her network.
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
                    <div className="shadow-lg p-8 flex flex-col items-center text-center bg-white rounded-lg transition-transform scale hover:scale-100 hover:shadow-2xl hover:bg-gray-50 max-w-[600px]">
                        <Image 
                            src="/gentleman1.jpeg" 
                            preview={false} 
                            className="w-36 h-36 rounded-full object-cover"
                            alt="Wesley Onyango Ogada"
                            width={200} 
                        />
                        <p className="font-bold text-xl mt-6 text-gray-800">Wesley Onyango Ogada</p>
                        <span className="mt-2 text-sm text-gray-500">CEO & Co-Founder</span>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                            {showFullDescription.wesley ? (
                                <>
                                      Wesley Onyango is a seasoned financial professional with over 12 years of experience in corporate financing
                                    advisory, investment banking, mergers and acquisitions (M&A) consulting, and corporate relationship management.
                                    He has a proven track record of structuring and executing financing deals, advising on capital raising,
                                    acquisitions, and divestitures, and facilitating cross-border M&A transactions. Wesley excels in financial
                                    analysis, valuation, and capital markets, delivering strategic financial solutions to drive business growth.
                                    As the CEO of PANGWA, he brings his expertise in navigating complex transactions and building strong client
                                    relationships to the credit lending space, focusing on micro-level traders.
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
