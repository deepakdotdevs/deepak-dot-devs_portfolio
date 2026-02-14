import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-20">
      <div className="container-custom grid md:grid-cols-4 gap-12">

        {/* Left Side */}
        <div>
          <div className="text-3xl font-bold mb-6">K</div>

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
            <a href="#" className="p-2 bg-black text-white rounded-full">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded-full">
              <Linkedin size={16} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded-full">
              <Github size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
