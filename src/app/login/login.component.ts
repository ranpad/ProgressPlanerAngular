import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../services/login.service";

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

  constructor(private router: Router,
              private loginService: LoginService,
              private snackBar: MatSnackBar) { }

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

  login(): void{
    this.loginService.login(this.email, this.passwd).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.openSnackbar();
      }
    )
  }

  openSnackbar(): void{
    let snackbarClass: string = "snackbar_style";

    this.snackBar.open('Wrong email or password', 'Close', {
      duration: 6000,
      panelClass: [snackbarClass],
      horizontalPosition: "end"
    });
  }
}
