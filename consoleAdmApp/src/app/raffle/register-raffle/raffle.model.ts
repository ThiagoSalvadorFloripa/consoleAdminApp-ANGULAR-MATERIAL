import { Played } from 'src/app/played/list-played/played.model';

export class Raffle{

  constructor(public id: string,
              public amount: string,
              public number: string,
              public current: boolean,
              public played: Played){}
}
