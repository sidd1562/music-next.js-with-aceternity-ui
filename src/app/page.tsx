import Image from "next/image";

import Link from "next/link"

import Hero from "@/components/Hero/Hero";
import Courses from "@/components/Courses/Courses";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import TestimonialCards from '@/components/TestimonialCards/TestimonialCards'
import UpcomingWebinars from "@/components/UpcomingWebinars/UpcomingWebinars";
import Instructors from "@/components/Instructors/Instructors";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Courses />
      <ChooseUs />
      < TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer /> 
    </main>
  );
}
