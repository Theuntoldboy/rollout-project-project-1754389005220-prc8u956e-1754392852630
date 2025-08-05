import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
 <div
 ref={ref}
 role={decorative ? "presentation" : "separator"}
 aria-orientation={orientation}
 className={cn(
 orientation === "horizontal"
 ? "h-px w-full bg-zinc-200 dark:bg-zinc-700"
 : "w-px h-full bg-zinc-200 dark:bg-zinc-700",
 className
 )}
 {...props}
 />
))
Separator.displayName = "Separator"

export { Separator }