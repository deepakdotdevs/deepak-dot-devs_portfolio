"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  SiGithub,
  SiAndroidstudio,
  SiFirebase,
  SiFigma,
  SiClickup,
} from "react-icons/si";

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function ToolboxPage() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="container-custom">

        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="text-center mb-24"
        >
          <motion.h1
            variants={itemVariant}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-6"
          >
            Hardware & software
            <br />
            I keep in my toolbox.
          </motion.h1>

          <motion.p
            variants={itemVariant}
            className="text-neutral-600 max-w-2xl mx-auto"
          >
            The tools, technologies, and hardware I use daily to design,
            develop, and ship modern applications.
          </motion.p>
        </motion.div>

        {/* ================= APPLICATIONS ================= */}
        <div className="mb-32">
          <p className="text-center text-sm text-indigo-600 mb-12 font-medium">
            Applications
          </p>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              {
                name: "VS Code",
                icon: (
                  <svg width={28} height={28} viewBox="0 0 24 24" fill="none" className="text-[#007ACC]">
                    <path d="M9 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                icon: <SiGithub size={28} className="text-black" />,
              },
              {
                name: "Android Studio",
                icon: <SiAndroidstudio size={28} className="text-[#3DDC84]" />,
              },
              {
                name: "Firebase",
                icon: <SiFirebase size={28} className="text-[#FFCA28]" />,
              },
              {
                name: "Figma",
                icon: <SiFigma size={28} className="text-[#F24E1E]" />,
              },
              {
                name: "ClickUp",
                icon: <SiClickup size={28} className="text-[#7B68EE]" />,
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{
                  y: -10,
                  scale: 1.06,
                  rotateX: 4,
                  rotateY: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="relative group bg-white border border-neutral-200 rounded-2xl p-6 text-center shadow-sm overflow-hidden"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl"></div>
                </div>

                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-indigo-400/60 transition duration-200"></div>

                {/* Content */}
                <div className="relative z-10 transition duration-200">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition duration-200">
                    {tool.icon}
                  </div>

                  <p className="text-sm font-semibold tracking-wide">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= HARDWARE ================= */}
        <div>
          <p className="text-center text-sm text-indigo-600 mb-12 font-medium">
            Hardware
          </p>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Personal Laptop",
                description:
                  "AMD Ryzen powered machine used for Android development, React projects, backend servers, and UI design work.",
                tag: "Development Machine",
              },
              {
                title: "Wireless Headset",
                description:
                  "Used for meetings, hackathons, and focused coding sessions. Noise isolation helps deep work.",
                tag: "Productivity Gear",
              },
              {
                title: "Android Device",
                description:
                  "Used for testing Android applications including KRMU Nexus and other personal projects.",
                tag: "App Testing Device",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <span className="text-indigo-600 text-sm font-medium">
                  {item.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
