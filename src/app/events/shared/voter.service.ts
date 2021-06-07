import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()

export class VoterService{
    deleteVoter(session: ISession, voterName){
        session.voters = session.voters.filter(i => i !== voterName);
    }

    addVoter(session: ISession, voterName){
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName){
        return session.voters.some(i => i === voterName );
    }
}
