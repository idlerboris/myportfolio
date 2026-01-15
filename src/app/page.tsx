"use client"

import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/10">
      <div className="absolute top-0 right-0 p-6 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
