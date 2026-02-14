"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const people = [
  { name: "Sahdev Sharma", img: "/connections/p1.jpg" },
  { name: "Kushagra", img: "/connections/p2.jpg" },
  { name: "Harshit Singh", img: "/connections/p3.jpg" },
  { name: "Muskan", img: "/connections/p4.jpg" },
  { name: "Priyanka", img: "/connections/p5.jpg" },
  { name: "Aditya Bhatia", img: "/connections/p6.jpg" },
  { name: "Aman Chapadiya", img: "/connections/p7.jpg" },
  { name: "Aakash Yadav", img: "/connections/p8.jpg" },
  { name: "Reena", img: "/connections/p9.jpg" },
  { name: "Prince Yadav", img: "/connections/p10.jpg" },
  { name: "Tushar Singh", img: "/connections/p11.jpg" },
  { name: "Aamir Umarjaan", img: "/connections/p12.jpg" }
];

export default function ConnectionsPage() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="container-custom">

        {/* Page Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            An evolving list of
            <br />
            people I've met and
            <br />
            those I wish to meet.
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="mt-3 text-sm text-neutral-700">
                {person.name}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
