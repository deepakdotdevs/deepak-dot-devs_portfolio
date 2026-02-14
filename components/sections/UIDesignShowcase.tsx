"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeAboutGrid() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-sm text-indigo-600 font-medium">
            About
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Here's what sets me apart
            <br />
            and makes me unique
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* Learn More Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 flex items-center justify-between overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_70%)] opacity-40" />

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Learn more about me
                </h3>

                <p className="text-neutral-600 text-sm">
                  Hi! I'm Deepak, a passionate full-stack developer.
                </p>
              </div>

              <div className="relative w-24 h-24 rounded-2xl overflow-hidden rotate-6">
                <Image
                  src="/profile.jpg"
                  alt="Deepak"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Toolbox Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,#f3e8ff,transparent_70%)] opacity-40" />

              <h3 className="text-lg font-semibold mb-3">
                Toolbox
              </h3>

              <p className="text-neutral-600 text-sm mb-6">
                Tools and technologies I use daily.
              </p>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center">
                  ⚛️
                </div>
                <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center">
                  💻
                </div>
                <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center">
                  🎨
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* Connections Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-10 text-center overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#dbeafe,transparent_70%)] opacity-40" />

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Deepak"
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Connections
              </h3>

              <p className="text-neutral-600 text-sm">
                An evolving list of people I’ve met and those I wish to meet.
              </p>
            </motion.div>

            {/* Book a Call Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#ede9fe,transparent_70%)] opacity-40" />

              <h3 className="text-lg font-semibold mb-3">
                Book a call with me
              </h3>

              <p className="text-neutral-600 text-sm mb-6">
                Let’s connect and build something meaningful.
              </p>

              <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:scale-105 transition">
                Schedule Call
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
 