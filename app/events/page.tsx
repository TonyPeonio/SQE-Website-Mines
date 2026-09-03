"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { FEATURED_EVENTS } from "@/data/siteEvents";
import {
  pageShellClassName,
  sectionDividerClassName,
  siteConfig,
} from "@/data/site";

export default function EventsPage() {
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
            Events
          </motion.h1>
          <motion.p
            className="text-lg text-mines-silver mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Workshops, talks, and community gatherings from {siteConfig.name} at{" "}
            {siteConfig.schoolShort}.
          </motion.p>
        </div>
      </section>

      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          {FEATURED_EVENTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURED_EVENTS.map((event, index) => (
                <motion.article
                  key={event.id}
                  className="group border border-mines-navy/10 overflow-hidden hover:border-mines-navy/25 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="relative h-52 overflow-hidden bg-black flex items-center justify-center p-8">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={200}
                      height={120}
                      className="w-full max-w-[200px] h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-mines-silver text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.dates}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-mines-navy mb-2">
                      {event.title}
                    </h2>
                    <p className="text-mines-silver text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <Link
                      href={event.href}
                      className="inline-flex items-center text-sm font-medium text-mines-navy hover:text-mines-navy-dark transition-colors"
                    >
                      View event details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="border border-mines-navy/10 py-24 text-center">
              <p className="text-mines-silver text-lg">No upcoming events right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
