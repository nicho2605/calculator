import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Nicholas';
  constructor(private router:Router){}
  kiri = "";
  kanan = "";
  Operator="";
  Hasil=0;
  result(){
    this.count();
    this.router.navigate(['/result']);
  }
  getHasil(){
    return this.Hasil;
  }
  Input(x){
    if(this.Operator==""){
      this.kiri+=x;
    }
    else{
      this.kanan+=x;
    }
  }
  InputOperator(x){
    this.Operator=x;
  }
  count(){
    if(this.Operator == '*'){
      this.Hasil = parseInt(this.kiri) * parseInt(this.kanan);
    }
    else if(this.Operator == '+'){
      this.Hasil = parseInt(this.kiri) + parseInt(this.kanan);
    }
    else if(this.Operator == '-'){
      this.Hasil = parseInt(this.kiri) + parseInt(this.kanan);
    }
    else{
      this.Hasil = 0;
    }
    this.kiri = "";
    this.kanan = "";
    this.Operator="";
  }

}

