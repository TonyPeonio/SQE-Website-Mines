"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply";

  return (
    <footer className="bg-[#181818] text-gray-300">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <a className="inline-block mb-4">
            <img src="/icon.png" className="hover:grayscale-0" alt="SQE Society of Quantum Engineers Logo" width={80} />
          </a>
          <h2 className="text-xl font-bold mb-2">{siteConfig.name}</h2>
          <p className="mb-4">{siteConfig.tagline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-1/3 md:justify-end">
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center hover:text-gray-100 transition-colors duration-200"
            >
              <span>Email</span>
            </a>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Connect</h2>
            <nav className="flex flex-col gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors duration-200"
              >
                GitHub
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Navigate</h2>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="transition-colors duration-200 hover:text-gray-100">
                Home
              </Link>
              <Link href="/about" className="transition-colors duration-200 hover:text-gray-100">
                About
              </Link>
              <Link href="/members" className="transition-colors duration-200 hover:text-gray-100">
                Team
              </Link>
              <Link href="/community" className="transition-colors duration-200 hover:text-gray-100">
                Community
              </Link>
              <Link href="/projects" className="transition-colors duration-200 hover:text-gray-100">
                Our Lab
              </Link>
              <Link href="/papers" className="transition-colors duration-200 hover:text-gray-100">
                Research
              </Link>
              {!isApplyPage && (
                <Link href="/apply" className="transition-colors duration-200 hover:text-gray-100">
                  Join
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </footer>
  );
}
