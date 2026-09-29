"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CALENDLY_URL } from "@/data/site";

const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#services", label: "Our Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact Us" },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled || open ? "bg-white/90 shadow-md backdrop-blur" : "bg-white/70 backdrop-blur-sm"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-8">
                <Link href="/#home" aria-label="Pangwa Capital home">
                    <Image src="/newest-logo.png" alt="Pangwa Capital" width={150} height={50} priority className="h-10 w-auto md:h-12" />
                </Link>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                    {links.map((l) => (
                        <Link key={l.label} href={l.href} className="font-semibold text-brand-navy transition-colors duration-300 hover:text-brand-amber">
                            {l.label}
                        </Link>
                    ))}
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-brand-navy px-5 py-2 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-ink"
                    >
                        Book a call
                    </a>
                </nav>

                <button
                    className="text-3xl text-brand-navy md:hidden"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? <IoMdClose /> : <IoMdMenu />}
                </button>
            </div>

            {open && (
                <nav className="grid gap-4 bg-white px-6 pb-6 pt-2 font-semibold md:hidden" aria-label="Mobile">
                    {links.map((l) => (
                        <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-brand-navy hover:text-brand-amber">
                            {l.label}
                        </Link>
                    ))}
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-brand-amber px-5 py-2 text-brand-ink">
                        Book a call
                    </a>
                </nav>
            )}
        </header>
    );
}

export default Header;
