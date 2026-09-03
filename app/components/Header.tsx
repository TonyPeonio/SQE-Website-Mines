"use client";

import React from "react";
import Link from "next/link";
import TrimmedImage from "./TrimmedImage";
import { accentCtaClassName } from "@/data/site";
import { navLinks } from "@/data/nav";

export default function Header() {
  return (
    <div className="w-screen bg-white text-xs border-b border-mines-silver/30">
      <div className="navbar bg-white">
        <div className="navbar navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 stroke-mines-navy"
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
              className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-mines-navy border border-mines-silver/30"
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="text-lg hover:text-mines-silver transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-lg hover:text-mines-silver transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                  href="/apply"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="hover:bg-transparent active:bg-transparent ml-2">
            <div className="bg-white rounded-md px-1 py-0.5">
              <TrimmedImage
                src="/quantumlogo.png"
                alt="SQE Society of Quantum Engineers Logo"
                height={64}
                priority
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-mines-navy text-xl">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-mines-silver transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link href="/apply" className={accentCtaClassName + " mr-2 px-5 py-3"}>
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}
