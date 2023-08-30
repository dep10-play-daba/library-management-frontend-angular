import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../SharedService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  loggedUser:any="";

  constructor(private sharedService: SharedService,private router:Router) {
    this.loggedUser=sharedService.getItem('currentUser');
  }
  title = 'library-management-service';

  ngOnInit(): void {
    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key==='Enter') {
        // Handle the storage event here
        this.loggedUser=localStorage.getItem('currentUser');
        window.location.reload();
        console.log('Storage event detected:', event);
      }
    });
  }

  signOut() {
    if(confirm("Are you sure to Logout ? ")) {
      sessionStorage.removeItem('token');
      this.sharedService.removeItem('currentUser');
      this.loggedUser="";
      window.location.reload();
      this.router.navigateByUrl('/login');
    }

  }
}
