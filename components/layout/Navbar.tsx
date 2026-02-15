"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container-custom py-6 flex justify-between items-center"
    >
       <Link href="/" className="flex items-center">
  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/70 backdrop-blur-lg border border-neutral-200 shadow-md hover:scale-105 transition">
    <Image
      src="/logo.png"
      alt="Deepak Logo"
      fill
      className="object-cover"
      priority
    />
  </div>
</Link>


      <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/toolbox">Toolbox</Link>
      </div>

      <a href="https://cal.com/deepak-jangid-gefs0j/30min?overlayCalendar=true"
      className="px-4 py-2 rounded-full bg-black text-white text-sm hover:scale-105 transition">
        Book a Call
      </a>
    </motion.nav>
  );
}
