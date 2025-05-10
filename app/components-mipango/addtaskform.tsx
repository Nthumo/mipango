import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddTaskForm( {onAdd}: {onAdd: (content: string) => void }) {

    const [value, setValue] = useState('');
    const submit =  () => {
        if (!value.trim()) return;
        onAdd(value.trim());
        setValue('');
    };

    return (
        <div>
            <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="Write New task.."
            className=""
            />
            <Button onClick={submit}>
                Add
            </Button>
        </div>
    )
}