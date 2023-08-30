import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from '../dto/Book'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent {
  types:string[]=[''];
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


  baseApiUrl:string = "http://localhost:8080/library";
  imageFile:any;
  imageName:string;
  bookIsbn:string ='1234-213-23-1';
  bookTitle:string;
  authorName:string;
  bookRating:number;
  bookCopies:number;
  bookType:string;
  bookUrl:string;

  constructor(private http:HttpClient) {
    this.types=['science'];
    this.bookIsbn='1234-213-23-1';
    this.bookTitle='';
    this.authorName='';
    this.bookRating=0;
    this.bookCopies=0;
    this.bookType='Select a Type';
    this.baseApiUrl="http://localhost:8080/library";
    this.bookUrl='';
    this.imageName='';
    this.imageFile;
  }
  saveBook(){
    let book=new Book(this.bookIsbn,this.bookTitle,this.authorName,this.bookRating,this.bookCopies,this.bookType,this.bookUrl)
    const formData = new FormData();
    // Store form name as "file" with file data

    if (this.imageFile) {
      formData.append("image", this.imageFile, this.imageName);
    }
    formData.append('Book', new Blob([JSON.stringify(book)], {type: "application/json"}));
    // Make http post request over api
    // with formData as req
    console.log(book);
    this.http.post(this.baseApiUrl, formData)
      .subscribe(resp => console.log(resp));
this.clearFields();
  }
  clearFields(){
    this.bookIsbn='1234-213-23-1';
    this.bookTitle='';
    this.authorName='';
    this.bookRating=0;
    this.bookCopies=0;
    this.bookType='Select a Type';
    this.baseApiUrl="http://localhost:8080/library";
    this.bookUrl='';
    this.imageName='';
    this.imageFile;
  }
  getfile(event: any) {
    console.log('working');
  this.imageFile=event.target.files[0];
  this.imageName=this.imageFile.name;
  }

  setBookTitle(event:any) {
    this.bookTitle=event;
  }

  setBookCopies(value: string) {
    this.bookCopies=Number(value);
  }

  setBookRating(value: string) {
    this.bookRating=Number(value);
  }

  setCategory(event:any) {
    this.bookType=event;
  }

  setAuthor(value: string) {
    this.authorName=value;
  }

  createCategory(event:any) {
    this.bookType=event.value;
    this.types.push(this.bookType);
    event.value='';
  }
}
