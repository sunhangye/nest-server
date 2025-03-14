import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {UserService} from "./modules/user/user.service";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly userServer: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  async createUser(): Promise<boolean> {
      return await this.userServer.createUser({
          name: '管理员',
          tel: '13888888888',
          password: '123456',
          account: 'admin',
          description: '管理员',
      });
  }

  @Get('/delete')
  async deleteUser(): Promise<boolean> {
      return await this.userServer.deleteUser('033a2e24-34aa-4064-ba24-a095085591cf');
  }

  @Get('/update')
  async updateUser(): Promise<boolean> {
      return await this.userServer.updateUser('b35696b0-fbbc-49ec-961b-024c9bbf2553', {
          name: '管理员'
      })
  }

  @Get('/find')
  async findUser(): Promise<any> {
    return this.userServer.findUser('b35696b0-fbbc-49ec-961b-024c9bbf2553')
  }
}
