import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Button from "./button";
import Section from "./section";

const Contact = ({portfolio}) => (
  <Section id="contact" title="Contact">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold">Let’s work together</h3>
        <p className="text-zinc-700 mt-2">
          Have a question, a collaboration idea, or a role in mind? Reach out via email or LinkedIn.
        </p>
        <div className="mt-4 space-y-2 text-sm text-zinc-700">
          <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4" /> {portfolio.email}</a>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {portfolio.phone}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {portfolio.location}</div>
          <div className="flex gap-2 pt-3">
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Github className="w-5 h-5" /></a>
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Linkedin className="w-5 h-5" /></a>
            <a href={portfolio.socials.resume} target="_blank" rel="noreferrer" className="p-2 rounded-xl border hover:bg-zinc-50"><Download className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm">Your Name</label>
          <input className="w-full mt-1 px-3 py-2 border rounded-2xl" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input className="w-full mt-1 px-3 py-2 border rounded-2xl" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea className="w-full mt-1 px-3 py-2 border rounded-2xl min-h-[120px]" placeholder="Tell me about your project..." />
        </div>
        <Button type="button" className="rounded-2xl">Send</Button>
        <p className="text-xs text-zinc-500">(Demo form — wire this to Formspree, Getform, or Google Forms.)</p>
      </form>
    </div>
  </Section>
);

export default Contact;