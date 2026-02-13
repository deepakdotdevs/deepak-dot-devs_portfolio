"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container-custom text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-semibold leading-tight"
      >
        Hey, I'm Deepak.
        <br />
        I build end-to-end
        <br />
        web products that scale.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-neutral-600 max-w-xl mx-auto"
      >
        Full-stack developer blending clean design with solid backend engineering.
      </motion.p>
    </section>
  );
}
