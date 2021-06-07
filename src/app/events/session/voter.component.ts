import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
    <div class="votingWdgetContainer pointable" (click)="OnClick()">
        <div class="well votingWidget">
            <div class="votingButton">
               <i *ngIf="voted" class="fa fa-heart" style="color: red;"></i>
               <i *ngIf="!voted"class="fa fa-heart-o" aria-hidden="true"></i>
               <div class="badge badge-inverse votingCount">
                   <div>{{count}}</div>
               </div>

            </div>
        </div>

    </div>`,

})

export class VoterComponent {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    OnClick(): void {
        this.vote.emit({});
    }

}
