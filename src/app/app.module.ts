import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResultComponent } from './result/result.component';
import { GlobalService } from './global.service';
import { Routes,RouterModule } from '@angular/router';

const ROUTES:Routes=[
  {path:'result',component:ResultComponent},
  {path:'home',component:AppComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, ResultComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService]
})
export class AppModule { }
