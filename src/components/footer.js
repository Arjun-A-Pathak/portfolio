import { Sparkles } from "lucide-react";

const Footer = ({ portfolio }) => {
    return <footer className="py-12 border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</div>
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1"><Sparkles className="w-4 h-4" /> Crafted with React & Tailwind</span>
            </div>
        </div>
    </footer>
}

export default Footer;