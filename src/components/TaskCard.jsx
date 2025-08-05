import React from "react";
import { Card, CardContent } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Check, Trash2, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

export function TaskCard({ task, category, onToggle, onDelete, onEdit, dragHandleProps, isDragging }) {
 return (
 <Card
 className={cn(
 "flex items-center gap-3 px-3 py-2 mb-2 transition-shadow cursor-grab",
 isDragging && "ring-2 ring-primary shadow-lg scale-105 bg-indigo-50 dark:bg-zinc-800"
 )}
 style={{ opacity: isDragging ?0.7 :1 }}
 {...dragHandleProps}
 >
 <button
 aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
 onClick={() => onToggle(task.id)}
 className={cn(
 "rounded-full border-2 w-5 h-5 flex items-center justify-center mr-2 transition-colors focus-visible:ring-2 focus-visible:ring-primary",
 task.completed ? "bg-primary border-primary" : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
 )}
 >
 {task.completed && <Check className="w-4 h-4 text-white" />}
 </button>
 <div className="flex-1 min-w-0">
 <div className={cn("font-medium text-sm truncate", task.completed && "line-through text-zinc-400")}>{task.title}</div>
 {task.description && (
 <div className="text-xs text-zinc-500 truncate">{task.description}</div>
 )}
 </div>
 {category && <Badge color={category.color} className="ml-2" />}
 <button aria-label="Edit task" onClick={() => onEdit(task)} className="ml-2 text-zinc-400 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded">
 <Edit className="w-4 h-4" />
 </button>
 <button aria-label="Delete task" onClick={() => onDelete(task.id)} className="ml-1 text-zinc-400 hover:text-red-500 focus-visible:ring-2 focus-visible:ring-red-500 rounded">
 <Trash2 className="w-4 h-4" />
 </button>
 </Card>
 );
}
