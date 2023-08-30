import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../SharedService";
import {LoginComponent} from "./login/login.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
loggedUser:any="";

  constructor(private sharedService: SharedService,private router:Router) {
  this.loggedUser=sharedService.getItem('currentUser');
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd){
        let x=true;
        if (this.loggedUser){
          x=false;
        }
        console.log(val.url==='/' && localStorage.getItem('currentUser')=='');
        console.log("user not available: ",localStorage.getItem('currentUser')=='');
        console.log("url : ",val.url==='/');
        if ((val.urlAfterRedirects==='/') && (localStorage.getItem('currentUser')!=='') && x){
          console.log(localStorage.getItem('currentUser'));
          window.location.reload();
          x=false;
        }
      }

    });
  }
  title = 'library-management-service';

  // ngOnInit(): void {
  //   window.addEventListener('storage', (event: StorageEvent) => {
  //     window.location.reload();
  //     if (event.key==='Enter') {
  //       // Handle the storage event here
  //       window.location.reload();
  //       this.loggedUser=localStorage.getItem('currentUser');
  //       console.log('Storage event detected:', event);
  //     }
  //   });
  // }
}
