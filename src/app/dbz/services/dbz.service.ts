import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [{

    id: uuid(),
    name:'Krilin',
    power:1000
  }, {
     id: uuid(),
     name:'Goku',
     power:10000


  }, {
    id: uuid(),
    name:'Vegeta',
    power:20000


 }];

 onNewCharacter(character: Character): void {

   const newCharacter: Character = {id:uuid(), ...character}

   this.characters.push(newCharacter);

 }

// onDeleteCharacter(index: number) {
//  this.characters.splice(index,1);

//}


 deleteCharaterId( id:string ){
      this.characters = this.characters.filter(character => character.id != id);

 }

}

