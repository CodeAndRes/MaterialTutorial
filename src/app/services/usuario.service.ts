import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'apacheco', nombre: 'Andrés',  apellido: 'Pacheco', sexo: 'Masculino'},
    {usuario: 'ipacheco', nombre: 'Ione',  apellido: 'Pacheco', sexo: 'Femenino'},
    {usuario: 'lpacheco', nombre: 'Laia',  apellido: 'Pacheco', sexo: 'Femenino'},
    {usuario: 'sgazquez', nombre: 'Sonia',  apellido: 'Gazquez', sexo: 'Femenino'},
    {usuario: 'nika', nombre: 'Nika',  apellido: 'Perro', sexo: 'Femenino'},
    {usuario: 'sokka', nombre: 'Sokka',  apellido: 'Gato', sexo: 'Masculino'},
    {usuario: 'loula', nombre: 'Loula',  apellido: 'Gato', sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
}
