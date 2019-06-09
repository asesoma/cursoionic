import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  todo = {
    email : "asesoma@gmail.com",
    pass : "1972"
  }
  constructor(private navCtrl : NavController,
              private toastController : ToastController) { }

  ngOnInit() {
  }

  async login(forma : NgForm){
    //console.log(forma.value.email);
    //console.log(forma.value.password);
    if(forma.value.email === this.todo.email && forma.value.password === this.todo.pass){
      this.navCtrl.navigateForward('myapp/tabs/tab1');}
    else{
      let toast = await this.toastController.create({
        message: 'Sus credenciales no son correctas.',
        duration: 2000,
        position : "middle"
      });
      toast.present();
    }
  }

  login1(){}

}
