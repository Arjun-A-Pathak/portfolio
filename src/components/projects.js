'use client'

import { ExternalLink, Section } from "lucide-react";
import { Card, CardContent } from "./card";
import { useState } from "react";

const Projects = ({portfolio}) => {
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
                  View <ExternalLink className="w-4 h-4" />
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

export default Projects;