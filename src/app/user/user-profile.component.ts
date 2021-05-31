import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-profile.component.html',
  styles: [`
    em{
      padding-left:10px;
      float:right;
      color:#E05C65;
    }
    .error input{
      background-color: #E3C3C5;
    }
    .error ::-webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999}

  `]
})

export class UserProfileComponent implements OnInit{
  profileForm: FormGroup;
  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(): void{
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName: new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    });
  }
  onSubmit(): void {
    if (this.profileForm.valid){
    this.auth.UpdateDetails(this.profileForm.controls.firstName.value, this.profileForm.controls.lastName.value);
    this.router.navigate(['/events']);
  }
  }
  cancel(): void {
    this.router.navigate(['/events']);
  }
  ValidateFirst(): boolean{
    return (this.profileForm.controls.firstName.valid);
  }
  ValidateLast(): boolean{
    return (this.profileForm.controls.lastName.valid);
  }
}
