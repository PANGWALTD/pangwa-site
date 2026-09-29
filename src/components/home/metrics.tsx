"use client";
import { useEffect, useState } from "react";
import { metrics } from "@/data/site";
import { useInView } from "@/hooks/useInView";

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
    const { ref, inView } = useInView<HTMLSpanElement>(0.4);
    const [n, setN] = useState(to); // final value first, so SSR / no-JS shows the real number

    useEffect(() => {
        if (!inView) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const start = performance.now();
        const dur = 1800;
        let raf = requestAnimationFrame(function tick(t) {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        });
        setN(0);
        return () => cancelAnimationFrame(raf);
    }, [inView, to]);

    return (
        <span ref={ref}>
            {prefix}
            {new Intl.NumberFormat("en").format(n)}
            {suffix}
        </span>
    );
}

function Metrics() {
    return (
        <section className="bg-brand-ink py-14 text-white">
            <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 text-center sm:grid-cols-3 md:px-12">
                {metrics.map((m) => (
                    <div key={m.label}>
                        <dd className="text-4xl font-bold tabular-nums text-brand-amber md:text-5xl">
                            <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} />
                        </dd>
                        <dt className="mt-2 text-sm text-white/70 md:text-base">{m.label}</dt>
                    </div>
                ))}
            </dl>
        </section>
    );
}

export default Metrics;
