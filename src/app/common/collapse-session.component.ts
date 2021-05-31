import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapse-session',
    template: `
    <div class="well" (click)="OnToggle()">
        <h5>
        <ng-content select="[collapse-title]"></ng-content>
        </h5>
        <ng-content select="[collapse-body]" *ngIf="isVisible"></ng-content>
    </div>
   `,
    styleUrls: []
})

export class CollapseSessionComponent {
isVisible = false;
OnToggle(): void{
this.isVisible = !this.isVisible;
}

}
