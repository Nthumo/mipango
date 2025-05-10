'use client'

import { useState } from "react";
import StarredTasks from "../components-mipango/starredcomp";

export default function StarredTasksPage () {
  const [taskLists, setTaskLists] = useState([]);
  return (
    <>
    <div>
      <StarredTasks taskLists={taskLists}/>
    </div>
    </>
  )
}