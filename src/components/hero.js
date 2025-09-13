'use-client'

import { motion } from 'framer-motion'
import Button from "./button";
import { Card, CardContent } from "./card";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

const Hero = ({ portfolio }) => (
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
                    <a href="#projects"><Button className="rounded-2xl">View Projects <ArrowUpRight className="w-4 h-4 ml-1" /></Button></a>
                    <a href="#contact"><Button variant="outline" className="rounded-2xl">Contact Me <ArrowRight className="w-4 h-4 ml-1" /></Button></a>
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
                        <div className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-700"><Mail className="w-4 h-4" />{portfolio.email}</div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Hero;