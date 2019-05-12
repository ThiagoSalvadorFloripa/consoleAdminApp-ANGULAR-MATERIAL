import { User } from 'src/app/user/register-user/user.model';
import { Raffle } from 'src/app/raffle/register-raffle/raffle.model';

export class Played{

  constructor(public id: string,
              public number: string,
              public timer: string,
              public user: User,
              public raffle: Raffle){}
}
