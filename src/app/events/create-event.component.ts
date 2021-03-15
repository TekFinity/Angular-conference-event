import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
     selector: 'create-event',
     templateUrl: './create-event.component.html',
     styles: []
 })

 export class CreateEventComponent{
     isDirty:boolean= true;
     constructor(private router:Router){}
onCancel(){
this.router.navigate(['/events']);
}
 }
