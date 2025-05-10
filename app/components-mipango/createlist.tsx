'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TaskList } from '../types';

type Props = {
  onCreate: (title: string) => void;
};

export default function CreateListModal({ onCreate }: Props) {
  const [open, setOpen] = useState(false);
  const [listTitle, setListTitle] = useState('');

  const handleCreate = () => {
    if (!listTitle.trim()) return;
    onCreate(listTitle.trim());
    setListTitle('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="md:mr-2" />
          Create List
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Task List</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Enter list name"
          value={listTitle}
          onChange={e => setListTitle(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleCreate()}
        />
        <DialogFooter>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
