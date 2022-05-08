import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { share } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import {User }from '../../shared/models/User'
import { UserService } from 'src/app/shared/services/user.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      fristname: new FormControl(''),
     lastname: new FormControl('')
    })
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    if(this.signUpForm.value.password != this.signUpForm.value.rePassword ){
      alert("Nem egyezik a kettő jelszó");
      stop();
    }
    if(!this.signUpForm.value.email.includes('@')){
      alert("Email cím nem jó");
      stop();
    }
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user : User ={
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value, 
        username: this.signUpForm.get('email')?.value.split('@')[0],
        name:{
          firstname: this.signUpForm.get('name.firstname')?.value,
          lastname: this.signUpForm.get('name.lastname')?.value
        }
      };
      //TODO insert
      this.userService.create(user).then(_ =>{
        console.log('User added succesfully.');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }
  goBack(){
    this.location.back();
  }

}
