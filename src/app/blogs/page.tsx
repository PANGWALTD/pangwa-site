"use client";
import { Image, Modal } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import rehypeRaw from 'rehype-raw';

interface Blog {
    type: string;
    title: string;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
}

function Blog() {
    const [blogData, setBlogData] = useState<Blog[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    useEffect(() => {
        async function getblogs() {
            const response = await axios.get("/api/blogs");
            setBlogData(response.data.data);
        }
        getblogs();
    }, []);

    const openModal = (blog: Blog) => {
        setSelectedBlog(blog);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedBlog(null);
    };

    return (
        <div className="container mx-auto pt-28 pb-16 px-4 md:px-8 text-black bg-slate-100">
            <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        onClick={() => openModal(item)}
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
                                <div className="text-gray-700 leading-relaxed">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {item.content?.substring(0, 100) + "..."}
                                    </ReactMarkdown>
                                </div>
                                <button
                                    className="mt-4 text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
                                >
                                    Read More
                                </button>
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

            {/* Blog Modal */}
            {selectedBlog && (
                <Modal
                    title={selectedBlog.title}
                    visible={isModalVisible}
                    onCancel={closeModal}
                    footer={null}
                    width={800}
                    bodyStyle={{ padding: "20px", maxHeight: "80vh", overflowY: "auto" }}
                >
                    <div className="modal-content">
                        {selectedBlog.imageUrl && (
                            <Image
                                preview={false}
                                src={selectedBlog.imageUrl}
                                alt={selectedBlog.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                        )}
                        <div className="text-gray-800 leading-relaxed">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                {selectedBlog.content || ""}
                            </ReactMarkdown>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Blog;
