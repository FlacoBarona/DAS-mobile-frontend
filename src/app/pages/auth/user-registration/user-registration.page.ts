import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  register() {
    console.log('Registro de usuario iniciado');
  }
}
