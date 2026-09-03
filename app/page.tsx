"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, Newspaper, HeartHandshake } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/footer";
import { siteConfig, accentCtaClassName, outlineBtnClassName, pageShellClassName, sectionDividerClassName, gridCardClassName } from "@/data/site";

const ALL_LOGOS = [
  "/logos/ibm.png",
  "/logos/psiquantuml.png",
  "/logos/nvidia.png",
  "/logos/ionq.png",
  "/logos/alice_and_bob.png",
  "/logos/quantinuum.png",
  "/logos/iqm.png",
  "/logos/google.png",
  "/logos/quera.png",
  "/logos/dwave.png",
  "/logos/qbraid.png",
  "/logos/hrl.png",
];

export default function Home() {
  return (
    <div className={pageShellClassName}>
      <Header />
      <section className="bg-white flex flex-col items-center text-center pt-6 pb-20 sm:pt-24 sm:pb-20">
        <br></br>
        <div className="max-w-4xl mx-auto mb-5">
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-mines-navy pb-2">
            SQE Society of Quantum Engineers
          </h1>
          <motion.h2
            className="mt-2 font-display tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight font-light text-mines-silver"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            at {siteConfig.school}
          </motion.h2>
          <motion.p
            className="mt-10 text-sm sm:text-base md:text-lg text-mines-silver"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div
            className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <a href="/about" className={outlineBtnClassName}>
              About Us
            </a>
            <a href="/apply" className={accentCtaClassName}>
              Join SQE
            </a>
          </motion.div>
        </div>

        <div className="relative -mx-10 mt-10 w-full aspect-video [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
          <Image
            src="/home.jpeg"
            alt="SQE Home"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-white px-6 py-8 sm:py-20">
        <div className="mx-auto max-w-6xl text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-mines-navy"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
        </div>
        <br></br>
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 border border-mines-navy/10 overflow-hidden relative z-20"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
            <div className={`px-8 py-16 h-80 border-b border-r border-mines-navy/10 ${gridCardClassName}`}>
              <div className="mb-6">
                <Users className="w-6 h-6 text-mines-navy mb-4" />
                <h3 className="text-xl font-semibold text-mines-navy">Research Collaboration</h3>
              </div>
              <p className="text-mines-silver leading-relaxed">
              We collaborate with faculty and industry partners to advance quantum
              research and develop cutting-edge technologies.
              </p>
            </div>
            <div className={`px-8 py-16 h-80 border-b border-mines-navy/10 ${gridCardClassName}`}>
              <div className="mb-6">
                <Code className="w-6 h-6 text-mines-navy mb-4" />
                <h3 className="text-xl font-semibold text-mines-navy">Quantum Engineering</h3>
              </div>
              <p className="text-mines-silver leading-relaxed">
              We work on quantum algorithms, quantum computing systems, and quantum
              optics to push the boundaries of quantum technology.
              </p>
            </div>
            <div className={`px-8 py-16 h-80 border-r border-mines-navy/10 ${gridCardClassName}`}>
              <div className="mb-6">
                <Newspaper className="w-6 h-6 text-mines-navy mb-4" />
                <h3 className="text-xl font-semibold text-mines-navy">Research</h3>
              </div>
              <p className="text-mines-silver leading-relaxed">
              We work on quantum engineering research and contribute to the
              community through collaborative projects and presentations.
              </p>
            </div>
            <div className={`px-8 py-16 h-80 ${gridCardClassName}`}>
              <div className="mb-6">
                <HeartHandshake className="w-6 h-6 text-mines-navy mb-4" />
                <h3 className="text-xl font-semibold text-mines-navy">Community Building</h3>
              </div>
              <p className="text-mines-silver leading-relaxed">
                We foster connections between students and faculty through events,
                workshops, and collaborative research projects.
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 pt-4 pb-16">
        <div className="mx-auto max-w-6xl text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-16 text-mines-navy"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Where We Go
          </motion.h2>
        </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {ALL_LOGOS.slice(0, 12).map((src, i) => {
                const row = Math.floor(i / 4);
                const col = i % 4;
                const delay = (row + col) * 0.1;
                
                return (
                  <motion.div
                    key={`logo-${i}`}
                    className="relative h-24 bg-black border border-white/10 p-4 flex items-center justify-center group hover:bg-zinc-900 transition-colors"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: delay,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Image 
                      src={src} 
                      alt="Company logo" 
                      width={80} 
                      height={64} 
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition"
                    />
                  </motion.div>
                );
              })}
            </div>
        </div>
      </section>
      <br></br>
      <br></br>

      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
