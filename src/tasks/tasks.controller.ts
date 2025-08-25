import { Task, TasksService } from './tasks.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller('tasks')
export class TasksController {
    
    constructor(private tasksService:TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }
    
    @Get("/:id")
    getTask(@Param('id') id: string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTasks(@Body() task: Task) {
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    patchTasks() {
        return this.tasksService.patchTasks();
    }
}