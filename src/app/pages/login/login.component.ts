import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // Login Object
    loginData = {
      username: '',
      password: '',
    };

    hidePassword = true;

    constructor(
      private snackBar: MatSnackBar,
      private router: Router,
      private loginService: LoginService
    ) { }

    ngOnInit(): void {
      this.loginService.getTest().subscribe(
        (data) => {
          console.log('data : ', data);
        },
        (error) => {
          console.log('error : ', error);
        }
      );
    }

    // Login form Submit method
    loginFormSubmit() {
      this.loginService.login(this.loginData.username, this.loginData.password).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.snackBar.open('Login successful', 'Close', { duration: 3000 });
          // Navigate to dashboard or home page after successful login
          // this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
          this.snackBar.open('Login failed. Please check your credentials.', 'Close', { duration: 3000 });
        }
      );
    }
}
