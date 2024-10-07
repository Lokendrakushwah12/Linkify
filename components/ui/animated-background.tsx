"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState, useCallback } from "react";

interface Props {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: string | number; // Use more specific types
    numSquares?: number;
    className?: string;
    maxOpacity?: number;
    duration?: number;
}

export function AnimatedBackground({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 50,
    className,
    maxOpacity = 0.5,
    duration = 4,
    ...props
}: Props) {
    const id = useId();
    const containerRef = useRef<SVGSVGElement | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Move these function definitions above useState
    const getPos = useCallback(() => {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];
    }, [dimensions, width, height]);

    const generateSquares = useCallback((count: number) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            pos: getPos(),
        }));
    }, [getPos]);

    // Initialize squares state using the generateSquares function
    const [squares, setSquares] = useState(() => generateSquares(numSquares));

    const updateSquarePosition = (id: number) => {
        setSquares((currentSquares) =>
            currentSquares.map((sq) =>
                sq.id === id
                    ? {
                        ...sq,
                        pos: getPos(),
                    }
                    : sq,
            ),
        );
    };

    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            setSquares(generateSquares(numSquares));
        }
    }, [dimensions, numSquares, generateSquares]); // Added generateSquares to the dependency array

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        const currentRef = containerRef.current; // Store ref in a local variable
        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
            }
        };
    }, []); // No dependencies; only need to set up once

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full fill-[rgba(0,0,0,0.01)] stroke-muted-foreground/20 [mask-image:radial-gradient(300px_circle_at_center,black,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,black,transparent)] inset-y-[-30%] ${className}`} // Added className support
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {squares.map(({ pos: [squareX, squareY], id }, index) => (
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: 1,
                            delay: index * 0.1,
                            repeatType: "reverse",
                        }}
                        onAnimationComplete={() => updateSquarePosition(id)}
                        key={`${squareX}-${squareY}-${id}`} // Changed to use `id` for uniqueness
                        width={width - 1}
                        height={height - 1}
                        x={squareX * width + 1}
                        y={squareY * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                    />
                ))}
            </svg>
        </svg>
    );
}

export default AnimatedBackground;
