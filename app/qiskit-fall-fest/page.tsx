"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Cpu, Users, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { qiskitFallFest } from "@/data/qiskitFallFest";
import { accentCtaClassName, outlineBtnClassName, sectionDividerClassName, gridCardClassName, siteConfig } from "@/data/site";

const highlightIcons = [Cpu, Zap, Users, Calendar];

export default function QiskitFallFestPage() {
  const ctaHref = qiskitFallFest.registrationUrl ?? siteConfig.social.newsletter;
  const ctaLabel = qiskitFallFest.registrationUrl
    ? "Register Now"
    : "Join Newsletter for Updates";
  const ctaExternal = !qiskitFallFest.registrationUrl;

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-mines-black overflow-hidden">
      <Header />

      <main className="relative flex-grow">
        {/* Hero */}
        <section className="relative w-full h-[60vh] min-h-[420px] bg-black">
          <div className="absolute inset-0 flex items-center justify-center px-12">
            <Image
              src="/logos/ibm.png"
              alt="IBM Quantum"
              width={320}
              height={256}
              priority
              className="w-full max-w-sm sm:max-w-md h-auto object-contain opacity-90"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.p
              className="text-mines-silver-light text-sm sm:text-base font-semibold tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {qiskitFallFest.dates}
            </motion.p>
            <motion.h1
              className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {qiskitFallFest.title}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              {qiskitFallFest.tagline}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href={ctaHref}
                {...(ctaExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={accentCtaClassName}
              >
                {ctaLabel}
              </a>
              <Link
                href="/events"
                className={outlineBtnClassName}
              >
                View Events
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  What is Qiskit Fall Fest?
                </h2>
                <p className="text-lg text-mines-silver leading-relaxed">
                  {qiskitFallFest.description}
                </p>
                <p className="mt-4 text-lg text-mines-silver leading-relaxed">
                  Hosted by {siteConfig.name} at {siteConfig.school}, this week-long
                  event brings together students, researchers, and quantum enthusiasts
                  for an immersive dive into the world of quantum computing.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  <Image
                    src="/logos/ibm.png"
                    alt="IBM Quantum"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Join Us
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-mines-navy/10 overflow-hidden">
              {qiskitFallFest.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Cpu;
                return (
                  <motion.div
                    key={item.title}
                    className={`px-8 py-10 border-r border-b border-mines-navy/10 ${gridCardClassName}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-mines-navy mb-4" />
                    <h3 className="text-mines-navy text-lg font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-mines-silver text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Week Schedule
              </h2>
              <p className="text-mines-silver text-lg">
                Five days of workshops and activities — times and locations to be announced.
              </p>
            </motion.div>
            <div className="border border-mines-navy/10 overflow-hidden">
              {qiskitFallFest.schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-8 px-8 py-8 border-b border-mines-navy/10 last:border-b-0 ${gridCardClassName}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                >
                  <div className="sm:w-44 shrink-0">
                    <p className="text-mines-navy text-sm font-semibold">
                      {item.day}
                    </p>
                    <p className="text-mines-silver text-sm mt-1">{item.time}</p>
                  </div>
                  <div>
                    <h3 className="text-mines-navy text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="text-mines-silver text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <motion.div
            className="mx-auto max-w-3xl text-center border border-mines-navy/10 px-8 py-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to dive into quantum?
            </h2>
            <p className="text-mines-silver mb-8">
              Stay tuned for registration details and exact event times. Join our
              newsletter to be the first to know.
            </p>
            <a
              href={ctaHref}
              {...(ctaExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={accentCtaClassName}
            >
              {ctaLabel}
            </a>
          </motion.div>
        </section>
      </main>

      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
