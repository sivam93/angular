import { Component,HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   browserRefresh = false
  subscription: Subscription;
  title = 'Invoice To Release';
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler($event: any) {  
    $event.returnValue =true;
    localStorage.removeItem('token');
  }
  constructor(private router: Router
  ) {
  }
  ngOnInit(){
  }
}
