import React from "react";
import { Input } from "@/components/ui/Input.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Label } from "@/components/ui/Label.jsx";

export function AddTaskForm({ categories, onSubmit, initial, onCancel }) {
 const [title, setTitle] = React.useState(initial?.title || "");
 const [description, setDescription] = React.useState(initial?.description || "");
 const [categoryId, setCategoryId] = React.useState(initial?.categoryId || (categories[0]?.id || ""));

 function handleSubmit(e) {
 e.preventDefault();
 if (!title.trim()) return;
 onSubmit({
 title: title.trim(),
 description: description.trim(),
 categoryId,
 });
 setTitle("");
 setDescription("");
 setCategoryId(categories[0]?.id || "");
 }

 return (
 <form onSubmit={handleSubmit} className="flex flex-col gap-3">
 <div>
 <Label htmlFor="task-title">Title</Label>
 <Input
 id="task-title"
 value={title}
 onChange={e => setTitle(e.target.value)}
 placeholder="What needs to be done?"
 required
 autoFocus
 />
 </div>
 <div>
 <Label htmlFor="task-desc">Description</Label>
 <Input
 id="task-desc"
 value={description}
 onChange={e => setDescription(e.target.value)}
 placeholder="Optional details"
 />
 </div>
 <div>
 <Label htmlFor="task-category">Category</Label>
 <select
 id="task-category"
 className="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
 value={categoryId}
 onChange={e => setCategoryId(e.target.value)}
 >
 {categories.map(cat => (
 <option key={cat.id} value={cat.id}>{cat.name}</option>
 ))}
 </select>
 </div>
 <div className="flex gap-2 mt-2">
 <Button type="submit" variant="default">{initial ? "Save" : "Add Task"}</Button>
 {onCancel && <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>}
 </div>
 </form>
 );
}
