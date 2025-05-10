

export type Task = {
    id: string;
    content: string;
    completed: boolean;
    starred: boolean;
  };
  
  export type TaskList = {
    id: string;
    title: string;
    tasks: Task[];
  };
  