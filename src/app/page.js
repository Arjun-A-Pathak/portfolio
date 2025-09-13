'use client'

import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Download, ArrowUpRight, ArrowRight, Trophy, School, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const portfolio = {
  name: "Arjun Pathak",
  role: "Data Analyst / Business Analyst",
  tagline: "I turn messy data into clear stories and build useful tools.",
  location: "Bengluru, India",
  email: "arjunpathak2018@gmail.com",
  phone: "+91 8770232036",
  socials: {
    github: "https://github.com/Arjun-A-Pathak",
    linkedin: "https://www.linkedin.com/in/arjun-pathak-/",
    resume: "https://github.com/Arjun-A-Pathak/portfolio/blob/main/ARJUN_Pathak_Data_Analyst.pdf", // paste a resume link or file URL
  },
  skills: [ 
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Excel",
    "Statistical Analysis",
    "Data Visualization",
    "A/B Testing",
  ],
  highlights: [
    { label: "Projects", value: 12 },
    { label: "Dashboards", value: 8 },
    { label: "Awards", value: 5 },
    { label: "Cups of Coffee", value: 999 },
  ],
  experience: [
    {
      company: "Lucent Pvt Ltd",
      title: "Data Analyst Intern",
      period: "2024 – Present",
      summary:
        "Built interactive dashboards, conducted statistical analysis, and collaborated cross‑functionally to drive data‑informed decisions.",
      bullets: [
        "Developed Power BI dashboards tracking KPIs",
        "Forecasting models reaching ~97% accuracy",
        "Improved operational efficiency via data insights",
      ],
    },
    {
      company: "Globiva Services Pvt Ltd",
      title: "Associate",
      period: "2023 – 2024",
      summary:
        "Managed AMEX data and optimized sales strategies across multiple products using analytics and experimentation.",
      bullets: [
        "₹1.2Cr+ revenue impact with optimized strategies",
        "Mentored 100+ new joiners and refined playbooks",
        "Top performer multiple times",
      ],
    },
  ],
  achievements: [
    { title: "Top Performer (x2)", blurb: "Recognized for outstanding delivery and impact." },
    { title: "Quality Excellence", blurb: "Awarded for process and data quality improvements." },
    { title: "Hackathon Winner", blurb: "Built an analytics app in 24 hours." },
  ],
  education: [
    {
      school: "Sharda University",
      degree: "Master of Computer Applications (MCA)",
      period: "2024 – 2026",
    },
    {
      school: "Bhaskaracharya College of Applied Sciences",
      degree: "B.Sc. Mathematics & Computing",
      period: "2021 – 2024",
    },
  ],
  projectTabs: ["Python", "SQL", "Power BI", "Excel"],
  projects: [
    {
      title: "Domino’s Business Analytics",
      tag: "SQL",
      description:
        "Analyzed sales trends, cohort behaviors, and ops performance using advanced SQL + PowerQuery.",
      link: "https://github.com/yourhandle/project-1",
    },
    {
      title: "Customer Churn Analysis",
      tag: "Python",
      description:
        "Built churn models and retention reports; surfaced drivers with SHAP‑style explanations.",
      link: "https://github.com/yourhandle/project-2",
    },
    {
      title: "Blinkit Revenue & Sales Dashboard",
      tag: "Power BI",
      description:
        "Interactive BI dashboard covering order trends, AOV, and customer segments.",
      link: "https://github.com/yourhandle/project-3",
    },
    {
      title: "Cafe Management System",
      tag: "Excel",
      description:
        "Lightweight business tracker for orders, inventory, and daily P&L.",
      link: "https://github.com/yourhandle/project-4",
    },
  ],
};

export default function Home() {
  return (
    <div className="font-sans antialiased text-zinc-900 scroll-smooth">
    <Nav />
    <Hero />
    {/* <AboutComponent /> */}
    <Experience />
    <Education />
    <Projects />
    <Contact />
    <footer className="py-12 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1"><Sparkles className="w-4 h-4"/> Crafted with React & Tailwind</span>
        </div>
      </div>
    </footer>
  </div>
  );
}


const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3"
      >
        <Sparkles className="w-6 h-6" /> {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Nav = () => {
  const items = [
    { href: "#start", label: "Start" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Connect" },
  ];
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#start" className="font-bold tracking-tight text-xl">{portfolio.name}</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:opacity-80">{it.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-zinc-100">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-zinc-100">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={portfolio.socials.resume} target="_blank" rel="noreferrer" className="ml-1">
            <Button size="sm" className="rounded-2xl"> <Download className="w-4 h-4 mr-1"/> Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="start" className="pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-zinc-50 to-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">{portfolio.name}</span>
        </motion.h1>
        <p className="mt-4 text-lg text-zinc-700">{portfolio.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects"><Button className="rounded-2xl">View Projects <ArrowUpRight className="w-4 h-4 ml-1"/></Button></a>
          <a href="#contact"><Button variant="outline" className="rounded-2xl">Contact Me <ArrowRight className="w-4 h-4 ml-1"/></Button></a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portfolio.highlights.map((h) => (
            <Card key={h.label} className="rounded-2xl">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{h.value}</div>
                <div className="text-sm text-zinc-600">{h.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square rounded-3xl shadow-xl border bg-gradient-to-tr from-white to-zinc-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-5xl">👋</div>
            <div className="mt-3 text-zinc-600">Based in {portfolio.location}</div>
            <div className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-700"><Mail className="w-4 h-4"/>{portfolio.email}</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <p className="text-zinc-700 leading-7">
          I’m a data‑driven professional with a knack for turning business questions into measurable results. I love experimenting, building dashboards, and telling clear stories with data. Outside work, I enjoy teaching and travel photography.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {portfolio.skills.map((s) => (
            <span key={s} className="text-sm bg-zinc-100 border rounded-xl px-3 py-1">{s}</span>
          ))}
        </div>
      </div>
      <Card className="rounded-2xl">
        <CardContent className="p-5 space-y-3 text-sm text-zinc-700">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {portfolio.location}</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> {portfolio.phone}</div>
          <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4"/> {portfolio.email}</a>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="relative pl-6 border-l">
      {portfolio.experience.map((exp, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.03 }} className="mb-10">
          <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-zinc-900"></div>
          <div className="ml-2">
            <div className="flex items-center gap-2 text-sm text-zinc-600"><Briefcase className="w-4 h-4"/> {exp.period}</div>
            <h3 className="text-xl font-semibold mt-1">{exp.title} • <span className="text-zinc-600">{exp.company}</span></h3>
            <p className="text-zinc-700 mt-2">{exp.summary}</p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm list-disc pl-5">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-8 grid sm:grid-cols-3 gap-4">
      {portfolio.achievements.map((a, i) => (
        <Card key={i} className="rounded-2xl">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-zinc-700"><Trophy className="w-5 h-5"/> <span className="font-semibold">{a.title}</span></div>
            <p className="text-sm text-zinc-600 mt-2">{a.blurb}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid md:grid-cols-2 gap-4">
      {portfolio.education.map((e, i) => (
        <Card key={i} className="rounded-2xl">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-zinc-700"><School className="w-5 h-5"/> <span className="font-semibold">{e.school}</span></div>
            <div className="text-sm text-zinc-600">{e.degree}</div>
            <div className="text-xs text-zinc-500 mt-1">{e.period}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const tags = ["All", ...portfolio.projectTabs];
  const filtered = active === "All" ? portfolio.projects : portfolio.projects.filter((p) => p.tag === active);
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-1.5 rounded-2xl border ${active === t ? "bg-zinc-900 text-white" : "bg-white hover:bg-zinc-50"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <Card key={i} className="rounded-2xl hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block border">{p.tag}</div>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">
                  View <ExternalLink className="w-4 h-4"/>
                </a>
              </div>
              <p className="text-sm text-zinc-700 mt-3">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold">Let’s work together</h3>
        <p className="text-zinc-700 mt-2">
          Have a question, a collaboration idea, or a role in mind? Reach out via email or LinkedIn.
        </p>
        <div className="mt-4 space-y-2 text-sm text-zinc-700">
          <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4"/> {portfolio.email}</a>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> {portfolio.phone}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {portfolio.location}</div>
          <div className="flex gap-2 pt-3">
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Github className="w-5 h-5"/></a>
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Linkedin className="w-5 h-5"/></a>
            <a href={portfolio.socials.resume} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Download className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm">Your Name</label>
          <input className="w-full mt-1 px-3 py-2 border rounded-2xl" placeholder="Jane Doe"/>
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input className="w-full mt-1 px-3 py-2 border rounded-2xl" placeholder="jane@example.com"/>
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea className="w-full mt-1 px-3 py-2 border rounded-2xl min-h-[120px]" placeholder="Tell me about your project..."/>
        </div>
        <Button type="button" className="rounded-2xl">Send</Button>
        <p className="text-xs text-zinc-500">(Demo form — wire this to Formspree, Getform, or Google Forms.)</p>
      </form>
    </div>
  </Section>
);

export function Button({
  children,
  className = "",
  variant = "default",
  size = "base",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none";

  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline:
      "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 bg-white",
  };

  const sizes = {
    base: "px-4 py-2 text-sm rounded-md",
    sm: "px-3 py-1.5 text-xs rounded-md",
    lg: "px-5 py-3 text-base rounded-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ className = "", children }) {
  return (
    <div className={`bg-white border shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}