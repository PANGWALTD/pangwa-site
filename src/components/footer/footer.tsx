"use client";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { CALENDLY_URL, services } from "@/data/site";

const GENERAL = "General Enquiry";

function Footer() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        businessName: "",
        inquiryType: services[0].title,
        message: "",
    });
    const [sending, setSending] = useState(false);

    // Service cards dispatch "select-service" so the form preselects that service
    useEffect(() => {
        const onSelect = (e: Event) => {
            const match = services.find((s) => s.slug === (e as CustomEvent<string>).detail);
            if (match) setFormData((f) => ({ ...f, inquiryType: match.title }));
        };
        window.addEventListener("select-service", onSelect);
        return () => window.removeEventListener("select-service", onSelect);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([k, v]) => data.append(k, v));
            await axios.post("/api/messages", data);
            toast.success("Form submitted successfully. We will get back to you shortly.");
            setFormData({ ...formData, fullName: "", email: "", businessName: "", message: "" });
        } catch (error) {
            console.error("Error submitting the form:", error);
            toast.error("Failed to submit the form. Please try again later.");
        } finally {
            setSending(false);
        }
    };

    const field =
        "w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-amber";

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-3">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Contact Us</h3>
                    <p className="mb-6 text-gray-400">
                        For further details about our services, availability, and inquiries,
                        feel free to contact us through the information below.
                    </p>
                    <div className="flex items-center mb-4">
                        <FaPhone className="text-white mr-3" />
                        <p>+254 104 686041</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-white mr-3" />
                        <p>info@pangwacapital.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://www.facebook.com/people/Pangwa-Capital-Limited/61566604456012/" target="_blank" rel="noopener noreferrer">
                            <Image src="/Facebook_Icon.jpeg" alt="Facebook" width={40} height={40} className="rounded-md" />
                        </Link>
                        <Link href="https://x.com/PangwaCapital" target="_blank" rel="noopener noreferrer">
                            <Image src="/X_Icon.jpeg" alt="X" width={40} height={40} className="rounded-md" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/pangwa-capital-limited/" target="_blank" rel="noopener noreferrer">
                            <Image src="/LinkedIn_Icon.png" alt="LinkedIn" width={40} height={40} className="rounded-md" />
                        </Link>
                    </div>

                    {/* Calendly CTA */}
                    <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-ink p-6 ring-1 ring-brand-amber/40">
                        <h4 className="text-xl font-bold text-white">Talk to our team</h4>
                        <p className="mt-1 text-gray-300">Book a free 30-minute consultation.</p>
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block rounded-full bg-brand-amber px-6 py-3 font-semibold text-brand-ink transition hover:brightness-110"
                        >
                            Schedule a call →
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        <input type="text" name="fullName" placeholder="Full Name" aria-label="Full Name" value={formData.fullName} onChange={handleInputChange} required className={field} />
                        <input type="email" name="email" placeholder="Email Address" aria-label="Email Address" value={formData.email} onChange={handleInputChange} required className={field} />
                        <input type="text" name="businessName" placeholder="Business Name" aria-label="Business Name" value={formData.businessName} onChange={handleInputChange} className={field} />
                        <select name="inquiryType" aria-label="Service" value={formData.inquiryType} onChange={handleInputChange} className={field}>
                            {services.map((s) => (
                                <option key={s.slug} value={s.title}>{s.title}</option>
                            ))}
                            <option value={GENERAL}>{GENERAL}</option>
                        </select>
                        <textarea name="message" placeholder="Your Message" aria-label="Your Message" value={formData.message} onChange={handleInputChange} required className={`${field} h-32`}></textarea>
                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-brand-amber hover:brightness-110 disabled:opacity-60 text-brand-ink font-semibold p-3 rounded-lg transition"
                        >
                            {sending ? "Sending…" : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 flex sm:flex-row flex-col justify-between items-center py-4">
                <p className="text-center text-gray-500 pb-4">
                    Copyright © {new Date().getFullYear()} Pangwa Capital. All Rights Reserved.
                </p>
                <Link href="https://wa.me/254104686041?text=Hi%20Pangwa%20Capital%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services!%20Could%20you%20please%20provide%20more%20information?" target="_blank" rel="noopener noreferrer">
                    <div className="flex space-x-2 md:w-56 bg-green-500 text-white rounded-lg px-4 py-2 justify-center items-center hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer">
                        <FaWhatsapp className="text-xl" />
                        <p className="text-sm">Chat on Whatsapp</p>
                    </div>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
