import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [{path:'profile', component:UserProfileComponent},
{path:'login',component:LoginComponent}]

@NgModule({
  declarations: [UserProfileComponent,
  LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule, ReactiveFormsModule
  ]
})
export class UserModule { }
