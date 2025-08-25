import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
    id: number;
    name: string;
}

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const taskFound = this.tasks.find((task) => task.id === id);

        if (!taskFound) {
            return new NotFoundException(`Task with ID ${id} not found`);
        }

        return taskFound;
    }

    createTasks(task: Task) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return 'Task Created Successfully';
    }

    updateTasks() {
        return 'Updating Task';
    }
    deleteTasks() {
        return 'Deleting Task';
    }
    patchTasks() {
        return 'Patching Task';
    }
}
