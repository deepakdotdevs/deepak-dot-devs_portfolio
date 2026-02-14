"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container-custom flex flex-col items-center text-center pt-5">

      {/* Profile Image */}
      <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative mb-8"
>
  {/* Glow background */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-300 to-neutral-100 blur-2xl opacity-40" />

  {/* Image Wrapper */}
<div className="relative w-20 h-20 md:w-25 md:h-25 rounded-full overflow-hidden border border-neutral-200 shadow-lg">
    <Image
      src="/profile.jpg"
      alt="Deepak Profile"
      fill
      priority
      sizes="(max-width: 768px) 160px, 192px"
      className="object-cover"
    />
  </div>
</motion.div>


      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
className="text-4xl md:text-5xl font-semibold leading-snug tracking-tight max-w-4xl"
      >
        Hey, I'm Deepak.
        <br />
        An Android App Developer
        <br />
        Crafting seamless mobile experiences.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
className="mt-6 text-neutral-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
      >
        A full-stack developer blending clean design with solid backend engineering.
      </motion.p>
    </section>
  );
}
