import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import {UserService} from "./user.service";
import {UserResolver} from "./user.resolver";
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [ConsoleLogger, UserService, UserResolver],
    exports: [UserService],
})

export class UserModule {}
