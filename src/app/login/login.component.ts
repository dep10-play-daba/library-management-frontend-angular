import {Component, Injectable, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SharedService} from "../../SharedService";
import {Router} from "@angular/router";
@Injectable({
  providedIn:"root"
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  model: any = {};
  sessionId: any = "";
  private currentUser: any="";

  constructor(
    private router: Router,
    private http: HttpClient,private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')){
      localStorage.removeItem('currentUser')
      console.log(sessionStorage.getItem('token'))
      this.router.navigate(['/']);
    }
  }

  logins() {
    let url = 'http://localhost:8080/login';
    this.http.post<any>(url, {
      name:this.model.username,
      password:this.model.password
    }).subscribe(res => {
      if (res) {

        this.sessionId = res.sessionId;
        this.currentUser = res.username;

        sessionStorage.setItem(
          'token',
          this.sessionId
        );
        localStorage.setItem(
          'currentUser',
          this.currentUser
        );
        this.router.navigate(['/']);

      } else {
        alert("Authentication failed.")
      }
    });
  }

}
