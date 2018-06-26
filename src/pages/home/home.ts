import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  variable1: string;

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin = () => {
    console.log("Navigating")
    this.navCtrl.push(LoginPage)
  }

  navigateToRegister = () => {
    this.navCtrl.push(RegistrationPage);
  }

}
