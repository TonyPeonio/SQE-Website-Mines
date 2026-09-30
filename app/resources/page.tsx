"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
  RESOURCE_SECTIONS,
  type ResourceItem,
  type ResourceSection,
} from "@/data/resources";
import {
  accentCtaClassName,
  gridCardClassName,
  outlineBtnClassName,
  pageShellClassName,
  sectionDividerClassName,
} from "@/data/site";

function ResourceCard({ item }: { item: ResourceItem }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-mines-navy font-medium leading-snug">
          {item.title}
        </h4>
        {item.url && (
          <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5 text-mines-silver group-hover:text-mines-navy transition-colors" />
        )}
      </div>
      {item.subtitle && (
        <p className="text-mines-navy/70 text-sm mt-1">{item.subtitle}</p>
      )}
      {item.description && (
        <p className="text-mines-silver text-sm mt-2 leading-relaxed">
          {item.description}
        </p>
      )}
    </>
  );

  return (
    <div className={`group px-6 py-6 h-full ${gridCardClassName}`}>
      {item.url?.startsWith("/") ? (
        <Link href={item.url} className="block">
          {body}
        </Link>
      ) : item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {body}
        </a>
      ) : (
        body
      )}
      {item.contact && (
        <p className="text-mines-silver text-sm mt-2">
          Ask:{" "}
          <a
            href={`mailto:${item.contact.email}`}
            className="text-mines-navy underline underline-offset-2 hover:text-mines-navy-dark"
          >
            {item.contact.name}
          </a>
        </p>
      )}
    </div>
  );
}

function Section({ section }: { section: ResourceSection }) {
  return (
    <section id={section.id} className="px-6 py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-mines-navy mb-4">
            {section.title}
          </h2>
          {section.intro?.map((paragraph) => (
            <p
              key={paragraph}
              className="text-mines-silver text-lg leading-relaxed max-w-3xl mt-3"
            >
              {paragraph}
            </p>
          ))}
          {section.cta && (
            <div className="mt-6">
              {section.cta.url ? (
                <a
                  href={section.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={accentCtaClassName}
                >
                  {section.cta.label}
                </a>
              ) : (
                <span className={`${outlineBtnClassName} cursor-default`}>
                  {section.cta.pendingLabel}
                </span>
              )}
            </div>
          )}
        </motion.div>

        <div className="space-y-10">
          {section.groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-mines-silver mb-4">
                {group.heading}
              </h3>
              {group.note && (
                <p className="text-mines-silver text-sm -mt-2 mb-4">
                  {group.note}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <ResourceCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
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
            Resources
          </motion.h1>
          <motion.p
            className="text-lg text-mines-silver mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Books, videos, research groups, job boards, and funding to help you
            grow as a quantum engineer at Mines.
          </motion.p>
          <motion.nav
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Resource sections"
          >
            {RESOURCE_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={outlineBtnClassName}
              >
                {section.navLabel}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {RESOURCE_SECTIONS.map((section, index) => (
        <React.Fragment key={section.id}>
          {index > 0 && (
            <div className="mx-auto max-w-6xl px-6">
              <div className={sectionDividerClassName} />
            </div>
          )}
          <Section section={section} />
        </React.Fragment>
      ))}

      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}
