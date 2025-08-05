import React from "react";
import { Navbar } from "@/components/Navbar.jsx";
import { Footer } from "@/components/Footer.jsx";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card.jsx";
import { CategoryList } from "@/components/CategoryList.jsx";
import { TaskList } from "@/components/TaskList.jsx";
import { AddTaskForm } from "@/components/AddTaskForm.jsx";
import { AddCategoryForm } from "@/components/AddCategoryForm.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Separator } from "@/components/ui/Separator.jsx";
import { Plus, ListTodo } from "lucide-react";

function getInitialCategories() {
  return [
    { id: "work", name: "Work", color: "blue" },
    { id: "personal", name: "Personal", color: "green" },
    { id: "ideas", name: "Ideas", color: "pink" },
  ];
}

function getInitialTasks() {
  return [
    { id: "t1", title: "Finish project proposal", description: "Draft and send to team", categoryId: "work", completed: false },
    { id: "t2", title: "Buy groceries", description: "Eggs, milk, bread", categoryId: "personal", completed: false },
    { id: "t3", title: "Read new book", description: "Start 'Atomic Habits'", categoryId: "personal", completed: true },
    { id: "t4", title: "Brainstorm app ideas", description: "List3 new ideas", categoryId: "ideas", completed: false },
  ];
}

export default function App() {
  // Categories
  const [categories, setCategories] = React.useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : getInitialCategories();
  });
  // Tasks
  const [tasks, setTasks] = React.useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : getInitialTasks();
  });
  // UI State
  const [showAddTask, setShowAddTask] = React.useState(false);
  const [showAddCategory, setShowAddCategory] = React.useState(false);
  const [editTask, setEditTask] = React.useState(null);
  const [editCategory, setEditCategory] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [draggingId, setDraggingId] = React.useState(null);

  // Persist to localStorage
  React.useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Category CRUD
  function handleAddCategory(data) {
    if (editCategory) {
      setCategories(cats => cats.map(cat => cat.id === editCategory.id ? { ...cat, ...data } : cat));
      setEditCategory(null);
    } else {
      const id = data.name.toLowerCase().replace(/\s+/g, "-") + "-" + Math.random().toString(36).slice(2, 6);
      setCategories(cats => [...cats, { id, ...data }]);
    }
    setShowAddCategory(false);
  }
  function handleDeleteCategory(id) {
    setCategories(cats => cats.filter(cat => cat.id !== id));
    setTasks(tsks => tsks.filter(t => t.categoryId !== id));
    if (selectedCategory === id) setSelectedCategory(null);
  }
  function handleEditCategory(cat) {
    setEditCategory(cat);
    setShowAddCategory(true);
  }

  // Task CRUD
  function handleAddTask(data) {
    if (editTask) {
      setTasks(tsks => tsks.map(t => t.id === editTask.id ? { ...t, ...data } : t));
      setEditTask(null);
    } else {
      const id = "t" + Math.random().toString(36).slice(2, 8);
      setTasks(tsks => [
        { id, ...data, completed: false },
        ...tsks,
      ]);
    }
    setShowAddTask(false);
  }
  function handleDeleteTask(id) {
    setTasks(tsks => tsks.filter(t => t.id !== id));
  }
  function handleEditTask(task) {
    setEditTask(task);
    setShowAddTask(true);
  }
  function handleToggleTask(id) {
    setTasks(tsks => tsks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  // Drag and Drop
  function handleDragStart(e, id) {
    setDraggingId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  }
  function handleDragOver(e, overId) {
    e.preventDefault();
    if (draggingId === overId) return;
    const draggingIdx = tasks.findIndex(t => t.id === draggingId);
    const overIdx = tasks.findIndex(t => t.id === overId);
    if (draggingIdx === -1 || overIdx === -1) return;
    const reordered = [...tasks];
    const [removed] = reordered.splice(draggingIdx, 1);
    reordered.splice(overIdx, 0, removed);
    setTasks(reordered);
  }
  function handleDrop(e, overId) {
    setDraggingId(null);
  }

  // Stats
  const completedCount = tasks.filter(t => t.completed && (!selectedCategory || t.categoryId === selectedCategory)).length;
  const totalCount = tasks.filter(t => !selectedCategory || t.categoryId === selectedCategory).length;

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark text-zinc-900 dark:text-zinc-100 font-sans transition-colors">
      <Navbar onAddCategory={() => { setEditCategory(null); setShowAddCategory(true); }} />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ListTodo className="w-7 h-7 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Stay organized, effortlessly.</h1>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">A modern, category-based todo app with drag-and-drop, dark mode, and a beautiful, responsive design. Your tasks, your way.</p>
        </section>
        {/* Categories Section */}
        <section id="categories" className="mb-8">
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Categories</CardTitle>
              <Button size="sm" variant="secondary" onClick={() => { setEditCategory(null); setShowAddCategory(true); }}>+ Add</Button>
            </CardHeader>
            <CardContent>
              <CategoryList
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                onEdit={handleEditCategory}
                onDelete={handleDeleteCategory}
              />
            </CardContent>
          </Card>
          {showAddCategory && (
            <Card className="mb-4 animate-in fade-in slide-in-from-top-2">
              <CardHeader>
                <CardTitle>{editCategory ? "Edit Category" : "Add Category"}</CardTitle>
              </CardHeader>
              <CardContent>
                <AddCategoryForm
                  initial={editCategory}
                  onSubmit={handleAddCategory}
                  onCancel={() => { setShowAddCategory(false); setEditCategory(null); }}
                />
              </CardContent>
            </Card>
          )}
        </section>
        {/* Tasks Section */}
        <section id="tasks" className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Tasks</h2>
            <Button variant="default" size="sm" onClick={() => { setEditTask(null); setShowAddTask(true); }}>
              <Plus className="w-4 h-4 mr-1" /> Add Task
            </Button>
          </div>
          <div className="text-sm text-zinc-500 mb-2">
            {completedCount} of {totalCount} tasks completed
          </div>
          <Separator />
          {showAddTask && (
            <Card className="my-4 animate-in fade-in slide-in-from-top-2">
              <CardHeader>
                <CardTitle>{editTask ? "Edit Task" : "Add Task"}</CardTitle>
              </CardHeader>
              <CardContent>
                <AddTaskForm
                  categories={categories}
                  initial={editTask}
                  onSubmit={handleAddTask}
                  onCancel={() => { setShowAddTask(false); setEditTask(null); }}
                />
              </CardContent>
            </Card>
          )}
          <TaskList
            tasks={tasks}
            categories={categories}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggingId={draggingId}
            filterCategory={selectedCategory}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
