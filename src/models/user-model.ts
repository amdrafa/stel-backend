import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string | undefined;

    @Column({
        type: "text"
    })
    name: string | undefined;

    @Column({
        type: "text"
    })
    email: string | undefined;

    @Column({
        type: "int"
    })
    age: number | undefined;

}