import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { routes } from 'src/app/routes';
import { EventService } from '../events.service';

@Injectable()

export class EventRouteActivatorService implements CanActivate{
    constructor(private eventService: EventService, private router: Router){ }
    canActivate(routes: ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEventById(+routes.params['id']);
        if (!eventExists) {
        this.router.navigate(['/404']);
        }
        return eventExists;

    }
}
