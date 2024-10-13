"use client";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Suspense } from 'react';
import { MDXEditorMethods } from "@mdxeditor/editor";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "antd"; // Ant Design button
const EditorComp = dynamic(() => import('@/components/editor/editor'), { ssr: false });

function Page() {
    const [mdxContent, setMdxContent] = useState<string>("");
    const [formData, setFormData] = useState({
        type: "article",
        title: "",
        imageUrl: "",
        videoUrl: ""
    });

    const editorRef = useRef<MDXEditorMethods | null>(null);

    const handleEditorChange = (content: string) => {
        setMdxContent(content);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    function videoLinkProcessor(videoUrl: string): string {
        const url = new URL(videoUrl);
        const videoId = url.pathname.split('/')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    async function submitContent() {
        try {
            const data = new FormData();
            data.append('type', formData.type);
            data.append('title', formData.title);
            data.append('content', mdxContent);
            data.append('imageUrl', formData.imageUrl);
            
            const videoUrl = formData.type === "video" ? videoLinkProcessor(formData.videoUrl) : "";
            data.append('videoUrl', videoUrl);

            const response = await axios.post('/api/blogs', data);
            if (response.status === 200) {
                toast.success('Blog created successfully');
            } else {
                toast.error('Failed to create blog');
            }
        } catch (error) {
            toast.error('Failed to create blog');
        }
    }

    return (
        <div className="text-black max-w-4xl mx-auto pt-10 min-h-screen px-4 md:px-20 lg:px-40 bg-gray-100">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Create a New Blog Post</h1>

            <div className="space-y-6">
                {/* Title Input */}
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                />

                {/* Type Selector */}
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                >
                    <option value="article">Article</option>
                    <option value="video">Video</option>
                </select>

                {/* Content Editor or Video URL Input */}
                {formData.type === "article" ? (
                    <Suspense fallback={<div className="text-black">Loading editor...</div>}>
                        <EditorComp
                            markdown={mdxContent}
                            handleEditorChange={handleEditorChange}
                            editorRef={editorRef}
                        />
                    </Suspense>
                ) : (
                    <input
                        type="text"
                        name="videoUrl"
                        placeholder="Youtube Video Link"
                        value={formData.videoUrl}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                    />
                )}

                {/* Image URL Input */}
                {formData.type === "article" && (<input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL (Optional)"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                />)}

                {/* Submit Button */}
                <Button
                    onClick={submitContent}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all"
                    type="primary"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default Page;
