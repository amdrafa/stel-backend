import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AreaContact } from "./area-contact-model";
import { AreaCostCenter } from "./area-costcenter-model";

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({
        type: "text"
    })
    name?: string;

    @Column({
        type: "text"
    })
    description?: string;

    @OneToMany(() => AreaContact, (contact) => contact.area, {
        cascade: true,
        // eager: true
    })
    contacts?: Promise<AreaContact[]>

    @OneToMany(() => AreaCostCenter, (costCenter) => costCenter.area, {
        cascade: true,
        // eager: true
    })
    costCenters?: Promise<AreaCostCenter[]>

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}