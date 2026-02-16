"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="container-custom">

        {/* ================= HERO ================= */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            A collection of my favorite works.
          </h1>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            Android applications, full-stack systems, and real-world tech solutions.
          </p>
        </div>


        {/* ================= UI SHOWCASE SECTION ================= */}
        <UIShowcaseSection />


        {/* ================= MAIN FEATURE PROJECT ================= */}
        <FeaturedProject />

      </div>
    </section>
  );
}

function UIShowcaseSection() {
  return (
    <div className="mb-32">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-semibold">
            UI Showcase – KRMU Nexus
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Swipe horizontally to explore app screens →
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative overflow-hidden">

  <div
    className="
      flex 
      gap-8 
      w-max 
      animate-scroll
      hover:[animation-play-state:paused]
    "
  >

    {/* First Set */}
    <DribbbleCard image="/ui/login.jpg" title="Splash Screen" />
    <DribbbleCard image="/ui/register.jpg" title="Login Screen" />
    <DribbbleCard image="/ui/dashboard.jpg" title="Student Dashboard" />
    <DribbbleCard image="/ui/navigation.jpg" title="Teacher Dashboard" />
    <DribbbleCard image="/ui/profile.jpg" title="Profile Screen" />
    <DribbbleCard image="/ui/recyclerview.jpg" title="RecyclerView List" />

    {/* Duplicate for infinite loop */}
     <DribbbleCard image="/ui/login.jpg" title="Splash Screen" />
    <DribbbleCard image="/ui/register.jpg" title="Login Screen" />
    <DribbbleCard image="/ui/dashboard.jpg" title="Student Dashboard" />
    <DribbbleCard image="/ui/navigation.jpg" title="Teacher Dashboard" />
    <DribbbleCard image="/ui/profile.jpg" title="Profile Screen" />
    <DribbbleCard image="/ui/recyclerview.jpg" title="RecyclerView List" />

  </div>

</div>

    </div>
  );
}
function DribbbleCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        min-w-[280px] 
        md:min-w-[350px]
        snap-center
        bg-white 
        rounded-3xl 
        shadow-lg 
        border border-neutral-200 
        overflow-hidden
        flex-shrink-0
      "
    >

      <div className="relative h-[520px] bg-neutral-100">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-neutral-800">
          {title}
        </h3>
      </div>

    </motion.div>
  );
}

function UIScreen({ image, title }: { image: string; title: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-neutral-200"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={800}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="font-medium text-neutral-800">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
function FeaturedProject() {
  return (
    <div className="mb-32">

      <h2 className="text-3xl font-semibold mb-12">
        🚀 KRMU Nexus – Smart University Companion App
      </h2>

      <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-12">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              KRMU Nexus is a modern Android application designed to centralize
              academic and campus-related services for students of
              K.R. Mangalam University.
            </p>

            <ul className="space-y-3 text-neutral-700 text-sm">
              <li>✔ Firebase Authentication (Email & Password)</li>
              <li>✔ Modern Dashboard UI</li>
              <li>✔ Navigation Drawer</li>
              <li>✔ Profile Management System</li>
              <li>✔ RecyclerView Implementation</li>
              <li>✔ Clean MVC Structure</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm">
                View Project
              </button>

              <button className="border border-neutral-300 px-6 py-3 rounded-full text-sm">
                View GitHub
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/ui/dashboard.jpg"
              alt="KRMU Nexus"
              width={700}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
