import React from "react";
import { TaskCard } from "@/components/TaskCard.jsx";
import { Separator } from "@/components/ui/Separator.jsx";
import { cn } from "@/lib/utils";

export function TaskList({ tasks, categories, onToggle, onDelete, onEdit, onDragStart, onDragOver, onDrop, draggingId, filterCategory }) {
 const filteredTasks = filterCategory
 ? tasks.filter(t => t.categoryId === filterCategory)
 : tasks;

 return (
 <div className="mt-2">
 {filteredTasks.length ===0 && (
 <div className="text-zinc-400 text-center py-8">No tasks yet. Add your first task!</div>
 )}
 {filteredTasks.map((task, idx) => (
 <div
 key={task.id}
 draggable
 onDragStart={e => onDragStart(e, task.id)}
 onDragOver={e => onDragOver(e, task.id)}
 onDrop={e => onDrop(e, task.id)}
 onDragEnd={e => onDrop(e, null)}
 className={cn("select-none", draggingId === task.id && "opacity-70")}
 >
 <TaskCard
 task={task}
 category={categories.find(c => c.id === task.categoryId)}
 onToggle={onToggle}
 onDelete={onDelete}
 onEdit={onEdit}
 dragHandleProps={{}}
 isDragging={draggingId === task.id}
 />
 </div>
 ))}
 </div>
 );
}
