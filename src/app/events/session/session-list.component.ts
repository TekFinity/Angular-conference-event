import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import {AuthService} from '../../user/auth.service';
import { VoterService } from '../shared/voter.service';
@Component({
selector: 'session-list',
templateUrl: './session-list.component.html',
styles: [`
div{
    cursor:pointer
}
`
]
})

export class SessionListComponent implements OnChanges{
    @Input()session: ISession[];
    @Input() filterBy: string;
    visibleSession: ISession[];
    constructor(private auth: AuthService, private voterService: VoterService){}

    ngOnChanges(): void{
        if (this.session){
            if (this.filterBy === 'all'){
                this.visibleSession = this.session.slice(0);
            } else{
                this.visibleSession = this.session.filter(s => this.filterBy === s.level.toLowerCase());
            }
        }
    }
    ToggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
    }
    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }
}
