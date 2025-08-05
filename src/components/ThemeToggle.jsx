import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button.jsx";

export function ThemeToggle() {
 const [theme, setTheme] = React.useState(() => {
 if (typeof window !== "undefined") {
 return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
 }
 return "light";
 });

 React.useEffect(() => {
 if (theme === "dark") {
 document.documentElement.classList.add("dark");
 } else {
 document.documentElement.classList.remove("dark");
 }
 localStorage.setItem("theme", theme);
 }, [theme]);

 return (
 <Button
 variant="ghost"
 size="sm"
 aria-label="Toggle dark mode"
 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
 className="ml-2"
 >
 {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
 </Button>
 );
}
