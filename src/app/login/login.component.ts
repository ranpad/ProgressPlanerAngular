import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputEmail = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  email: string | undefined;
  passwd: string | undefined;

  /*constructor(email: string, passwd: string) {
    this.email = email;
    this.passwd = passwd;
  }*/


  getErrorMessage() {
    if (this.inputEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.inputEmail.hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    const url: string = 'http://localhost:8080/api/login';

    const user = {
      email : this.email,
      password : this.passwd
    };

    const init = {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(user)
    }

    fetch(url, init)
      .then(res => {
        if (!res.ok){
          throw Error('HTTP-Error: ' + res.status);
        }
        console.log(res);
        return res.json();
      })
      .then(json => {
        console.log(json)
      })
      .catch(err => {
        console.log(err.toString);
      })
  }
}
