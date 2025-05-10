'use client'

import { Task, TaskList } from '../types';

import Layout from "../components-mipango/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  taskLists: TaskList[];
}

export default function StarredTasks({ taskLists } : Props) {
  const starredTasks = taskLists.flatMap(list => 
    list.tasks
    .filter(task => task.starred)
    .map(task => ({ ...task, listTitle: list.title}))
  );

  return (
    <>
    <Layout>
      <Card>
        <CardHeader>
        <CardTitle>⭐ Starred Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {starredTasks.length === 0 ? (
            <>
            <p className='text-red-800'>No starred tasks </p>
            <p> Star your favorite tasks to see them here 😊</p>            
            </>
          ) : (
            <ul className='space-y-4'>
              {starredTasks.map(task => (
                <li key={task.id}>
                  <span>{task.listTitle}</span> {task.content}
                </li>
              ))}
            </ul>
          )

          }
        </CardContent>
      </Card>
    </Layout>
    </>
  );
}
