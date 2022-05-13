export interface IEmployee{
    id :number,
    name:string,
    age: number
}

export class Employee{
    id?: string;
    name?: string;
    status?: number;
    age?:number;
    email?:string
}

export interface IEmployee1{
    id :number,
    name:string,
    status:string,
    age: number,
    email: string
}
