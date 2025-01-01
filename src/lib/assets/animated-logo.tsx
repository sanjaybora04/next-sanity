'use client'
import { motion, Variants } from "framer-motion";
import { cn } from "../utils";

export default function AnimatedLogo({ className, loop=false }:
    {
        className: string,
        loop?:boolean
    }
) {
    const variants:Variants = loop?{
        initial: {
            fillOpacity:0.5,
            pathLength:1,
        },
        animate: {
            pathLength: 0, // Animate to fully visible stroke
            fillOpacity: 0,
            transition: {
                duration: 1.5,
                ease:'easeOut',
                repeat: Infinity,
                repeatType: 'reverse'
            },
        },
    }:{
        initial: {
            fillOpacity: 0,
            pathLength: 0
        },
        animate: {
            pathLength: 1, // Animate to fully visible stroke
            fillOpacity: 1,
            transition: {
                duration: 2,
                pathLength: { duration: 2, ease: "easeInOut" }, // Stroke animation duration
                fillOpacity: { delay: 1, duration: 1 , ease:"easeIn"},
            },
        },
    }

    return (
        <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 12.149999618530273 26.350000381469727 35.75"
            initial="initial"
            animate="animate"
            transform="rotate(0) scale(1, 1)"
            className={cn('text-indigo-600',className)}
        >
            <motion.g variants={variants}>
                <motion.path
                    d="M26.35 22.00Q26.35 22.80 24.50 22.80Q24.20 22.80 23.50 22.20L21.80 20.60L19.50 18.60Q18.30 17.50 17.00 16.55Q13.40 14.50 12.10 14.35Q7.70 14.35 6.10 16.60Q5.50 17.45 5.50 18.47Q5.50 19.50 6.05 20.37Q6.60 21.25 7.95 22.25Q10.85 24.40 17.40 26.65Q17.50 26.55 17.80 26.10L18.45 25.20Q19.35 24.00 19.70 24.00Q20.05 24.00 20.28 24.27Q20.50 24.55 20.50 24.80Q20.50 25.05 20.38 25.35Q20.25 25.65 20.05 26.00Q19.50 26.95 19.45 27.20Q23.10 29.75 24.40 31.65Q25.95 33.90 25.95 37.35Q25.95 41.70 22.35 44.75Q18.65 47.90 13 47.90Q10.20 47.90 7.48 46.98Q4.75 46.05 3.05 43.85L2.95 43.80Q2.85 43.80 2.65 43.92Q2.45 44.05 2.45 44.15L1.75 47.55Q1.70 47.90 1.17 47.90Q0.65 47.90 0.48 47.77Q0.30 47.65 0.05 47.25L0 45.25Q0 42.85 0.40 38.25Q0.65 37.55 1.50 37.55Q2.35 37.55 2.95 38.32Q3.55 39.10 4.10 40.15L5.20 42.25Q5.75 43.30 6.50 43.85Q6.95 44.30 8.50 44.90Q11.80 46.25 14 46.25Q16.65 46.25 18.30 44.50Q19.85 42.85 19.85 40.25Q19.85 38.60 17.10 36.50Q14.45 34.50 12.50 34.50Q12.15 34.50 11.50 34.90Q10.35 35.65 10.05 35.65Q10.10 35.40 10.10 35.20L10.10 34.85Q10.10 34.15 9.90 33.75Q4.30 30.90 2.75 28.90Q1.85 27.70 1.60 26.35Q1.35 25.00 1.35 23.30Q1.35 18.85 3.05 15.95Q4.25 13.90 6.42 13.02Q8.60 12.15 10.53 12.15Q12.45 12.15 13.65 12.40Q14.85 12.65 15.95 13.10Q17.50 13.75 20.50 15.65L20.90 15.65L23.55 12.50L24.15 12.45Q25.40 12.45 25.60 13.15Q26.35 19.45 26.35 22.00Z"
                    variants={variants}
                    strokeWidth="0.5"
                    fill='currentColor'
                    stroke='currentColor'
                />
            </motion.g>

            {/* Repeat for other SVG elements */}
        </motion.svg>
    );
};
