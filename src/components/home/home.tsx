"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CALENDLY_URL, services } from "@/data/site";

const INTERVAL = 6000;

function Home() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const next = useCallback(() => setIndex((i) => (i + 1) % services.length), []);
    const prev = () => setIndex((i) => (i - 1 + services.length) % services.length);

    useEffect(() => {
        if (paused) return;
        const t = setTimeout(next, INTERVAL);
        return () => clearTimeout(t);
    }, [index, paused, next]);

    useEffect(() => {
        const onVis = () => setPaused(document.hidden);
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Our services"
            className="relative h-[85vh] min-h-[520px] max-h-[820px] w-full overflow-hidden bg-brand-ink text-white"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {services.map((s, i) => (
                <div
                    key={s.slug}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="100vw"
                        priority={i === 0}
                        className={`object-cover ${i === index ? "kenburns" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/60 to-brand-ink/20" />
                </div>
            ))}

            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-16 md:px-12">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
                    Pangwa Capital
                </p>
                <div aria-live="polite" key={index} className="max-w-3xl animate-[fadeUp_700ms_ease_both]">
                    <h1 className="text-4xl font-bold leading-tight text-balance md:text-6xl">
                        {services[index].title}
                    </h1>
                    <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
                        {services[index].short}
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/#services"
                        className="rounded-full bg-brand-amber px-7 py-3 font-semibold text-brand-ink transition hover:brightness-110"
                    >
                        Explore services
                    </Link>
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/60 px-7 py-3 font-semibold transition hover:bg-white/10"
                    >
                        Book a consultation
                    </a>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12">
                <div className="flex gap-2">
                    {services.map((s, i) => (
                        <button
                            key={s.slug}
                            onClick={() => setIndex(i)}
                            aria-label={`Show ${s.title}`}
                            aria-current={i === index}
                            className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/30 md:w-14"
                        >
                            {i === index && (
                                <span
                                    key={`${index}-${paused}`}
                                    className="absolute inset-0 origin-left rounded-full bg-brand-amber"
                                    style={{
                                        animation: paused ? "none" : `progress ${INTERVAL}ms linear forwards`,
                                        transform: paused ? "scaleX(1)" : undefined,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button onClick={prev} aria-label="Previous service" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 transition hover:bg-white/10">‹</button>
                    <button onClick={next} aria-label="Next service" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 transition hover:bg-white/10">›</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
