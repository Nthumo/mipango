'use client'

import { TaskList } from "../types"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type Props = {
    taskLists: TaskList[];
};

export default function CompletedTasks({ taskLists }: Props) {
    const completedTasks = taskLists.flatMap(list =>
        list.tasks
            .filter(task => task.completed)
            .map(task => ({ ...task, listTitle: list.title }))
    );

    return (
        <>
            <div className="mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle>✅ Completed Tasks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {completedTasks.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No completed tasks yet</p>
                        ) : (
                            <ul className="space-y-1">
                                {completedTasks.map(task => (
                                    <li key={task.id}>
                                        <span className="font-semibold">{task.listTitle}:</span> {task.content}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    )

}