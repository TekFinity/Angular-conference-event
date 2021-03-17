import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable()

export class AuthService{
    currentUser: IUser;
    constructor(){}
 LoginUser(username, password){
this.currentUser = {
    id : 1,
    firstName: 'John',
    lastName: 'papa',
    userName: username
};
 }
 isAuthenticated(){
     return !!this.currentUser;
 }
 UpdateDetails(newFirst, newLast){
     this.currentUser.firstName = newFirst;
     this.currentUser.lastName = newLast;
 }
}
