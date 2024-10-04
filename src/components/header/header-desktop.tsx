import { Image } from "antd";
import Link from 'next/link';  // Import Next.js Link component
import { useState, useEffect } from "react";

function HeaderDesktop() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out  ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} text-emerald-800`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                {/* Logo */}
                <div className="logo ml-4">
                    <Image
                    preview={false}
                        width={60}
                        src="./logo-main-bg.png"
                        alt="Logo"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                {/* Navigation */}
                <nav className="mr-4">
                    <ul className="flex space-x-10 font-semibold text-lg">
                        <li>
                            <Link href="/#home" className="hover:text-blue-600 transition-colors duration-300" >Home</Link>
                        </li>
                        <li>
                            <Link href="/#about-us" className="hover:text-blue-600 transition-colors duration-300">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-blue-600 transition-colors duration-300">Our Services</Link>
                        </li>
                        <li>
                            <Link href="/blogs">
                                <p className="hover:text-blue-600 transition-colors duration-300">Blog</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#testimonials" className="hover:text-blue-600 transition-colors duration-300">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="hover:text-blue-600 transition-colors duration-300">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderDesktop;
