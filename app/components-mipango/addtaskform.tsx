import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function AddTaskForm( {onAdd}: {onAdd: (content: string) => void }) {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('')

    const handleDescription = () => {
        if (!description.trim()) return;
        onAdd(description.trim());
        setDescription('');
    }

    const submit =  () => {
        if (!value.trim()) return;
        onAdd(value.trim());
        setValue('');
    };

    return (
        <div className="flex flex-col gap-y-4">
            <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="Write New task.."
            className=""
            />
            <Input
            type="textArea"
            value={description}
            onChange={e => setDescription(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleDescription()}
            placeholder="Task description"
            className=""
            />
            <Button onClick={submit}>
                Add
            </Button>
        </div>
    )
}