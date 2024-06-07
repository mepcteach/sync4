import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any="";
  password: string=""; 
  sesion_activa: any="";
  mensaje: string='';

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {

    this.sesion_activa = localStorage.getItem('sesion_activa');
    if(this.sesion_activa=='SI')
    {
      this.mensaje='la sesion está activa';
    }
    else
    {
      this.mensaje='la sesion no está activa';
    }
  }

  login() {
    if (this.usuario.trim() == 'miguel' && this.password.trim() == '1234') {
      
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      } 
      this.router.navigate(['/home'],NavigationExtras);
    }
    else{
      this.presentAlert('incorrecto');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
