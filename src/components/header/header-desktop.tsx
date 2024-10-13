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
        <div className={` text-emerald-800 shadow-md border-b-[1px]`}>
            <div className="container mx-auto flex justify-between items-center px-8">
                {/* Logo */}
                <div className="logo ml-4">
                    <Image
                    preview={false}
                        width={150}
                        src="/newest-logo.png"
                        alt="Logo"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                {/* Navigation */}
                <nav className="mr-4">
                    <ul className="flex space-x-10 font-semibold text-lg">
                        <li>
                            <Link href="/#home" className="hover:text-[#df8c00] transition-colors duration-300 text-[#070880]" >Home</Link>
                        </li>
                        <li>
                            <Link href="/#about-us" className="hover:text-[#df8c00] transition-colors duration-300 text-[#070880]">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-[#df8c00] transition-colors duration-300 text-[#070880]">Our Services</Link>
                        </li>
                        <li>
                            <Link href="/blogs">
                                <p className="hover:text-[#df8c00] transition-colors duration-300 text-[#070880]">Blogs</p>
                            </Link>
                        </li>
                       
                        <li>
                            <Link href="/#contact" className="hover:text-[#df8c00] transition-colors duration-300 text-[#070880]">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderDesktop;
