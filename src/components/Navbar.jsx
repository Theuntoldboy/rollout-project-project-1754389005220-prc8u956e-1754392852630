import React from "react";
import { Menu, CheckSquare, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/Button.jsx";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";

export function Navbar({ onAddCategory }) {
 const [mobileOpen, setMobileOpen] = React.useState(false);
 return (
 <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
 <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
 <div className="flex items-center gap-2">
 <CheckSquare className="w-7 h-7 text-primary" />
 <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">Modern Todo</span>
 </div>
 <div className="hidden md:flex items-center gap-4">
 <a href="#categories" className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors text-sm font-medium">Categories</a>
 <a href="#tasks" className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors text-sm font-medium">Tasks</a>
 <Button size="sm" variant="secondary" onClick={onAddCategory}>+ Category</Button>
 <ThemeToggle />
 </div>
 <div className="md:hidden flex items-center gap-1">
 <ThemeToggle />
 <Button variant="ghost" size="sm" aria-label="Open menu" onClick={() => setMobileOpen(v => !v)}>
 <Menu className="w-6 h-6" />
 </Button>
 </div>
 </nav>
 {mobileOpen && (
 <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-4 pb-4 animate-in fade-in slide-in-from-top-2">
 <a href="#categories" className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors text-sm font-medium">Categories</a>
 <a href="#tasks" className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors text-sm font-medium">Tasks</a>
 <Button size="sm" variant="secondary" className="w-full mt-2" onClick={() => { setMobileOpen(false); onAddCategory(); }}>+ Category</Button>
 </div>
 )}
 </header>
 );
}
