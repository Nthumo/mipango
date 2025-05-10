'use client';

import { useState } from "react";
import { Task, TaskList } from '../types';
import Layout from "../components-mipango/layout";
import { Button } from "@/components/ui/button";
import { Plus, Star, StarOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AddTaskForm from "../components-mipango/addtaskform";


export default function OverViewPage() {
  const [taskLists, setTaskLists] = useState<TaskList[]>([]);
  const [newListTitle, setNewListTitle] = useState('');

  const createTaskList = () => {
    if (!newListTitle.trim()) return;

    const newList: TaskList = {
      id: crypto.randomUUID(),
      title: newListTitle.trim(),
      tasks: [],
    };
    setTaskLists(prev => [...prev, newList]);
    setNewListTitle('');
  };

  const addTask = (listId: string, content: string) => {
    if (!content.trim()) return;
    setTaskLists(prev =>
      prev.map(list =>
        list.id === listId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                {
                  id: crypto.randomUUID(),
                  content,
                  completed: false,
                  starred: false,
                },
              ],
            }
          : list
      )
    );
  };

  const toggleStar = (listId: string, taskId: string) => {
    setTaskLists(prev =>
      prev.map(list =>
        list.id === listId
        ? {
          ...list,
          tasks: list.tasks.map(task =>
            task.id === taskId ? { ...task, starred: !task.starred } : task
          ),
        }
        : list
      )
    );
  };

  const toggleComplete = (listId: string, taskId: string) => {
    setTaskLists(prev =>
      prev.map(list =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map(task =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : list
      )
    );
  };

  return (
    <Layout>
      {/* Button to create new list */}
      <div className="flex items-center gap-2 mt-4">
        <Input
          value={newListTitle}
          onChange={e => setNewListTitle(e.target.value)}
          placeholder="New list title..."
          className="max-w-sm text-black"
        />
        <Button onClick={createTaskList}>
          <Plus className="mr-2 h-4 w-4" />
          Create
        </Button>
      </div>

      {/* Task Lists Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {taskLists.map(list => (
          <Card key={list.id}>
            <CardHeader>
              <CardTitle>{list.title}</CardTitle>
            </CardHeader>
            <CardContent>
            <AddTaskForm onAdd={content => addTask(list.id, content)} />

              {/* Incomplete Tasks */}
              <ul className="space-y-2 mt-2">
                {list.tasks
                  .filter(task => !task.completed)
                  .map(task => (
                    <li key={task.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(list.id, task.id)}
                      />
                      <span>{task.content}</span>
                      <button onClick={() => toggleStar(list.id, task.id)}>
                        {task.starred ? <Star/> : <StarOff/>}
                      </button>
                    </li>
                  ))}
              </ul>

              {/* Completed Tasks */}
              <details className="mt-4">
                <summary className="text-zinc-500 cursor-pointer">Completed</summary>
                <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                  {list.tasks
                    .filter(task => task.completed)
                    .map(task => (
                      <li key={task.id}>{task.content}</li>
                    ))}
                </ul>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
