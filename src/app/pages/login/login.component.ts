import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
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
      private loginService: LoginService,
      private loaderService: LoaderService
    ) { }

    ngOnInit(): void {
    }

    // Login form Submit method
    loginFormSubmit() {
      const loaderId = 'login-loader';
      this.loaderService.start(loaderId);
      this.loginService.login(this.loginData.username, this.loginData.password).subscribe(
        (response) => {
          // console.log('Login successful', response);
          this.snackBar.open('Login successful', 'Close', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
          this.snackBar.open(error.error.MESSAGE, 'Close', { duration: 3000 });
        },() => {
          this.loaderService.stop(loaderId);
        }
      );
    }
}
