import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})


export class ViewsComponent implements OnInit {
  loadingMain:boolean;
  constructor(private router: Router) {
    this.loadingMain = false;
   }

  ngOnInit() {
  }

  ngAfterViewInit():void
  {
    this.router.events.subscribe((event) => {
        if(event instanceof NavigationStart) {
            this.loadingMain = true;
        }
        else if (
            event instanceof NavigationEnd || 
            event instanceof NavigationCancel
            ) {
            this.loadingMain = false;
        }
    });
  }
}
