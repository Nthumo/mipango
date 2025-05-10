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
import CreateListModal from "../components-mipango/createlist";


export default function OverViewPage() {
  const [taskLists, setTaskLists] = useState<TaskList[]>([]);


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

  const createTaskList = (title: string) => {
    const newList: TaskList = {
      id: crypto.randomUUID(),
      title,
      tasks: [],
    };
    setTaskLists(prev => [...prev, newList]);
  };
  

  return (
    <Layout>

      {/* Task Lists Display */}
      <div className="flex justify-between">
        
        <CreateListModal onCreate={createTaskList}/>
      </div>
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
