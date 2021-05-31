import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector:'event-thumbnail',
    template:` <div class="well hoverwell thumbnail">
    <h2>{{event1?.name}}</h2>
    <div>Date: {{event1?.date|date}}</div>
    <div [ngSwitch] ="event1?.time">
        Time: {{event1?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event1?.price|currency:'USD'}}</div>
    <div *ngIf="event1.location">
        <span>Location: {{event1.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event1.location.city}}, {{event1.location.country}}</span>
    </div>
    <div *ngIf = "event1.onlineUrl">
        Online Url: {{event1.onlineUrl}}
    </div>
</div>`,
styles:[``]
})

export class EventThumbnailComponent{
@Input() event1:IEvent;
}