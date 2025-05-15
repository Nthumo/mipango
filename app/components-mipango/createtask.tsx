'use client'
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

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
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';



export default function CreateTask() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [allDay, setAllDay] = useState('');
    const [repeat, setRepeat] = useState('');
    const [description, setDescripton] = useState('');
    const [listId, setLitId] = useState('');
    const [taskLists, setTaskLists] = useState('');

    {/*
    useEffect(() => {
        const fetchLists = async () => {
            const { data, error } = await supabase.from{ 'task_lists'}.select{ 'id, title'};
            if (error) console.error(error);
            else setTaskLists(data);
        };
        fetchLists();
    }, []);    

    */}



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.from('tasks').insert({
            title,
            date,
            time: allDay ? null : time,
            all_day: allDay,
            repeat,
            description,
            list_id: listId,
        });

        if (error) {
            console.error('Error creating task:', error);
        } else {
            alert('Task created✅');
            setTitle('');
            setDate('');
            setTime('');
            setAllDay('');
            setRepeat('');
            setDescripton('');
            setLitId('');
        }
    };

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
                    <form onSubmit={handleSubmit} className='space-y-4 md:max-w-md p-4 bg-white dark:bg-zinc-900 rounded shadow'>
                        <div>
                            <label htmlFor="title">Title😀</label>
                            <Input placeholder='Task title...' value={title} onChange={(e) => setTitle(e.target.value)} required className='border-b' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="descripton">Details📄</label>
                            <textarea name="descripton" id="" className='border rounded-lg p-2' placeholder='Write task details here...' rows={4}></textarea>
                        </div>

                        <div>
                            <label htmlFor="" className='text-sm italic text-muted-foreground'>Set the date & time when you'll do the task✔️</label>
                            <div className='b rounded-lg p-2 flex justify-between'>
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <Input type='date' value={title} onChange={(e) => setDate(e.target.value)} required />
                                </div>
                                {!allDay && (
                                    <div>
                                        <label htmlFor="time">Time</label>
                                        <Input type='time' value={time} onChange={(e) => setTime(e.target.value)} required />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-sm italic text-muted-foreground'>Choose when the task should be repeated🔁</label>
                            <div className='flex justify-between'>
                                <div className='flex gap-2 items-center rounded-lg p-2'>
                                    <Checkbox /*checked={allDay} onCheckedChange={(val) => setAllDay(!!val)} *//>
                                    <label htmlFor="allday">All Day</label>
                                </div>

                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Select'/>
                                    </SelectTrigger>
                                    <SelectContent>
                                    <SelectItem value="don't repeat">Don't repeat</SelectItem>
                                    <SelectItem value="daily">Daily</SelectItem>
                                    <SelectItem value="weekly">Weekly</SelectItem>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                        <div className='flex flex-col items-center gap-2'>
                            <label htmlFor="list" className='italic text-sm text-muted-foreground'>Add to a List📝 ✔️</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select'/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='list one'>List one</SelectItem>
                                    <SelectItem value='list two'>List two</SelectItem>
                                </SelectContent>
                            </Select>

                            {/*<select name="task list" id="">
                                {taskLists.map((list) => (
                                    <option value="" key={list.id} value={list.id}>
                                        {list.title}
                                    </option>
                                ))}
                            </select> */}

                        </div>
                        <div className='flex justify-center'>
                            <Button type='submit' className='w-full bg-green-500 hover:bg-green-400'>Submit</Button>
                        </div>
                        
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}