import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
    selector:'simple-modal',
    template:`
    <div id="{{modalID}}" class="modal fade" #modal tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="CloseModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>`,
    styles:[`
    .modal-body{
        height: 250px;
        overflow-y: scroll;
    }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() modalID: string;
    @ViewChild('modal') container: ElementRef;
    constructor(@Inject(JQ_TOKEN) private $: any){}

    CloseModal(): void{
        this.$(this.container.nativeElement).modal('hide');
    }

}
