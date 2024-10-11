"use client";
import { Image } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
    type: string;
    title: string;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
}

function Blog() {
    const [blogData, setBlogData] = useState<Blog[]>([]);
    const [expandedBlogs, setExpandedBlogs] = useState<number[]>([]);

    useEffect(() => {
        async function getblogs() {
            const response = await axios.get("/api/blogs");
            setBlogData(response.data.data);
        }
        getblogs();
    }, []);

    const toggleReadMore = (index: number) => {
        if (expandedBlogs.includes(index)) {
            setExpandedBlogs(expandedBlogs.filter((i) => i !== index));
        } else {
            setExpandedBlogs([...expandedBlogs, index]);
        }
    };

    return (
        <div className="container mx-auto pt-28 pb-16 px-4 md:px-8 text-black bg-slate-300">
            <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Article Type */}
                        {item.type === "article" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h2>
                                {item.imageUrl && (
                                    <Image
                                        preview={false}
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                )}
                                <p className="text-gray-700 leading-relaxed">
                                    {expandedBlogs.includes(index)
                                        ? item.content // Full content
                                        : item.content?.substring(0, 100) + "..."} {/* Shortened content */}
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 mt-4 block"
                                    onClick={() => toggleReadMore(index)}
                                >
                                    {expandedBlogs.includes(index) ? "Read less" : "Read more"}
                                </a>
                            </>
                        )}

                        {/* Video Type */}
                        {item.type === "video" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h2>
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
