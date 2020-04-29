import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private router:Router){}
  result(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    
  }

}