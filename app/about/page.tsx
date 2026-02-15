"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-[#f8fafc] to-white"
    >
      <div className="container-custom relative">

        {/* ======= HEADER ======= */}
        <div className="text-center mb-28">
          <p className="text-indigo-500 font-medium mb-4">About</p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            My journey as a Developer
          </h1>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            From curiosity to building scalable Android and full-stack systems.
          </p>
        </div>


        {/* ======= TIMELINE WRAPPER ======= */}
        <div className="relative">

          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-indigo-100" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-indigo-500 origin-top"
          />

          {/* ======= ITEMS ======= */}
          <div className="space-y-32">

            <TimelineItem
              title="My Programming Origins"
              text={`I began my journey during my 10th class. 
              Starting with Website Development, I discovered how powerful logic 
              and structured thinking can be. What began as curiosity quickly 
              turned into passion.`}
              image="/deepak1.jpg"
              align="left"
            />

            <TimelineItem
              title="Finding My Direction"
              text={`Exploring Java, C++, and frontend systems helped me 
              understand full-stack architecture. But Android development 
              became my strongest interest — combining UI, logic, and performance.`}
              image="/deepak2.jpg"
              align="right"
            />

            <TimelineItem
              title="Building Real Projects"
              text={`I built Android app name - Gorvia.in, 
              shopping app or service for my village, where we are the first
              who start this service in my village`}
              image="/deepak3.jpg"
              align="left"
            />

            <TimelineItem
              title="Research & Growth"
              text={`After that I present this app on District Level
                with the help of my sir - NemSingh Sir and I got 2nd prize in
                this competition and Hence, today i pursuing B.Tech CSE for pursue my Interest in App Dev`}
              image="/deepak4.jpg"
              align="right"
            />

            <TimelineItem
              title="Future Vision"
              text={`My goal is to become a complete Full-Stack Android Engineer, 
              secure a reputed high-paying role, and eventually build 
              scalable tech startups of my own.`}
              image="/deepak5.jpg"
              align="left"
            />

          </div>
        </div>
      </div>
    </section>
  );
}


/* ================= TIMELINE ITEM ================= */

function TimelineItem({
  title,
  text,
  image,
  align,
}: {
  title: string;
  text: string;
  image: string;
  align: "left" | "right";
}) {
  const isLeft = align === "left";

  return (
    <div className="relative grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-right md:pr-16"
        >
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
          <p className="text-neutral-600 leading-relaxed">{text}</p>
        </motion.div>
      )}

      {/* CENTER DOT */}
      {/* CENTER DOT WITH GLOW */}
<div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">

  {/* Outer Glow Ring */}
  <motion.div
    animate={{
      scale: [1, 1.8, 1],
      opacity: [0.6, 0, 0.6],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-12 h-12 bg-indigo-500 rounded-full blur-xl opacity-40"
  />

  {/* Middle Soft Ring */}
  <motion.div
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.5, 0.2, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3,
    }}
    className="absolute w-8 h-8 bg-indigo-400 rounded-full blur-md"
  />

  {/* Core Dot */}
  <div className="relative w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg" />

</div>


      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`${
          isLeft ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>

      {/* RIGHT TEXT (if align right) */}
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:pl-16"
        >
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
          <p className="text-neutral-600 leading-relaxed">{text}</p>
        </motion.div>
      )}

    </div>
  );
}
