"use client";
import { FaAward } from "react-icons/fa";
import { awards } from "@/data/site";
import Reveal from "@/components/ui/reveal";

function Awards() {
    return (
        <section id="awards" className="bg-brand-ink px-4 py-20 text-white md:px-12 lg:px-24">
            <Reveal className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">Recognition</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Award-Winning Advisory</h2>
            </Reveal>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                {awards.map((a, i) => (
                    <Reveal key={a.year} delay={i * 120}>
                        <a
                            href={a.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full flex-col items-center rounded-2xl bg-white/5 p-8 text-center ring-1 ring-brand-amber/40 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-brand-amber"
                        >
                            <FaAward className="text-5xl text-brand-amber transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            <p className="mt-4 text-5xl font-bold tabular-nums">{a.year}</p>
                            <p className="mt-2 text-lg font-semibold text-brand-amber">{a.title}</p>
                            <p className="mt-1 text-sm text-white/70">Winner · {a.publisher}</p>
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Awards;
