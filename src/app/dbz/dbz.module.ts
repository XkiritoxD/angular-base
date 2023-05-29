import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponet } from './components/add-character/add-charater.component';





@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponet
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
