import { Component } from '@angular/core';
import { EventService } from '../events/shared/events.service';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent{
    constructor(public auth: AuthService, private events: EventService){}
    searchTerm;
    foundSessions: ISession[];

    OnSearch(term): void {
        this.events.SearchSession(term).subscribe(data => {
            this.foundSessions = data;
            console.log(this.foundSessions);
        });
    }
}
