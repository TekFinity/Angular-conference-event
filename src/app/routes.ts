import {  Routes} from '@angular/router';
import {EventListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
export const routes: Routes = [
    {path:'events/new', component: CreateEventComponent},
    {path: 'events', component: EventListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path:'404', component:Error404Component},
    {path:'**', redirectTo:'404',pathMatch:'full'}
];