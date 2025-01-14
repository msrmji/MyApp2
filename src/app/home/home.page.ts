import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';  // Importamos NavigationExtras

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, // Si usas componentes standalone
})
export class HomePage {
  user = {
    usuario: '',
    contrasena: '',
  };
  msj = '';

  constructor(private router: Router) {}

  conectar() {
    if (this.user.usuario.length > 0 && this.user.contrasena.length > 0) {
      // Creamos los datos para pasar al perfil
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      };

      // Navegamos a la página de perfil con los datos de usuario
      this.router.navigate(['/perfil'], navigationExtras);  // Corrección aquí
    } else {
      this.msj = "Las credenciales no pueden estar vacías";
    }
  }
}
