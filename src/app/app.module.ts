import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MemberComponent} from "./member/member.component";
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { RequestsComponent } from './requests/requests.component';
import {MdbTooltipModule} from "mdb-angular-ui-kit/tooltip";
import { IssueComponent } from './issue/issue.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReturnComponent } from './return/return.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    HomeComponent,
    BookComponent,
    RequestsComponent,
    IssueComponent,
    ReturnComponent
  ],
  imports: [
    BrowserModule,
    MdbTooltipModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
