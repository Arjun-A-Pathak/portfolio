'use client'

import { Briefcase, Section, Trophy } from "lucide-react";
import { Card, CardContent } from "./card";
import { motion } from "framer-motion";

const Experience = ({portfolio}) => (
  <Section id="experience" title="Experience">
    <div className="relative pl-6 border-l">
      {portfolio.experience.map((exp, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.03 }} className="mb-10">
          <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-zinc-900"></div>
          <div className="ml-2">
            <div className="flex items-center gap-2 text-sm text-zinc-600"><Briefcase className="w-4 h-4" /> {exp.period}</div>
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
            <div className="flex items-center gap-2 text-zinc-700"><Trophy className="w-5 h-5" /> <span className="font-semibold">{a.title}</span></div>
            <p className="text-sm text-zinc-600 mt-2">{a.blurb}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default Experience;