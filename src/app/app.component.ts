import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  formModal: any;

  constructor() {}

  ngOnInit(): void {
  }

  openFormModal() {
    this.formModal.addClass('d-block');
  }

  title = 'library-management-service';
}
