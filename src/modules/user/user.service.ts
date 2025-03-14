import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./models/user.entity";
import {DeepPartial, Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private UserRepository: Repository<User>
    ) {}

    public async createUser(user: DeepPartial<User>): Promise<boolean> {
        const res =  await this.UserRepository.insert(user);
        return res?.raw.affectedRows === 1;
    }

    public async deleteUser(id: string): Promise<boolean> {
        const res = await this.UserRepository.delete(id);
        return res?.affected === 1;
    }

    public async updateUser(id: string, user: DeepPartial<User>): Promise<boolean> {
        const res = await this.UserRepository.update(id, user);
        return res?.affected === 1;
    }

    public async findUser(id: string): Promise<DeepPartial<User>> {
        const result =  await this.UserRepository.findOne({
            where: {
                id: id,
            }
        });
        return result ?? {};
    }
}
