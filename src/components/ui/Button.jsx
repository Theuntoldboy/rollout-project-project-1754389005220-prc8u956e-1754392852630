import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
 return (
 <button
 className={cn(
 "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
 variant === "default" && "bg-primary text-primary-foreground hover:bg-indigo-600",
 variant === "secondary" && "bg-accent text-accent-foreground hover:bg-orange-500",
 variant === "ghost" && "bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-800",
 size === "default" && "h-10 px-4 py-2",
 size === "sm" && "h-8 px-3",
 size === "lg" && "h-12 px-6 text-base",
 className
 )}
 ref={ref}
 {...props}
 />
 )
})
Button.displayName = "Button"

export { Button }