"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/p1.jpg", rotate: -6 },
  { src: "/images/p2.jpg", rotate: 3 },
  { src: "/images/p3.jpg", rotate: -3 },
  { src: "/images/p4.jpg", rotate: 6 },
];

export default function ImageStack() {
  return (
    <section className="container-custom py-16 flex justify-center">
      <div className="relative flex items-center justify-center">

        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
              },
            }}
            style={{
              rotate: img.rotate,
              zIndex: images.length - index,
              marginLeft: index !== 0 ? "-15px" : "0px", // reduced overlap
            }}
            className="relative w-52 h-72 md:w-45 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-white cursor-pointer"
          >
            <Image
              src={img.src}
              alt="Deepak"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}
