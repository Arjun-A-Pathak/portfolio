import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from './card';
import Section from './section'


const AboutComponent = ({portfolio}) => (
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
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {portfolio.location}</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {portfolio.phone}</div>
          <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4" /> {portfolio.email}</a>
        </CardContent>
      </Card>
    </div>
  </Section>
);

export default AboutComponent;