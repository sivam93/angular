import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Item1 :string="Item1";
  htmlss:string;
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }
  fill(){
    this.router.navigate(["cars"]);
  }
}
