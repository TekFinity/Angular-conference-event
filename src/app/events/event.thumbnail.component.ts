import { Component, Input } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:` <div class="well hoverwell thumbnail">
    <h2>{{event1.name}}</h2>
    <div>Date: {{event1.date}}</div>
    <div>Time: {{event1.time}}</div>
    <div>Price: {{event1.price}}</div>
    <div>
        <span>Location: {{event1.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event1.location.city}}, {{event1.location.country}}</span>
    </div>
</div>`
})

export class EventThumbnailComponent{
@Input() event1:any;
}