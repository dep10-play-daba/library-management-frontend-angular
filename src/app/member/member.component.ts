import { Component } from '@angular/core';
import {User}  from "../dto/User";
import {UserRole} from "../dto/UserRole"
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  title = 'library-management-service';
  UserList: User[];
  constructor(private http:HttpClient) {
    this.UserList=[];
    this.http.get("http://localhost:8080/user").subscribe(user=>{
      this.UserList=user as Array<User>;
      console.log(this.UserList);
    });
  }

  setUserID(value: string) {

  }
}
