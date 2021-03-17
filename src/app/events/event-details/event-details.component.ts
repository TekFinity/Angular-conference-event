import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from '../shared/event.model';
@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [
        `.container{
            padding-left:20px;
            padding-right:20px;
        }
        .event-img{
            height:100px;
        }`
    ]
})

export class EventDetailsComponent implements OnInit{
    event: IEvent;

    constructor(private EventService: EventService, private routes: ActivatedRoute){}
ngOnInit(){
this.event =  this.EventService.getEventById(+this.routes.snapshot.params['id']);
}
}
