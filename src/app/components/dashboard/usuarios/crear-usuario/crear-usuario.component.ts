import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
interface Sexo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  sexos: Sexo[] = [
    { value: 'masculino', viewValue: 'Masculino' },
    { value: 'femenino', viewValue: 'Femenino' },
    { value: 'otro', viewValue: 'Otro' },
  ];

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    };
    this._usuarioService.agregarUsurio(user);
    this.router.navigate(['/dashboard/usuarios'])
    this._snackBar.open('El Usuario fue creado con exito!!', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
