import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Shehulk','Ironman','Thor'];
  public deletedhero?: string;

  removeLastHero():void{
  this.deletedhero = this.heroNames.pop();

  }

}