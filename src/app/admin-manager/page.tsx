"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";

// Interface for the message
interface Message {
    id: string;
    businessName: string;
    email: string;
    fullName: string;
    inquiryType: string;
    message: string;
    status: string;
    timestamp: Timestamp;
    fileUrl?: string;
}

// Interface for the timestamp
interface Timestamp {
    seconds: number;
    nanoseconds: number;
}

// Props for Pagination component
interface PaginationProps {
    messagesPerPage: number;
    totalMessages: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

// Props for Card component
interface CardProps {
    message: Message;
    onHandle: () => void;
}

function Page() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const messagesPerPage = 5;  // Number of messages to display per page

    // Fetch messages from /api/messages when the component mounts
    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await axios.get("/api/messages");
                if (response.status === 200) {
                    setMessages(response.data.data);  // Directly set response data
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
                setLoading(false);
            }
        }

        fetchMessages();
    }, []);

    // Mark a message as handled
    const handleMarkAsHandled = async (id: string) => {
        try {
            const response = await axios.post(`/api/edit`, { id });
            if (response.status === 200) {
                setMessages(messages.map(msg => msg.id === id ? { ...msg, status: 'DONE' } : msg));
                toast.success("Message marked as handled");
            }
        } catch (error) {
            console.error("Error marking message as handled:", error);
            toast.error("Error marking message as handled");
        }
    };

    // Separate the messages into "PENDING" and "DONE"
    const pendingMessages = messages.filter(msg => msg.status === 'PENDING');
    const doneMessages = messages.filter(msg => msg.status === 'DONE');

    // Pagination Logic for PENDING messages
    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentPendingMessages = pendingMessages.slice(indexOfFirstMessage, indexOfLastMessage);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (loading) return <p>Loading messages...</p>;

    return (
        <div className="p-6 text-black">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Manager Page</h1>
            <Link href="/admin-manager/create_blog" className="bg-blue-950 text-white p-2 rounded-sm ml-[50%]">
            Create a blog
            </Link>

            {/* Display PENDING Messages */}
            <h2 className="text-xl font-semibold mb-4">Pending Messages</h2>
            <div className="space-y-6">
                {currentPendingMessages.length > 0 ? (
                    currentPendingMessages.map((msg) => (
                        <Card
                            key={msg.id}
                            message={msg}
                            onHandle={() => handleMarkAsHandled(msg.id)}
                        />
                    ))
                ) : (
                    <p>No pending messages available.</p>
                )}
            </div>

            {/* Pagination Controls for PENDING messages */}
            <Pagination
                messagesPerPage={messagesPerPage}
                totalMessages={pendingMessages.length}
                paginate={paginate}
                currentPage={currentPage}
            />

            {/* Display DONE Messages */}
            <h2 className="text-xl font-semibold mt-10 mb-4">Handled Messages</h2>
            <div className="space-y-6">
                {doneMessages.length > 0 ? (
                    doneMessages.map((msg) => (
                        <Card
                            key={msg.id}
                            message={msg}
                            onHandle={() => { }}
                        />
                    ))
                ) : (
                    <p>No handled messages available.</p>
                )}
            </div>
        </div>
    );
}

// Pagination component with types
const Pagination: React.FC<PaginationProps> = ({ messagesPerPage, totalMessages, paginate, currentPage }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalMessages / messagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-6">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 mx-1 rounded-md ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

// Card component with types
const Card: React.FC<CardProps> = ({ message, onHandle }) => {
    // Helper function to convert timestamp to readable date
    const convertTimestampToDate = (timestamp: Timestamp): string => {
        if (timestamp.seconds) {
            const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);
            return new Date(milliseconds).toLocaleString();
        }
        return 'Invalid date';
    };

    // Helper function to download the PDF file
    const handleDownload = (fileUrl: string | undefined, fileName: string) => {
        if (!fileUrl) return;
    
        // Check if the fileUrl contains a base64 prefix and handle it accordingly
        const base64Prefix = "data:application/pdf;base64,";
        let base64Data: string;
    
        if (fileUrl.startsWith(base64Prefix)) {
            base64Data = fileUrl.split(',')[1]; // Extract base64 string after the comma
        } else {
            base64Data = fileUrl; // If no prefix, treat it as raw base64 string
        }
    
        try {
            // Decode base64 string
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
    
            // Create a blob and trigger download
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const link = document.createElement('a');
            const blobUrl = URL.createObjectURL(blob);
            link.href = blobUrl;
            link.setAttribute('download', fileName); // Set the download file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
            URL.revokeObjectURL(blobUrl); // Revoke the object URL
        } catch (error) {
            console.error("Error decoding base64 string:", error);
            alert("Failed to download the PDF file.");
        }
    };
    

    return (
        <div className={`shadow-lg p-4 rounded-lg ${message.status === 'DONE' ? 'bg-green-100' : 'bg-white'} transition-transform transform`}>
            <p className="font-semibold text-lg mb-2">From: {message.fullName}</p>
            <p className="text-gray-600 mb-4">Business: {message.businessName}</p>
            <p className="text-gray-600 mb-4">Email: {message.email}</p>
            <p className="text-gray-600 mb-4">Inquiry Type: {message.inquiryType}</p>
            <p className="text-gray-600 mb-4">{message.message}</p>
            <p className="text-gray-500 mb-4">Date: {convertTimestampToDate(message.timestamp)}</p>

            {message.fileUrl && (
                <button
                    className="px-4 py-2 rounded-md bg-blue-500 text-white mb-4"
                    onClick={() => handleDownload(message.fileUrl, `file-${message.id}.pdf`)}
                >
                    Download PDF
                </button>
            )}

            <button
                className={`px-4 mx-2 py-2 rounded-md ${message.status === 'DONE' ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 text-white'}`}
                onClick={onHandle}
                disabled={message.status === 'DONE'}
            >
                {message.status === 'DONE' ? 'Handled' : 'Mark as Handled'}
            </button>
        </div>
    );
};


export default Page;
