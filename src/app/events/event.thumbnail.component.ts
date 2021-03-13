import { Component, Input } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:` <div class="well hoverwell thumbnail">
    <h2>{{event1?.name}}</h2>
    <div>Date: {{event1?.date}}</div>
    <div [ngSwitch] ="event1?.time">
        Time: {{event1?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event1?.price}}</div>
    <div *ngIf="event1.location">
        <span>Location: {{event1.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event1.location.city}}, {{event1.location.country}}</span>
    </div>
    <div *ngIf = "event1.onlineUrl">
        Online Url: {{event1.onlineUrl}}
    </div>
</div>`,
styles:[`.well{background-color:rgba(255,255,255, 0.6)}
.well{
    height:200px;
}
.well:hover {
    background-color:rgba(255,255,255, 0.8);
    cursor: pointer;
  }`]
})

export class EventThumbnailComponent{
@Input() event1:any;
}