import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../shared/events.service';
import { ISession } from '../shared/event.model';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`  em{
       padding-left:10px;
       float:right;
       color:#E05C65;
     }
     .img{
         width:11rem;
         height:10rem;
         margin-top:0.5rem
     }
     .error input,.error select,.error textarea: not(option){
       background-color: #E3C3C5;
     }
     .error ::-webkit-input-placeholder{color:#999;}
     .error ::-moz-placeholder{color:#999;}
     .error :-moz-placeholder{color:#999;}
     .error :ms-input-placeholder{color:#999}`]
})


export class CreateSessionComponent implements OnInit{
    @Output() SaveNewSession = new EventEmitter();
    @Output() cancelSession = new EventEmitter();
    sessionForm: FormGroup;
    constructor(private eventService: EventService){

    }
    ngOnInit(): void{
        this.sessionForm = new FormGroup({
            name : new FormControl('', Validators.required),
            presenter : new FormControl('', Validators.required),
            duration : new FormControl('', Validators.required),
            level : new FormControl('', Validators.required),
            abstract : new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'you'])])
        });

    }
    private restrictedWords(words){
       return (control: FormControl): {[key: string]: any} => {
            if (!words) {
            return null;
            }
            const invalidWords = words.map((i: any) => control.value.includes(i) ? i : null).filter((i: any) => i !== null);
            return invalidWords && invalidWords.length > 0 ? {restrictedWords: invalidWords.join(',')} : null;

    };
}
OnCancel(): void{
    this.cancelSession.emit();
}
    SaveSession(formValue): void{
      const newSession: ISession = {
           id : undefined,
    name : formValue.name,
    presenter : formValue.presenter,
    duration : formValue.duration,
    level: formValue.level,
    abstract : formValue.abstract,
    voters: []
      };
      this.SaveNewSession.emit(newSession);
    }


}
