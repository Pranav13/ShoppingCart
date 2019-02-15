import { SharedService } from './../shared.service';
import { FormService } from './../form.service';

import { UsernameValidators } from './../common/validators/username.validators';
import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Subject } from 'rxjs';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  message: string;
   @Output() valueChange  = new EventEmitter();
   public stringVar = new Subject<string>();
   public stringVar$ = this.stringVar.asObservable();
   user1: string;

   form = new FormGroup({
    username : new FormControl('',
    [Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace
  ]),
    password : new FormControl('',
    [Validators.required])
  });

  constructor(private authservice: AuthService, private shared: SharedService,private router:Router) {

  }

  ngOnInit() {
    this.shared.currentMessage.subscribe(message => this.message = message);
  }


  login() {

    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });
      return;
    }

    this.authservice.login(this.form.value).subscribe(
      res => {
        this.shared.changeMessage(this.form.value.username);
        this.router.navigate(['/shopping-cart']);
      },
      err => {
          console.log(err.message);
      }
  );
    //   if (isValid) {
    //     console.log(this.form.value.username);
    //       this.user = this.form.value.username;
    //   }
    // if (!isValid) {
    //   this.form.setErrors({
    //    invalidLogin: true
    //   });
    // }
  }

  get username() {
      return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }  
}

 export function getSingleValueObservable() {
   //this.user1 = 'pranav';
  return of('pranav');
}
