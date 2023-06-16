import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, ManyToOne, NumericType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoleEnum } from "../enums/user-roles-enum";
import { UserStatusEnum } from "../enums/user-status-enum";
import { Area } from "./area-model";

@Entity()
export class AreaCostCenter {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: "text"})
    code?: string;

    @Column({type: "text"})
    description?: string;

    @Column({type: "int"})
    hourRate?: number;

    @Column({type: "numeric"})
    grossTariff?: number;

    @Column({type: "numeric"})
    netTariff?: number;

    @ManyToOne(() => Area, (area) => area.costCenters, { onDelete:'CASCADE' })
    area?: Area
    
// ---------------------------

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}