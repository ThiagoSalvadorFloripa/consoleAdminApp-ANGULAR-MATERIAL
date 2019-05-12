import { Played } from 'src/app/played/list-played/played.model';

export class User{

  constructor(public id: string,
              public name: string,
              public email: string,
              public password: string,
              public repeat_password: string,
              public gold: BigInteger,
              public token_facebook: string,
	            public hash: string,
	            public played: Played){}
}
