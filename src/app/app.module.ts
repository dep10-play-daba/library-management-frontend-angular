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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { SharedServiceComponent } from './shared-service/shared-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RequestInterceptor} from "./request.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    HomeComponent,
    BookComponent,
    RequestsComponent,
    IssueComponent,
    ReturnComponent,
    LoginComponent,
    SharedServiceComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    MdbTooltipModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
