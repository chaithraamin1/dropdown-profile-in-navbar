import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropdown-profile-menu';
  ngOnInit(){
    var profile:any=document.getElementById("profile");
    var dropdown:any=document.getElementById("dropdown")
    profile.onclick=function(){
      dropdown.classList.toggle("show")
    }
  }
}
