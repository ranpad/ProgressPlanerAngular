import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    const url: string = 'http://localhost:8080/api/login';

    fetch(url)
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
