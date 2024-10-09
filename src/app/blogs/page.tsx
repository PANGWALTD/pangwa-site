"use client"
import { Image } from "antd";
import { useState } from "react";
interface Blog{
    type: string;
    title: string;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
}


function Blog() {
    const [blogData, setBlogData] = useState<Blog[]>([]);
    return (
        <div className="container mx-auto pt-28 text-black bg-slate-300">
            <h1 className="text-3xl font-bold mb-6 text-center ">Our Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20">
                {blogData.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                        {/* Article Type */}
                        {item.type === "article" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                {item.imageUrl && (
                                    <Image
                                    preview={false}
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                )}
                                <p className="text-gray-700 text-justify">{item.content}</p>
                            </>
                        )}
                        {/* Video Type */}
                        {item.type === "video" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                <div className="relative overflow-hidden rounded-lg">
                                    <iframe
                                        className="w-full h-64 md:h-72 rounded-md"
                                        src={item.videoUrl}
                                        title={item.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
