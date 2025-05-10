'use client'
import { useState } from "react";

import Layout from "../components-mipango/layout";
import CompletedTasks from "../components-mipango/completed";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompletedTasksPage() {
  const [taskLists, setTaskLists] = useState([]);

  return (
    <>
    <Layout>
      <CompletedTasks taskLists={taskLists}/>
    </Layout>
    </>
  );
}
