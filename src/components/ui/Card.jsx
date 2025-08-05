import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
 <div
 ref={ref}
 className={cn(
 "rounded-xl bg-card shadow-card border border-zinc-200 dark:bg-card-dark dark:border-zinc-800",
 className
 )}
 {...props}
 />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
 <div ref={ref} className={cn("p-4 border-b border-zinc-100 dark:border-zinc-700", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
 <h3 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
 <div ref={ref} className={cn("p-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }