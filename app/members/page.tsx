"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import Headshot from "../components/Headshot";
import { membersBySemester, ALL_SEMESTERS, CURRENT_SEMESTER } from "@/data/members";
import { siteConfig, pageShellClassName, pillActiveClassName, pillInactiveClassName, sectionDividerClassName } from "@/data/site";

export default function MembersPage() {
  const [selectedSemester, setSelectedSemester] = useState(CURRENT_SEMESTER);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const members = membersBySemester[selectedSemester] ?? [];

  const headshot = (member: (typeof members)[number]) => (
    <Headshot
      src={member.img}
      alt={member.name}
      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
    />
  );

  return (
    <div className={pageShellClassName}>
      <Header />

      <section className="bg-white px-6 pt-20 pb-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-mines-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg text-mines-silver mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the passionate students and researchers driving quantum engineering at {siteConfig.schoolShort}
          </motion.p>

          <motion.div
            className="flex gap-3 justify-center flex-wrap mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {ALL_SEMESTERS.map((semester) => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selectedSemester === semester
                    ? pillActiveClassName
                    : pillInactiveClassName
                }`}
              >
                {semester}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={`${selectedSemester}-${member.name}`}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-mines-silver/40 group-hover:border-mines-navy transition-colors">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="block w-full h-full cursor-pointer"
                      >
                        {headshot(member)}
                      </a>
                    ) : (
                      headshot(member)
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-mines-navy group-hover:text-mines-navy-dark transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-mines-silver mb-2">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-mines-silver hover:text-mines-navy transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
