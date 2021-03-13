import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import{EventListComponent} from './events/events-list.component';
import{EventThumbnailComponent} from './events/event.thumbnail.component';
import {NavBarComponent} from './nav/nav-bar.component';
import  {EventService} from './events/events.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


