"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a 3.5-year tenure as a community pharmacist in Canada, I have honed exceptional interpersonal communication and continuous self-growth skills. I excel in high-pressure, fast-paced settings, with experience in renal, compounding, specialty, and clinical pharmacies. Currently, I'm a foreign pharmacy graduate intern in the US, actively working towards obtaining a pharmacist license in the States. Concurrently, I am pursuing a Master of Science in Biomedical Regulatory Affairs at the University of Washington. I am eagerly seeking opportunities for an industrial internship in regulatory affairs.
      </p>
    </motion.section>
  );
}
