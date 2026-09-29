"use client";
import { useInView } from "@/hooks/useInView";

export default function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, inView } = useInView<HTMLDivElement>();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
