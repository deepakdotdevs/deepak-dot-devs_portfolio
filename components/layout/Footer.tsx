import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
<footer className="bg-white border-t border-neutral-200 pt-8 pb-20">
          <div className="container-custom grid md:grid-cols-4 gap-12 items-start">

              {/* Left Side */}
          <div className="flex flex-col">

  {/* Logo */}
  <Link href="/" className="flex items-center mb-10 -mt-2">

      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-neutral-200 shadow-md hover:scale-105 transition">
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 20 Q75 20 75 50 Q75 80 30 80"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="20"
          x2="30"
          y2="80"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </Link>

  {/* Text */}
  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
    I'm Deepak — a Full-stack developer who builds scalable app products.
    Thanks for stopping by.
  </p>

  <p className="text-xs text-neutral-500">
    © {new Date().getFullYear()} Deepak. All rights reserved.
  </p>

</div>


        {/* General */}
        <div>
          <h4 className="font-semibold mb-4">General</h4>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>

        {/* Specifics */}
        <div>
          <h4 className="font-semibold mb-4">Specifics</h4>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <Link href="/toolbox">Toolbox</Link>
          </div>
        </div>

        {/* Extra */}
        <div>
          <h4 className="font-semibold mb-4">Extra</h4>
          <div className="flex flex-col gap-2 text-sm text-neutral-600 mb-6">
            <Link href="/connections">Connections</Link>
            <Link href="/links">Links</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://x.com/im_deepak_12" className="p-2 bg-black text-white rounded-full">
              <Twitter size={16} />
            </a>
            <a href="https://www.linkedin.com/in/deepak-jangid-89954a317/" className="p-2 bg-black text-white rounded-full">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/deepakdotdevs" className="p-2 bg-black text-white rounded-full">
              <Github size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
