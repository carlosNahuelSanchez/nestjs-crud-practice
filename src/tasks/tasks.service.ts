import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: createTaskDto[] = [];

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

    createTasks(task: createTaskDto) {
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
