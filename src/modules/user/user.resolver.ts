import {Query, Resolver, Args, Mutation} from "@nestjs/graphql";
import {UserService} from "./user.service";
import {UserType} from "./dto/user.type";
import {DeepPartial} from "typeorm";
import {UserInput} from "./dto/user-input.type";

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Query(() => Boolean)
    async find(@Args('id') id: string): Promise<DeepPartial<UserType>> {
        return await this.userService.findUser(id);
    }

    @Mutation(() => Boolean)
    async create(@Args('params') params: UserInput): Promise<boolean> {
        return await this.userService.createUser(params);
    }

    @Mutation(() => Boolean)
    async update(@Args('id') id: string, @Args('params') params: UserInput): Promise<boolean> {
        return await this.userService.updateUser(id, params);
    }

    @Mutation(() => Boolean)
    async del(@Args('id') id: string): Promise<boolean> {
        return await this.userService.deleteUser(id);
    }
}
