"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
  fontSizes?: {
    quote?: string;
    name?: string;
    designation?: string;
  };
}

export const CircularTestimonials = ({
  testimonials = [],
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const defaultColors = {
    primary: "#4A90E2",
    secondary: "#D0021B",
    background: "#ffffff",
    text: "#333333",
    ...colors,
  };

  const defaultFontSizes = {
    quote: "1.2rem",
    name: "1rem",
    designation: "0.9rem",
    ...fontSizes,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === testimonialsLength - 1 ? 0 : prev + 1));
  }, [testimonialsLength]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonialsLength - 1 : prev - 1));
  }, [testimonialsLength]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, autoplay]);

  if (!testimonials || testimonials.length === 0) {
    return <div className="text-center py-10 text-gray-500">No testimonials available.</div>;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center px-4"
        >
          <img
            src={testimonials[current].src}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mb-4 object-cover border-4"
            style={{ borderColor: defaultColors.primary }}
          />
          <p
            className="mb-4"
            style={{ color: defaultColors.text, fontSize: defaultFontSizes.quote }}
          >
            “{testimonials[current].quote}”
          </p>
          <h4
            className="font-semibold"
            style={{ color: defaultColors.primary, fontSize: defaultFontSizes.name }}
          >
            {testimonials[current].name}
          </h4>
          <span
            className="text-sm"
            style={{ color: defaultColors.secondary, fontSize: defaultFontSizes.designation }}
          >
            {testimonials[current].designation}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <button onClick={prevSlide} className="text-gray-600 hover:text-gray-800">
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button onClick={nextSlide} className="text-gray-600 hover:text-gray-800">
          <FaArrowRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
