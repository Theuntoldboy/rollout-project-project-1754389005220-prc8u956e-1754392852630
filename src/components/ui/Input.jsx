import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, ...props }, ref) => {
 return (
 <input
 ref={ref}
 className={cn(
 "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100",
 className
 )}
 {...props}
 />
 )
})
Input.displayName = "Input"

export { Input }