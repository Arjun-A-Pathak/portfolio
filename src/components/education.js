import { School } from "lucide-react";
import { Card, CardContent } from "./card";
import Section from "./section";

const Education = ({portfolio}) => (
  <Section id="education" title="Education">
    <div className="grid md:grid-cols-2 gap-4">
      {portfolio.education.map((e, i) => (
        <Card key={i} className="rounded-2xl">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-zinc-700"><School className="w-5 h-5" /> <span className="font-semibold">{e.school}</span></div>
            <div className="text-sm text-zinc-600">{e.degree}</div>
            <div className="text-xs text-zinc-500 mt-1">{e.period}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default Education;