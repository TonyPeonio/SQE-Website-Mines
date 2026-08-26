"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Laptop, Briefcase, Camera, Linkedin } from "lucide-react";
import Header from "../components/Header";
import { membersBySemester, ALL_SEMESTERS, CURRENT_SEMESTER, type Member } from "../../data/members";
import { siteConfig } from "@/data/site";

function LeadershipGrid({ members }: { members: Member[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {members.map((leader, index) => (
        <motion.div
          key={leader.name}
          className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                delay: index * 0.1 
              },
            },
          }}
        >
          <figure>
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="flex mt-3 justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold">{leader.name}</h2>
              <p className="text-xs flex items-center gap-1.5 flex-wrap">
                <span>{leader.role}</span>
              </p>
            </div>
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 transition-colors"
                aria-label={`${leader.name} LinkedIn`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 hover:text-zinc-200 transition-colors" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AboutPage() {
  const [selectedSemester, setSelectedSemester] = useState(CURRENT_SEMESTER);
  const members = membersBySemester[selectedSemester] ?? [];

  return (
    <div className="relative bg-[#181818]">
      <Header />

      <section className="relative w-screen h-[70vh]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
        <Image src="/community/group.png" alt="SQE Team at Mines" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-start justify-center pt-16 sm:pt-20">
          <div className="text-center text-white px-6">
            <motion.h1
              className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay:0.0, duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-bold">Who We Are</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <motion.div
        className="bg-[#181818] pl-4 pr-4 md:pl-10 md:pr-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-2 md:px-6 mx-auto space-y-16 max-w-7xl md:space-y-24 md:pt-6 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="lg:w-1/2 lg:pr-6">
              <br />
              <p className="mt-8 text-lg text-zinc-300">
                {siteConfig.name} is a student-led organization at {siteConfig.school} dedicated to advancing quantum engineering and building a strong quantum community. We unite passionate students and faculty to explore the frontiers of quantum technology.
              </p>
              <br />
              <p className="mb-8 text-lg text-zinc-300">
                {siteConfig.tagline}
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end">
              <figure className="border border-white/20 rounded-lg overflow-hidden"><Image src="/community/blochlogo.png" width={400} height={240} alt="SQE Bloch Logo"/></figure>
            </div>
          </div>
          <section className="relative max-w-7xl mx-auto">

            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-12">
              Our Focus Areas
            </h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Laptop className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl text-white font-semibold">Research</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                   Students collaborate with faculty on cutting-edge quantum research projects in quantum computing, quantum optics, and quantum algorithms.
                </p>
              </div>

              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Briefcase className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  We organize workshops, seminars, and hands-on lab sessions to educate students about quantum engineering and its applications.
                </p>
              </div>

              <div className="px-8 py-16 h-80 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Camera className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Community</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  We build connections between students and faculty, creating a supportive environment for quantum engineering education and research.
                </p>
              </div>
            </motion.div>
          </section>

          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Members
              </h1>

              <div className="flex gap-2 flex-wrap justify-end">
                {ALL_SEMESTERS.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      selectedSemester === semester
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-zinc-400 border-white/20 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {semester}
                  </button>
                ))}
              </div>
            </div>

            <LeadershipGrid members={members} />
          </div>
        </div>

        <br />
        <br />
        <br />
      </motion.div>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
