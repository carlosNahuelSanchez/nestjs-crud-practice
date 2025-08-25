import { UsersService } from './users.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller("users")
export class UsersController {

    constructor(private UsersService: UsersService) {}

    @Get()
    getUsers() {
        return this.UsersService.getUsers();
    }
}
