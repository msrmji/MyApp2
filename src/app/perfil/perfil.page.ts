import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  user = {
    usuario: "",
    contrasena: ""
  };

  nombreUsuario = '';

  ngOnInit() {
    // Obtenemos los datos pasados a través de navigationExtras
    if (history.state && history.state.user) {
      this.user = history.state.user;  // Accedemos al estado
      this.nombreUsuario = this.user.usuario;  // Asignamos el usuario
    }
  }
}
