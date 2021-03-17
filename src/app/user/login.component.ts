import {Component} from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styles:[`
    em{ float:right;
    padding-left:10px;
    color:#E05C65;
    }`]
})

export class LoginComponent {
    userName;
    password;
    mouseEnter;
constructor(private auth: AuthService, private route:Router){}
    Login(){
        this.auth.LoginUser(this.userName, this.password);
        this.route.navigate(['/events']);
    }
    cancel(){
        this.route.navigate(['/events']);
    }
}