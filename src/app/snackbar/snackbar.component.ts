import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(): void {
    this.snackBar.open('Wrong Email Adress or Password', 'Close', {
      duration: 3000,
    });
  }
}
