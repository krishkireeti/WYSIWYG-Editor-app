import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myappproject';
  tabIndex = 2 ;
  onTabClick(index: number){
        this.tabIndex = index;
   }

  constructor(private rtr:Router) { }
      
  ngOnInit(){

  }

}
