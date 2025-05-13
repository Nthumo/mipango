'use client'
import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';


export default function CreateTask() {
    const [open, setOpen] = useState(false);


    return (
        <>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button className='bg-green-400 hover:bg-green-500 '>
                  <Plus />
                  Create <span className='hidden md:block'>a Task</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new task</DialogTitle>
                </DialogHeader>
                <Input
                placeholder='Enter task name'
                />
                <Input
                placeholder='Enter task description'
                />
                <DialogFooter>
                    <Button>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}