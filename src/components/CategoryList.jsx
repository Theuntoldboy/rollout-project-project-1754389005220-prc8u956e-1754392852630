import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Edit, Trash2 } from "lucide-react";

const CATEGORY_COLORS = {
 blue: "blue",
 green: "green",
 pink: "pink",
};

export function CategoryList({ categories, selected, onSelect, onEdit, onDelete }) {
 return (
 <div className="flex flex-wrap gap-2">
 {categories.map(cat => (
 <div key={cat.id} className="flex items-center gap-1">
 <Button
 variant={selected === cat.id ? "secondary" : "ghost"}
 size="sm"
 className="px-2 py-1"
 onClick={() => onSelect(cat.id)}
 aria-pressed={selected === cat.id}
 >
 <Badge color={CATEGORY_COLORS[cat.color]} className="mr-2" />
 <span className="truncate max-w-[100px]">{cat.name}</span>
 </Button>
 <Button variant="ghost" size="sm" aria-label="Edit category" onClick={() => onEdit(cat)}>
 <Edit className="w-4 h-4 text-zinc-400 hover:text-primary" />
 </Button>
 <Button variant="ghost" size="sm" aria-label="Delete category" onClick={() => onDelete(cat.id)}>
 <Trash2 className="w-4 h-4 text-zinc-400 hover:text-red-500" />
 </Button>
 </div>
 ))}
 </div>
 );
}
