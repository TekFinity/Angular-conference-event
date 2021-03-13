import { Component} from '@angular/core';

@Component({
    template:`
    <h1 class="error-message" >404 Not Found</h1>
    `,
    styles:[`
        .error-message{
margin-top:150px;
font-size:80px;
text-align:Center;
color:white;
        }
    `]
})
export class Error404Component{

}
