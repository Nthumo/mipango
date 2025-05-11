'use client'

import { useState } from "react";
import StarredTasks from "../components-mipango/starredcomp";
import Layout from "../components-mipango/layout";

export default function StarredTasksPage() {
  const [taskLists, setTaskLists] = useState([]);
  return (
    <>
      <Layout>
        <div className="mt-12">
          <StarredTasks taskLists={taskLists} />
        </div>
      </Layout>
    </>
  )
}