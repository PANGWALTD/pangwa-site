"use client";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const items = [
    { img: "/mission.png", title: "Our Mission", body: "To empower businesses by providing innovative financial solutions and expert advisory." },
    { img: "/story1.png", title: "Our Story", body: "Pangwa Capital Limited was founded with a vision to address the financial gaps faced by businesses across Africa — connecting them to capital markets, lenders and international bank instruments that fuel sustainable growth." },
    { img: "/values2.png", title: "Our Values", list: ["Impact-Driven", "Customer-Centricity", "Collaboration"] },
];

function AboutUs() {
    return (
        <section id="about-us" className="bg-white px-4 py-20 md:px-12 lg:px-24">
            <Reveal className="mb-12 text-center">
                <p className="text-base font-semibold uppercase tracking-[0.25em] text-brand-amber md:text-2xl">Who we are</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-navy md:text-4xl">About Us</h2>
            </Reveal>
            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it, i) => (
                    <Reveal key={it.title} delay={i * 100}>
                        <div className="flex h-full flex-col items-center rounded-2xl bg-gray-50 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <Image src={it.img} alt="" width={80} height={80} className="h-20 w-20 object-contain" />
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">{it.title}</h3>
                            {it.body && <p className="mt-2 text-gray-600">{it.body}</p>}
                            {it.list && (
                                <ul className="mt-2 text-gray-600">
                                    {it.list.map((v) => <li key={v}>{v}</li>)}
                                </ul>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default AboutUs;
