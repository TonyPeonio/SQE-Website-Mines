"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import { eventsByCycle, ALL_CYCLES } from "@/data/events";
import { pillActiveClassName, pillInactiveClassName, sectionDividerClassName, gridCardClassName } from "@/data/site";

export default function CommunityPage() {
  const [selectedCycle, setSelectedCycle] = useState(ALL_CYCLES[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const events = eventsByCycle[selectedCycle] ?? [];

  return (
    <div className="relative">
      <Header />

      <motion.div
        className="bg-white pl-10 pr-10 pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-white">
          <div className="px-6 mx-auto max-w-7xl lg:px-8 md:pt-4 lg:pt-6">

            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-mines-navy">Community</h1>

                {/* Cycle selector — aligned to the right */}
                <div className="flex gap-2 flex-wrap justify-end">
                  {ALL_CYCLES.map((cycle) => (
                    <button
                      key={cycle}
                      onClick={() => setSelectedCycle(cycle)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                        selectedCycle === cycle
                          ? pillActiveClassName
                          : pillInactiveClassName
                      }`}
                    >
                      {cycle}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-mines-silver text-lg mt-4">
                Events from our {selectedCycle} cycle.
              </p>
            </div>

            {events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 border border-mines-navy/10 overflow-hidden">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className={`px-16 py-20 border-r border-b border-mines-navy/10 ${gridCardClassName}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate="visible"
                    transition={{
                      delay: (index % 2) * 0.1,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  >
                    <div className="w-full h-80 overflow-hidden mb-4 mx-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="text-mines-silver text-sm mb-1">{event.date}</p>
                    <h3 className="text-mines-navy text-lg font-medium text-left">
                      {event.title}
                    </h3>
                    <p className="text-mines-silver text-sm mt-1">{event.speaker}</p>
                    <p className="text-mines-silver/80 text-sm mt-2">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="border border-mines-navy/10 py-24 text-center">
                <p className="text-mines-silver text-lg">No events yet for this cycle. Stay tuned!</p>
              </div>
            )}

          </div>
        </div>
      </motion.div>
      <br /><br />
      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
