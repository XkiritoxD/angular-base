import {Component, OnInit} from "@angular/core"


@Component({
 selector: 'app-counter',
 template: `


 <button (click)=" contador = contador + 1;"> + 1</button>

<span>{{contador}}</span>

<button (click)=" contador = contador - 1;"> - 1</button>




 `,


})


export class CounterComponent{

  contador: number = 10;

}
