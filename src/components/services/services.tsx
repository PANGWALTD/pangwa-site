"use client";
import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/site";
import Reveal from "@/components/ui/reveal";

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className="flip-card relative h-[28rem] w-full"
            data-flipped={flipped}
            onMouseLeave={() => setFlipped(false)}
        >
            <div className="flip-inner relative h-full w-full">
                {/* Front: image + title. The whole face is the toggle button. */}
                <button
                    type="button"
                    onClick={() => setFlipped((f) => !f)}
                    aria-pressed={flipped}
                    aria-label={`${s.title}. Show details`}
                    className="flip-face absolute inset-0 overflow-hidden rounded-2xl text-center shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
                >
                    <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
                    <span className="absolute left-5 top-5 font-mono text-sm tracking-widest text-brand-amber">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-bold leading-snug">{s.title}</h3>
                        <p className="mt-2 text-sm text-white/70">Tap or hover for details ↻</p>
                    </div>
                </button>

                {/* Back: description */}
                <div
                    className="flip-face flip-back absolute inset-0 flex flex-col items-center rounded-2xl bg-gradient-to-br text-center from-brand-navy to-brand-ink p-6 text-white shadow-lg ring-1 ring-brand-amber/60"
                    aria-hidden={!flipped}
                >
                    <h3 className="mb-3 text-xl font-bold text-brand-amber">{s.title}</h3>
                    <p className="flex-1 overflow-y-auto pr-1 text-sm leading-relaxed text-white/90 [scrollbar-width:thin]">
                        {s.description}
                    </p>
                    <a
                        href="#contact"
                        onClick={() => window.dispatchEvent(new CustomEvent("select-service", { detail: s.slug }))}
                        className="mt-4 self-center rounded-full bg-brand-amber px-5 py-2 text-sm font-semibold text-brand-ink transition hover:brightness-110"
                    >
                        Enquire →
                    </a>
                </div>
            </div>
        </div>
    );
}

function Services() {
    return (
        <section id="services" className="bg-gray-50 px-4 py-20 md:px-12 lg:px-24">
            <Reveal className="mb-12 text-center">
                <p className="text-base font-semibold uppercase tracking-[0.25em] text-brand-amber md:text-2xl">What we do</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-navy md:text-4xl">Our Services</h2>
            </Reveal>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-6">
                {services.map((s, i) => (
                    <Reveal
                        key={s.slug}
                        delay={(i % 3) * 100}
                        className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
                    >
                        <ServiceCard s={s} i={i} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Services;
