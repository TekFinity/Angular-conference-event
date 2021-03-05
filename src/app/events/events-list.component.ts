import {Component} from '@angular/core';

@Component({
    selector:'events-list',
    template:`<div >
    <h1>Upcoming Code Events</h1>
    <hr>
       <event-thumbnail [event1] = "event"></event-thumbnail>
</div>`
})
export class EventListComponent{

    event ={
        id:1,
        name:'Kick-off',
        date:'01/02/2020',
        time:'10:00AM',
        price:599.99,
        imageUrl:'/assets/images/kickStart.jpg',
        location:{
            address:'105t DT',
            city:'LA',
            country:'US'
        }
    }

}