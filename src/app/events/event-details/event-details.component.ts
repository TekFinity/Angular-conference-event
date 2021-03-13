import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import{ ActivatedRoute} from '@angular/router';
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
    event;

    constructor(private EventService: EventService, private routes:ActivatedRoute){}
ngOnInit(){
this.event =  this.EventService.getEventById(+this.routes.snapshot.params['id']);
}
}
