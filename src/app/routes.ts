import {  Routes} from '@angular/router';
import {EventListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { ResolverRouteService } from './events/resolver-route.service';
import { CreateSessionComponent } from './events/session/create-session.component';
export const routes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['DeactivateRoute']},
    {path: 'events', component: EventListComponent, resolve: {events: ResolverRouteService}},
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: '404', component: Error404Component},
    {path: 'create-session' , component: CreateSessionComponent},
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
