import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/rexall_manager.jpeg";
import walgreenInternImg from "@/public/walgreens.png";
import pharmacistImg from "@/public/rexall.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Washington",
    location: "Seattle, WA",
    description:
      "Master of Science in Biomedical Regulatory Affairs, Pharmacy Administration and Pharmacy Policy and Regulatory Affairs",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Pharmacy Intern",
    location: "Seattle, WA",
    description:
      "Executed assigned duties under pharmacist supervision, including prescription entry, processing, filling, and dispensing",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Presnet",
  },
  {
    title: "Staff Pharmacist",
    location: "Burnaby, B.C.",
    description:
      "Supervised technicians, co-precepted UBC pharmacy students, and actively participated in educational sessions by healthcare professionals and pharmaceutical companies.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2021 - May 2023",
  },
  {
    title: "Interim Manager",
    location: "Chiliwack, B.C.",
    description:
      "Supervised a team of 4 pharmacy technicians, provided training for newly hired pharmacists, and encouraged collaborative teamwork.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Feb 2021",
  },
  {
    title: "District Supporting Pharmacist",
    location: "Chiliwack, B.C.",
    description:
      "Collaborated with team members to achieve organization-wide and pharmacy practice goals, including pick-up reminders and auto-refill enrollment",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 - Oct 2020",
  },
  {
    title: "Graduated The University of British Columbia",
    location: "Vancouver, B.C.",
    description:
      "I graduated from UBC with Doctor of Pharmacy - PharmD, Pharmacy",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Pharmacy Intern",
    description:
      "Supported pharmacists and healthcare providers in delivering patient care and services within the state scope of practice for pharmacy interns",
    tags: ["Patient Counseling", "Community Pharmacy"],
    imageUrl: walgreenInternImg,
  },
  {
    title: "Staff Pharmacist",
    description:
      "Ensured accurate medication verification and dispensing. Provided counseling on OTC/RX drugs, supplements, and medical supplies.",
    tags: ["Counseling", "Immunizer", "Medication", "MTM"],
    imageUrl: pharmacistImg,
  },
  {
    title: "Interim Manager",
    description:
      "Expanded store core professional services, increasing vaccination, medication reviews, and clinical follow-ups. Maintained profitable inventory control",
    tags: ["Leadership", "Teamwork", "Counseling", "MTM"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Patient Counseling",
  "Community Pharmacy",
  "Certified Immunizer",
  "Medication Therapy Management (MTM)",
  "Continuing Education",
  "Self Learning",
  "Team Leadership",
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Critical Thinking",
  "Analytical Skills",
  "Regulatory Compliance",
  "Customer Service",
  "Business",
  "Time Management",
  "Pharmaceutical Industry",
  "Pharmacy",
  "Pharmaceutics",
  "Pharmacists",
  "Pharmacology",
] as const;
