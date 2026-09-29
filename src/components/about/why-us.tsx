"use client";
import Image from "next/image";
import { FaCheckCircle, FaHandshake, FaChartLine, FaUsers } from "react-icons/fa";
import Reveal from "@/components/ui/reveal";

const steps = [
    { icon: FaCheckCircle, title: "Enquire or Book a Call", body: "Book a consultation or send us an enquiry about the funding or advisory you need." },
    { icon: FaHandshake, title: "Assessment & Matchmaking", body: "We assess your needs and match you with the right financial solution, advisory service & consultancy service." },
    { icon: FaChartLine, title: "Engage & Grow", body: "Access funds or expert advice to help grow your business." },
    { icon: FaUsers, title: "Ongoing Support", body: "Continue benefiting from our consultancy services and follow-up support." },
];

const reasons = [
    "Expert financial and business advisory services tailored to your business needs.",
    "Access to a wide network of financial partners and industry experts.",
    "Flexible and customized financial solutions that support business growth.",
    "Dedicated ongoing support and consultancy throughout your business journey.",
];

function WhyChooseUs() {
    return (
        <section className="bg-gray-50 px-4 py-20 text-gray-800 md:px-12 lg:px-24">
            <div className="mx-auto max-w-6xl">
                <Reveal className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">How It Works</h2>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => (
                        <Reveal key={s.title} delay={i * 100}>
                            <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                                <s.icon className="mx-auto text-3xl text-brand-amber" aria-hidden />
                                <h3 className="mt-4 font-bold text-brand-navy">{s.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{s.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mb-10 mt-20 text-center">
                    <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Why Choose PANGWA?</h2>
                </Reveal>
                <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
                    {reasons.map((r, i) => (
                        <Reveal key={r} delay={i * 80}>
                            <li className="flex h-full items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                                <Image src="/image micro.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 object-contain" />
                                <span>{r}</span>
                            </li>
                        </Reveal>
                    ))}
                </ul>

                <Reveal className="mt-16">
                    <figure className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-md md:flex-row md:p-12">
                        <Image src="/headshot.jpeg" alt="Wesley Onyango" width={200} height={250} className="h-auto w-40 rounded-xl object-cover shadow-lg md:w-48" />
                        <blockquote className="text-center md:text-left">
                            <p className="text-lg italic leading-relaxed text-gray-700 md:text-xl">
                                &ldquo;At PANGWA, we believe that empowering micro and small businesses with accessible financial solutions is the cornerstone of sustainable economic growth in East Africa. By bridging financial gaps, we are not just supporting businesses; we are nurturing the future of our communities.&rdquo;
                            </p>
                            <figcaption className="mt-4 text-lg font-bold text-gray-900">Wesley Onyango, Co-founder &amp; CEO</figcaption>
                        </blockquote>
                    </figure>
                </Reveal>
            </div>
        </section>
    );
}

export default WhyChooseUs;
