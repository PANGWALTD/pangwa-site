"use client"
import { useState } from "react";

const blogData = [
    {
        type: "article",
        title: "How to Create Responsive UIs",
        content: `In this article, we will learn how to create responsive user interfaces using modern CSS frameworks like Tailwind CSS. 
        Responsive design ensures that web applications look good on all devices, regardless of screen size.`,
        imageUrl: "./bank-investent.jpg",
    },
    {
        type: "video",
        title: "Understanding CSS Grid",
        videoUrl: "https://www.youtube.com/embed/EFafSYg-PkI"
    },
    {
        type: "article",
        title: "Modern JavaScript Features",
        content: `JavaScript has evolved significantly in recent years, with the introduction of ES6+ features such as let, const, arrow functions, and more. 
        In this article, we will explore some of these features and how they can improve your code.`,
        imageUrl: "./consultancy.jpg",
    },
    {
        type: "video",
        title: "Mastering Flexbox",
        videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc"
    },
];

function Blog() {
    return (
        <div className="container mx-auto pt-28 text-black ">
            <h1 className="text-3xl font-bold mb-6 text-center ">Our Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-20">
                {blogData.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                        {/* Article Type */}
                        {item.type === "article" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                {item.imageUrl && (
                                    <img
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