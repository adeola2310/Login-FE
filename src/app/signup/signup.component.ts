import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public createUserForm: FormGroup;
  static createUserForm = () => {
    return {
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    };
  }

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
    this.createUserForm = this.fb.group(SignupComponent.createUserForm());
  }

  ngOnInit() {
  }

  public registerUser() {
    const userData = this.createUserForm.value;
    if(userData['password'] !== userData['confirmpassword'] ){
      return alert('Retype Password!');
    }
    console.log('User data Value', userData);

    this.userService.createUser(userData).subscribe(
      (userResponse) => {
        this.router.navigateByUrl('/home');
        console.log('Created user==', userResponse);

      },
      (error) => {
        // alert('email already chosen!');
        console.log(error);
      }
    );


  }


}
