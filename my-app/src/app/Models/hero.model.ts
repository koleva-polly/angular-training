export class Hero {
    id : number;
    name : string;

    constructor(hero : IHero){
        if(hero) {
            this.id = hero.id;
            this.name = hero.name;
        }
    }
}

export interface IHero {
    id : number;
    name : string;
}