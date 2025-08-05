import * as React from "react"
import { cn } from "@/lib/utils"

function Avatar({ className, src, alt, ...props }) {
 return (
 <span className={cn("inline-block h-8 w-8 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700", className)}>
 {src ? (
 <img src={src} alt={alt} className="h-full w-full object-cover" />
 ) : (
 <span className="flex h-full w-full items-center justify-center text-zinc-400 text-xs">{alt?.[0] || '?'}</span>
 )}
 </span>
 )
}

export { Avatar }