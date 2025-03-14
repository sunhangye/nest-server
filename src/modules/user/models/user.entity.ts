import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: '昵称',
        default: ''
    })
    @IsNotEmpty()
    name: string;

    @Column({
        name: '手机号',
        nullable: true
    })
    tel: string;

    @Column({
        name: '描述',
        nullable: true
    })
    description: string;

    @Column({
        name: '密码',
        nullable: true
    })
    password: string;

    @Column({
        name: '账户信息',
        nullable: true
    })
    account: string;
}
