import React from "react";
import { Github, Heart } from "lucide-react";

export function Footer() {
 return (
 <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6 mt-12">
 <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
 <div className="text-sm text-zinc-500">© {new Date().getFullYear()} Modern Todo. All rights reserved.</div>
 <div className="flex items-center gap-3">
 <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors" aria-label="GitHub">
 <Github className="w-5 h-5" />
 </a>
 <span className="flex items-center gap-1 text-zinc-400">Made with <Heart className="w-4 h-4 text-pink-500" /> by AI</span>
 </div>
 </div>
 </footer>
 );
}
