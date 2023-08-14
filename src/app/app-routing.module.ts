import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {HomeComponent} from "./home/home.component";
import {BookComponent} from "./book/book.component";
import {RequestsComponent} from "./requests/requests.component";
const routes: Routes = [
  {path:'member',component:MemberComponent},
  {path:'admin',component:HomeComponent},
  {path:'book',component:BookComponent},
  {path:'requests',component:RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
