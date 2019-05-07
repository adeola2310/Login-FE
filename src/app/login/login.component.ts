import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logUserForm: FormGroup;
  static logUserForm = () => {
    return {
      email: ['', Validators.required],
      password: ['', Validators.required]
    };
  }



  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
    this.logUserForm = this.fb.group(LoginComponent.logUserForm());
  }

  ngOnInit() {
  }

  public loginUser() {
    const userData = this.logUserForm.value;
    this.userService.logUser(userData).subscribe(
      (userResponse) => {
        // todo : Cache, Session or Cookies
        this.router.navigateByUrl('/home');
        console.log('log user==', userResponse);

      },
      (error) => {
        alert('Invalid Credentials!');
console.log('not a user', error);
      }
    );
  }

}
