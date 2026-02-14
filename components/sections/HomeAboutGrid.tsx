"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Users, Wrench, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SiClickup,
  SiAndroidstudio,
  SiFirebase,
} from "react-icons/si";


/* ---------------------------------------------
   Reusable Glow Background Component
--------------------------------------------- */

function AnimatedGlow({
  gradient,
  duration = 30,
}: {
  gradient: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute inset-0 -z-10 opacity-25 blur-2xl bg-[length:200%_200%] ${gradient}`}
    />
  );
}

/* ---------------------------------------------
   Reusable Card Wrapper
--------------------------------------------- */

function Card({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 overflow-hidden"
    >
      <AnimatedGlow gradient={gradient} />
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------
   Main Section Component
--------------------------------------------- */

function Tool({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-100 hover:bg-white border border-neutral-200 shadow-sm cursor-pointer"
    >
      <div className="text-2xl text-neutral-800 group-hover:text-indigo-600 transition">
        {icon}
      </div>
      <span className="mt-2 text-xs text-neutral-600">
        {label}
      </span>
    </motion.div>
  );
}


export default function HomeAboutGrid() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="container-custom">

        {/* ---------------- Heading ---------------- */}

        <div className="text-center mb-20">
          <span className="text-sm font-medium text-indigo-600 tracking-wide">
            About
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Here's what sets me apart
            <br />
            and makes me unique
          </h2>
        </div>

        {/* ---------------- Grid Layout ---------------- */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* Learn More Card */}
            <Link href="/about">
  <motion.div
    whileHover={{ y: -8 }}
    className="
      relative 
      bg-white 
      rounded-3xl 
      border 
      border-neutral-200 
      shadow-sm 
      p-8 
      flex 
      items-center 
      justify-between 
      overflow-hidden 
      cursor-pointer 
      group
      ring-1 
      ring-transparent 
      hover:ring-indigo-200/60
      transition
    "
  >

    {/* Animated Glow */}
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 -z-10 opacity-20 blur-2xl bg-[length:200%_200%] bg-[radial-gradient(circle_at_30%_30%,#e0e7ff,transparent_70%)]"
    />

    {/* Text */}
    <div>
      <h3 className="text-lg font-semibold mb-3">
        Learn more about me
      </h3>

      <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
        I'm Deepak — a passionate full-stack developer building scalable
        mobile applications with clean design systems.
      </p>
    </div>

    {/* Image */}
    <div className="relative w-24 h-24 rounded-2xl overflow-hidden rotate-6 shadow-md group-hover:rotate-0 transition duration-300">
      <Image
        src="/profile.jpg"
        alt="Deepak"
        fill
        className="object-cover"
      />
    </div>

  </motion.div>
</Link>



            {/* Toolbox Card */}
<Card gradient="bg-[radial-gradient(circle_at_70%_70%,#f3e8ff,transparent_70%)]">
  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
    <Wrench className="w-5 h-5 text-indigo-600" />
    Toolbox
  </h3>

  <p className="text-neutral-600 text-sm mb-6">
    Tools and technologies I use daily to build scalable products.
  </p>

  <div className="grid grid-cols-3 gap-4">

    <Tool icon={<FaGithub />} label="GitHub" />
    <Tool icon={<FaGithub />} label="GitHub" />
    <Tool icon={<Code />} label="VS Code" />
    <Tool icon={<SiClickup />} label="ClickUp" />
    <Tool icon={<SiAndroidstudio />} label="Android Studio" />
    <Tool icon={<SiFirebase />} label="Firebase" />
  </div>
</Card>


          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* Connections Card */}
            <Link href="/connections">
  <motion.div
    whileHover={{ y: -8 }}
    className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-10 overflow-hidden cursor-pointer group"
  >
    {/* Animated Glow */}
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 -z-10 opacity-25 blur-2xl bg-[length:200%_200%] bg-[radial-gradient(circle_at_center,#dbeafe,transparent_70%)]"
    />

    {/* Orbit Background Rings */}
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <div className="w-72 h-72 border rounded-full border-neutral-200"></div>
    </div>

    {/* Center Avatar */}
    <div className="flex justify-center mb-6 relative">
      <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Deepak"
          width={96}
          height={96}
        />
      </div>
    </div>

    <h3 className="text-lg font-semibold text-center mb-2">
      Connections
    </h3>

    <p className="text-neutral-600 text-sm text-center">
      An evolving list of people I've met and those I wish to meet.
    </p>

    {/* Arrow Button */}
    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
      <ArrowUpRight size={18} />
    </div>
  </motion.div>
</Link>


            {/* Book Call Card */}

<Link
  href="https://cal.com/deepak-jangid-gefs0j/30min?overlayCalendar=true"
  target="_blank"
>
  <motion.div
    whileHover={{ y: -8 }}
    className="
      relative 
      bg-white 
      rounded-3xl 
      border 
      border-neutral-200 
      shadow-sm 
      overflow-hidden 
      cursor-pointer 
      group
      ring-1 
      ring-indigo-200/50
    "
  >

    {/* Animated Subtle Glow */}
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 -z-10 opacity-20 blur-2xl bg-[length:200%_200%] bg-[radial-gradient(circle_at_70%_30%,#e0e7ff,transparent_70%)]"
    />

    <div className="grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="p-8 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-3">
          Book a call with me
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed">
          I'd love to chat even
          <br />
          if there's no agenda!
        </p>
      </div>

      {/* RIGHT SIDE – Calendar Preview */}
      <div className="relative p-6 bg-neutral-50 border-l border-neutral-200">

        {/* Calendar Screenshot */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">

          <Image
            src="/calendar-preview.jpg"
            alt="Calendar Preview"
            width={400}
            height={300}
            className="w-full h-auto"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />

        </div>

        {/* Arrow Button */}
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
          <ArrowUpRight size={18} />
        </div>

      </div>

    </div>
  </motion.div>
</Link>


          </div>

        </div>

      </div>
    </section>
  );
}
