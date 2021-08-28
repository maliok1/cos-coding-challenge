import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean = false;
  errorMessage: string;
  throwErr: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public router: Router,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {     
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
   this.authenticationService.logIn(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(res=>
    { 
      if(res){
        this.loggedIn = true;
        this.authenticationService.setToken(JSON.stringify(res.token))
        this.authenticationService.setEmail(res.userId)
      }
       this.router.navigate(['/overview']);
    }, err=>  this.generateErrorMsg(err)
   )
  }

  generateErrorMsg(err){
    if(this.loginForm.invalid){
      this.throwErr = true;
      this.errorMessage = 'An error occurred: Username and password cannot be empty'
      return this._snackBar.open(this.errorMessage, '', { 
        duration: 3000
    });
    } else {
      this.throwErr = true;
      this.errorMessage = 'An error occurred: Incorrect username or password.'
      return this._snackBar.open(this.errorMessage, '', { 
        duration: 3000
    })
    }
  }
}