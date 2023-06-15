import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmployeeStatusEnum } from "../enums/employee-status"

@Entity()
export class Empoyee {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    EDV!: number;

    @Column({type: "text"})
    Position?: string;

    @Column({type: "date"})
    SAPStartDate?: Date;

	@Column({type: "date"})
	CustomStartDate?: Date;

    @Column({type: "date"})
	SAPEndDate?: Date;

    @Column({type: "date"})
	CustomEndDate?: Date;

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