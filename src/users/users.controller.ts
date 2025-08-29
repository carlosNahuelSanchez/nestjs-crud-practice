import { createUserDto } from './dto/create-user.dto';
import { UserGuardGuard } from './guards/user-guard/user-guard.guard';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

@Controller("users")
export class UsersController {

    constructor(private UsersService: UsersService) {}

    @Get()
    @UseGuards(UserGuardGuard)
    getUsers() {
        return this.UsersService.getUsers();
    }

    @Post()
    createUser(@Body() user:createUserDto) {
        return this.UsersService.createUser(user)
    }
}
