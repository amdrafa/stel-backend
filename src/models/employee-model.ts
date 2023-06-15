import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmployeeStatusEnum } from "../enums/employee-status"

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "int"})
    edv!: number;

    @Column({type: "text"})
    name!: string;

    @Column({type: "text"})
    position!: string;

    @Column({type: "date", nullable: true})
    sapStartDate?: Date;

	@Column({type: "date", nullable: true})
	customStartDate?: Date;

    @Column({type: "date", nullable: true})
	sapEndDate?: Date;

    @Column({type: "date", nullable: true})
	customEndDate?: Date;

    @Column({
        type: "enum",
        enum: EmployeeStatusEnum,
        default: EmployeeStatusEnum.enabled
    })
    status?: EmployeeStatusEnum;

    

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}