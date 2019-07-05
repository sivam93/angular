import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Item11 :string="Item1";
  htmlss:string;
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.Item11="Select any one of the cars";
  }
  fill(){
    this.Item11="<mat-card-content><title>BMW SERIES</title><div>Spec details and Availability</div><button mat-icon-button style=\"background-color:purple;\" >Book?</button></mat-card-content>";
  }
}
