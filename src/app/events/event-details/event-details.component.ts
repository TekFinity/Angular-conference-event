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
        }
        a{cursor:pointer;
        color: grey;}`
    ]
})

export class EventDetailsComponent implements OnInit{
    event: IEvent;
    addSessionMode: boolean;
    filterBy: string;

    constructor(private EventService: EventService, private routes: ActivatedRoute){}
ngOnInit(): void{
    this.filterBy = 'all';
this.event =  this.EventService.getEventById(+this.routes.snapshot.params['id']);
}
addSession(): void{
this.addSessionMode = true;

}
sessionList(): void{
    this.addSessionMode = false;
}
SaveSession(session): void {
    session.id = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    this.event.sessions.push(session);
    this.EventService.UpdateEvent(this.event);
    this.addSessionMode = false;
}
cancelSession(): void {
    this.addSessionMode = false;
}
}
