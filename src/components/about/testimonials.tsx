"use client";
import { caseStudies } from "@/data/site";
import Reveal from "@/components/ui/reveal";

function Testimonials() {
    return (
        <section id="clients" className="bg-white px-4 py-20 md:px-12 lg:px-24">
            <Reveal className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">Client stories</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-navy md:text-4xl">Businesses we&apos;ve helped grow</h2>
            </Reveal>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                {caseStudies.map((c, i) => (
                    <Reveal key={c.company} delay={(i % 2) * 100}>
                        <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" aria-hidden />
                                <div>
                                    <h3 className="font-bold text-gray-900">{c.company}</h3>
                                    <p className="text-sm text-gray-500">{c.sector} · {c.country}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-3xl font-bold text-brand-navy">{c.stat}</p>
                                <p className="text-sm text-gray-600">{c.statLabel}</p>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-gray-700">{c.story}</p>
                            <span className="mt-4 w-fit rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-semibold text-brand-navy">
                                {c.service}
                            </span>
                            <blockquote className="mt-auto border-t border-gray-200 pt-5 text-sm text-gray-600">
                                <p className="italic">&ldquo;{c.quote}&rdquo;</p>
                                <footer className="mt-2 font-semibold text-gray-800">
                                    {c.person}, <span className="font-normal text-gray-500">{c.role}</span>
                                </footer>
                            </blockquote>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
