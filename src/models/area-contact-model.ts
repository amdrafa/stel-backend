import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoleEnum } from "../enums/user-roles-enum";
import { UserStatusEnum } from "../enums/user-status-enum";
import { Area } from "./area-model";

@Entity()
export class AreaContact {
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

    @ManyToOne(() => Area, (area) => area.contacts, { onDelete:'CASCADE' })
    area?: Area

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}