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
}
