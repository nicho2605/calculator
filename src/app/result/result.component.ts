import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {Router} from '@angular/router'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private appComponent: AppComponent,
    private router : Router){}
  Hasil=0;
  ngOnInit() {
    this.Hasil = this.appComponent.getHasil();
  }
  back(){
    this.router.navigate(['../']);
  }


}