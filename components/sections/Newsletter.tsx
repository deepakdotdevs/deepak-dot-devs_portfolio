"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="mt-1 py-8">

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            relative
            bg-[#2c2c31]
            text-white
            rounded-3xl
            px-10
            py-14
            overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            border border-neutral-700/30
          "
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              opacity-20
              blur-3xl
              bg-[length:200%_200%]
              bg-[radial-gradient(circle_at_70%_30%,#6366f1,transparent_70%)]
            "
          />

          {/* Background Logo */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-1/2
              flex
              items-center
              justify-center
              opacity-5
              pointer-events-none
            "
          >
            <div className="text-[240px] font-black select-none leading-none">
              K
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Subscribe to my newsletter
            </h2>

            <p className="text-neutral-300 mb-10 leading-relaxed text-sm md:text-base">
              A periodic update about my life, recent blog posts,
              how-tos, and discoveries.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div
                className="
                  flex
                  items-center
                  bg-[#3a3a40]
                  rounded-full
                  p-1
                  border border-neutral-600
                  focus-within:border-indigo-500
                  transition
                "
              >
                <div className="pl-4 pr-2 text-neutral-400">
                  <Mail size={16} />
                </div>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="
                    flex-1
                    bg-transparent
                    px-2
                    py-3
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-neutral-400
                  "
                />

                <button
                  type="submit"
                  className="
                    bg-white
                    text-black
                    px-7
                    py-2.5
                    rounded-full
                    text-sm
                    font-medium
                    hover:scale-105
                    active:scale-95
                    transition
                  "
                >
                  {submitted ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} />
                      Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}    
                </button>
              </div>
            </form>

            <p className="text-xs text-neutral-400 mt-6">
              <span className="font-semibold text-white">NO SPAM.</span> I never send spam.
              You can unsubscribe at any time!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
