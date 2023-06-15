import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoleEnum } from "../enums/user-roles-enum";
import { UserStatusEnum } from "../enums/user-status-enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: "text"
    })
    name?: string;

    @Column({
        type: "text"
    })
    email?: string;

    @Column({
        type: "text"
    })
    password?: string;

    @Column({
        type: "enum",
        enum: UserRoleEnum,
        default: UserRoleEnum.user
    })
    role?: UserRoleEnum;

    @Column({
        type: "enum",
        enum: UserStatusEnum,
        default: UserStatusEnum.enabled
    })
    status?: UserStatusEnum;

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}