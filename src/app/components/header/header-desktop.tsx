"use client"
import { Image } from "antd";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

function HeaderDesktop() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} text-black`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                {/* Logo */}
                <div className="logo ml-4">
                    <Image preview={false}
                        width={75}
                        src="./logo-main-bg.png"
                        alt="Logo"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                {/* Navigation */}
                <nav className="mr-4">
                    <ul className="flex space-x-10 font-semibold text-lg">
                        <li><a href="#home" className="hover:text-blue-600 transition-colors duration-300">Home</a></li>
                        <li><a href="#about-us" className="hover:text-blue-600 transition-colors duration-300">About Us</a></li>
                        <li><a href="#services" className="hover:text-blue-600 transition-colors duration-300">Our Services</a></li>
                        <li><a href="#testimonials" className="hover:text-blue-600 transition-colors duration-300">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </nav>
                {/* Menu Icon for Mobile View */}
                <div className="md:hidden flex items-center">
                    <IoMdMenu className="text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                </div>
            </div>
        </div>
    );
}

export default HeaderDesktop;
