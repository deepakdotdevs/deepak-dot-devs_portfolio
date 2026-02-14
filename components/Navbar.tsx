"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container-custom py-6 flex justify-between items-center"
    >
      <div className="text-xl font-semibold tracking-tight">
        DK
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/toolbox">Toolbox</Link>
      </div>

      <button className="px-4 py-2 rounded-full bg-black text-white text-sm hover:scale-105 transition">
        Book a Call
      </button>
    </motion.nav>
  );
}
