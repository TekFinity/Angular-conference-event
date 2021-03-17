import {Component, OnInit} from '@angular/core';
import  {EventService} from './shared/events.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
@Component({
    selector: 'events-list',
    template: `<div >
    <h1>Upcoming Code Events</h1>
    <hr>
    <div class="row">
        <div class="col-md-4" *ngFor="let event of events">
       <event-thumbnail [routerLink] = "['/events',event.id]" [event1] = "event" (click) ="HandleThumbnailClick(event.name)"></event-thumbnail>
      </div>
    </div>
    </div>`
})
export class EventListComponent implements OnInit{
  events: IEvent[];
  constructor(private eventService: EventService, private Toastr: ToastrService, private route: ActivatedRoute){}
ngOnInit(){
  this.events = this.route.snapshot.data.events;
}
HandleThumbnailClick(name){
this.Toastr.success(name);
}
}
