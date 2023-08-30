import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {HomeComponent} from "./home/home.component";
import {BookComponent} from "./book/book.component";
import {RequestsComponent} from "./requests/requests.component";
import {AuthenticationGuard} from "./authentication.guard";
import {LoginComponent} from "./login/login.component";
const routes: Routes = [
  {path:'',canActivate:[AuthenticationGuard],children:[
    {path:'member',component:MemberComponent},
      {path:'home',component:HomeComponent},
      {path:'book',component:BookComponent},
      {path:'login',component:LoginComponent},
      {path:'requests',component:RequestsComponent},
      {path:'**',redirectTo:''}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
