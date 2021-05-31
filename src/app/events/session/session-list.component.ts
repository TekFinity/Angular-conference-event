import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

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

    ngOnChanges(): void{
        if(this.session){
            if(this.filterBy ==='all'){
                this.visibleSession = this.session.slice(0);
            } else{
                this.visibleSession = this.session.filter(s=>this.filterBy===s.level.toLowerCase())
            }
        }
    }
}
