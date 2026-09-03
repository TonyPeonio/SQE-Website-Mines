"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import TrimmedImage from "./TrimmedImage";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/data/nav";

export default function Footer() {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply";

  return (
    <footer className="bg-mines-navy text-mines-silver-light">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <a className="inline-block mb-4">
            <div className="bg-white rounded-md px-2 py-1 inline-block">
              <TrimmedImage
                src="/quantumlogo.png"
                alt="SQE Society of Quantum Engineers Logo"
                height={48}
              />
            </div>
          </a>
          <h2 className="text-xl font-bold mb-2 text-white">{siteConfig.name}</h2>
          <p className="mb-4">{siteConfig.tagline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-1/3 md:justify-end">
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Contact</h2>
            {siteConfig.contactEmail ? (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center hover:text-white transition-colors duration-200"
              >
                <span>Email</span>
              </a>
            ) : (
              <span className="text-mines-silver">Email coming soon</span>
            )}
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Connect</h2>
            <nav className="flex flex-col gap-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.newsletter && (
                <a
                  href={siteConfig.social.newsletter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Newsletter
                </a>
              )}
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Navigate</h2>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              ))}
              {!isApplyPage && (
                <Link href="/apply" className="transition-colors duration-200 hover:text-white">
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
