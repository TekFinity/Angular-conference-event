import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event.thumbnail.component';
import {NavBarComponent} from './nav/nav-bar.component';
import  {EventService} from './events/shared/events.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {ResolverRouteService} from './events/resolver-route.service';
import {AuthService} from './user/auth.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService, ResolverRouteService, AuthService,
  {provide: 'DeactivateRoute', useValue: CheckDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(Component: CreateEventComponent){
if (Component.isDirty) {
 return window.confirm('You have not saved this event, do you really want to cancel?');
}

return true;
}
