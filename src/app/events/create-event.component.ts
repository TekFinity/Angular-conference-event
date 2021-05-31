import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { EventService } from './shared/events.service';
@Component({
     selector: 'create-event',
     templateUrl: './create-event.component.html',
     styles: [`  em{
        padding-left:10px;
        float:right;
        color:#E05C65;
      }
      .img{
          width:11rem;
          height:10rem;
          margin-top:0.5rem
      }
      .error input{
        background-color: #E3C3C5;
      }
      .error ::-webkit-input-placeholder{color:#999;}
      .error ::-moz-placeholder{color:#999;}
      .error :-moz-placeholder{color:#999;}
      .error :ms-input-placeholder{color:#999}`]
 })

 export class CreateEventComponent{
     isDirty = true;
     newEvent;
     constructor(private router: Router, private eventService: EventService){}
     cancel(): void{
this.router.navigate(['/events']);
}
saveEvent(formValue): void{
    this.eventService.saveEvent(formValue);
    this.isDirty = false;
    this.router.navigate(['/events'])
}
 }
