import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: Partial<User>) {
    const newUser = { id: Date.now(), ...user } as User;
    this.users.push(newUser);
    return newUser;
  }

  findByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }

  findAll() {
    return this.users;
  }
}