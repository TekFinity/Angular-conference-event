import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') modalID: string; 
    constructor(@Inject(JQ_TOKEN)private $: any, ref:ElementRef){
        this.el = ref.nativeElement;
    }
    el:HTMLElement;
    ngOnInit(){
        this.el.addEventListener('click',()=>{
this.$(`#${this.modalID}`).modal({ })
        })
        
    }
}