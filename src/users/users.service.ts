import { createUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { Interface } from 'readline';


@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'John Doee' },
        { id: 2, name: 'Jane Doe' },
    ];

    getUsers() {
        return this.users;
    }

    createUser(user: createUserDto) {

        this.users.push({...user, id: this.users.length + 1});

        return {
            ...user,
            id: this.users.length + 1
        };
    }
}
