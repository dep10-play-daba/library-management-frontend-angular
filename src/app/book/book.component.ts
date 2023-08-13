import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent {
  books = [
    {id: 1, name:'Superman',urls:'../assets/images/book1.png'},
    {id: 2, name:'Batman',urls:'../assets/images/book2.png'},
    {id: 5, name:'BatGirl',urls:'../assets/images/book5.png'},
    {id: 3, name:'Robin',urls:'../assets/images/book3.png'},
    {id: 4, name:'Flash',urls:'../assets/images/book4.png'},
    {id: 1, name:'Superman',urls:'../assets/images/book1.png'},
    {id: 2, name:'Batman',urls:'../assets/images/book2.png'},
    {id: 5, name:'BatGirl',urls:'../assets/images/book5.png'},
    {id: 3, name:'Robin',urls:'../assets/images/book3.png'},
    {id: 4, name:'Flash',urls:'../assets/images/book4.png'},
    {id: 1, name:'Superman',urls:'../assets/images/book1.png'},
    {id: 2, name:'Batman',urls:'../assets/images/book2.png'},
    {id: 5, name:'BatGirl',urls:'../assets/images/book5.png'},
    {id: 3, name:'Robin',urls:'../assets/images/book3.png'},
    {id: 4, name:'Flash',urls:'../assets/images/book4.png'},
    {id: 1, name:'Superman',urls:'../assets/images/book1.png'},
    {id: 2, name:'Batman',urls:'../assets/images/book2.png'},
    {id: 5, name:'BatGirl',urls:'../assets/images/book5.png'},
    {id: 3, name:'Robin',urls:'../assets/images/book3.png'},
    {id: 4, name:'Flash',urls:'../assets/images/book4.png'},
    {id: 1, name:'Superman',urls:'../assets/images/book1.png'},
    {id: 2, name:'Batman',urls:'../assets/images/book2.png'},
    {id: 5, name:'BatGirl',urls:'../assets/images/book5.png'},
    {id: 3, name:'Robin',urls:'../assets/images/book3.png'},
    {id: 4, name:'Flash',urls:'../assets/images/book4.png'}
  ];
}
