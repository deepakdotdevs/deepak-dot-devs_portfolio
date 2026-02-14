"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description:
      "From frontend to backend, I build complete, scalable applications with clean architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description:
      "I design modern, intuitive interfaces that are visually polished and user-friendly.",
  },
  {
    icon: Rocket,
    title: "Performance Driven",
    description:
      "Optimized code, fast loading, and scalable systems built for real-world growth.",
  },
];

export default function WhatSetsMeApart() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff,transparent_70%)] opacity-60" />

      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            What Sets Me Apart
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            I combine technical expertise with design thinking to deliver products
            that are both powerful and beautifully crafted.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="card p-8 hover:shadow-lg transition duration-300"
              >
                <Icon className="w-10 h-10 text-neutral-800 mb-6" />

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
