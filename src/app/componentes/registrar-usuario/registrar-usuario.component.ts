import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
      
  }

  addUser() {
    
    // Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error("Las contraseñas ingresadas no coinciden", "Error");
      return;
    }

    // Creamos el objeto 
    const user: User = {
      username: this.username,
      password: this.password
    }

    this._userService.signIn(user).subscribe(data => {
      this.toastr.success("El usuario " + this.username + " fue registrado con exito", "Usuario registrado");
      this.router.navigate(['/login']);
    })

  }

}
