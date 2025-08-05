import React from "react";
import { Input } from "@/components/ui/Input.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Label } from "@/components/ui/Label.jsx";

const COLORS = [
 { value: "blue", label: "Blue" },
 { value: "green", label: "Green" },
 { value: "pink", label: "Pink" },
];

export function AddCategoryForm({ onSubmit, initial, onCancel }) {
 const [name, setName] = React.useState(initial?.name || "");
 const [color, setColor] = React.useState(initial?.color || COLORS[0].value);

 function handleSubmit(e) {
 e.preventDefault();
 if (!name.trim()) return;
 onSubmit({ name: name.trim(), color });
 setName("");
 setColor(COLORS[0].value);
 }

 return (
 <form onSubmit={handleSubmit} className="flex flex-col gap-3">
 <div>
 <Label htmlFor="cat-name">Category Name</Label>
 <Input
 id="cat-name"
 value={name}
 onChange={e => setName(e.target.value)}
 placeholder="e.g. Work, Personal"
 required
 autoFocus
 />
 </div>
 <div>
 <Label htmlFor="cat-color">Color</Label>
 <select
 id="cat-color"
 className="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
 value={color}
 onChange={e => setColor(e.target.value)}
 >
 {COLORS.map(opt => (
 <option key={opt.value} value={opt.value}>{opt.label}</option>
 ))}
 </select>
 </div>
 <div className="flex gap-2 mt-2">
 <Button type="submit" variant="default">{initial ? "Save" : "Add Category"}</Button>
 {onCancel && <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>}
 </div>
 </form>
 );
}
