import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event.thumbnail.component';
import {NavBarComponent} from './nav/nav-bar.component';
import  {EventService} from './events/shared/events.service';
import {TOASTR_TOKEN} from './common/toastr.service';
import {JQ_TOKEN} from './common/jquery.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {ResolverRouteService} from './events/resolver-route.service';
import {AuthService} from './user/auth.service';
import {CreateSessionComponent} from './events/session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SessionListComponent} from './events/session/session-list.component';
import {CollapseSessionComponent} from './common/collapse-session.component';
import {SimpleModalComponent} from './common/simple-modal.component';
import {ModalTriggerDirective} from './common/modal-trigger.directive';
import {VoterComponent} from './events/session/voter.component';
import {VoterService} from './events/shared/voter.service';

declare let toastr;
const jQuery = window['$'];
@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapseSessionComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ],
  providers: [EventService, EventRouteActivatorService, ResolverRouteService, AuthService, VoterService,
  {provide: 'DeactivateRoute', useValue: CheckDirtyState},
{provide: TOASTR_TOKEN, useValue: toastr},
{provide: JQ_TOKEN, useValue: jQuery}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(Component: CreateEventComponent){
if (Component.isDirty) {
 return window.confirm('You have not saved this event, do you really want to cancel?');
}

return true;
}
