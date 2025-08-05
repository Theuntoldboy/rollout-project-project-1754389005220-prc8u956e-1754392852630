import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, color = "default", ...props }) {
 return (
 <span
 className={cn(
 "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
 color === "blue" && "bg-categoryBlue text-white ring-categoryBlue",
 color === "green" && "bg-categoryGreen text-white ring-categoryGreen",
 color === "pink" && "bg-categoryPink text-white ring-categoryPink",
 color === "default" && "bg-zinc-100 text-zinc-800 ring-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-700",
 className
 )}
 {...props}
 />
 )
}

export { Badge }