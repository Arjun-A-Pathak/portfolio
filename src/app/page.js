'use client'

import { data as portfolio } from '../assets/data'
import Hero from "../components/hero";
import AboutComponent from "../components/about"
import Footer from "../components/footer"
import Experience from "../components/experience"
import Education from "../components/education"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Nav from "../components/nav"

export default function Home() {
  return (
    <div className="font-sans antialiased text-zinc-900 scroll-smooth">
      <Nav portfolio={portfolio} />
      <Hero portfolio={portfolio} />
      <AboutComponent portfolio={portfolio} />
      <Experience portfolio={portfolio} />
      <Education portfolio={portfolio} />
      <Projects portfolio={portfolio} />
      <Contact portfolio={portfolio} />
      <Footer portfolio={portfolio} />
    </div>
  );
}