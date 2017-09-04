import { Rol } from "./rol.model";

export class Usuario {
    id:number;
    rol:Rol;
    nombre:string;
    usuario:string;
    email:string;
    authtoken:string;
}