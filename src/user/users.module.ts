import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
    controllers: [UserController],
    providers: [UsersService, PrismaService, UsersRepository],
})
export class UsersModule {}
