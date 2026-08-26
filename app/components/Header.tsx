"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteBannerBar from "./SiteBanner";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Team" },
  { href: "/community", label: "Community" },
  { href: "/projects", label: "Our Lab" },
  { href: "/papers", label: "Research" },
];

export default function Header() {
  return (
    <div className="w-screen bg-[#181818] text-xs">
      <SiteBannerBar />
      <div className="navbar bg-[#181818]">
        <div className="navbar navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 stroke-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300"
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                  href="/apply"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="hover:bg-transparent active:bg-transparent ml-2">
            <Image
              src="/icon.png"
              alt="SQE Society of Quantum Engineers Logo"
              width={100}
              height={50}
              className="hover:grayscale-0"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link
            href="/apply"
            className="inline-flex items-center px-5 py-3 mr-2 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}
