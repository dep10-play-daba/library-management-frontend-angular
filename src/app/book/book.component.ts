import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Book} from '../dto/Book'
import {query} from "@angular/animations";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent {
  types:string[];
  bookList:Book[]=[];
  baseApiUrl:string;
  public bookIsbn: string;
  public bookTitle: string;
  public authorName: string;
  public bookRating: number;
  public bookCopies: number;
  public bookType: string;
  public bookUrl: string;
  public imageFile: any;
  public imageName: string;
  constructor(private http:HttpClient) {

    this.types=[''];
    this.baseApiUrl="http://localhost:8080/library";
    this.bookIsbn="";
    this.bookTitle="";
    this.authorName="";
    this.bookRating=0;
    this.bookCopies=0;
    this.bookType="Select a Type";
    this.bookUrl="";
    this.imageFile;
    this.imageName="";
    this.bookList=[];


    http.get<Array<Book>>('http://localhost:8080/library').subscribe(bookList =>{this.bookList=bookList as Array<Book>;
      console.log(this.bookList)})
  }

  saveBook(){
    let book=new Book(this.bookIsbn,this.bookTitle,this.authorName,this.bookRating,this.bookCopies,this.bookType,this.bookUrl)
    const formData = new FormData();
    if (this.imageFile) {formData.append("image", this.imageFile, this.imageName);}
    formData.append('Book', new Blob([JSON.stringify(book)], {type: "application/json"}));
    this.http.post(this.baseApiUrl, formData).subscribe(resp => console.log(resp));
    this.clearFields();
  }

  clearFields(){
  }

  getfile(event: any) {
    console.log('working');
  this.imageFile=event.target.files[0];
  this.imageName=this.imageFile.name;
  }
  setBookTitle(event:any) {this.bookTitle=event;}
  setBookCopies(value: string) {this.bookCopies=Number(value);}
  setBookRating(value: string) {this.bookRating=Number(value);}
  setCategory(event:any) {this.bookType=event;}
  setAuthor(value: string) {this.authorName=value;}
  createCategory(event:any) {
    this.bookType=event.value;
    this.types.push(this.bookType);
    event.value='';
  }

  queryForSearch(value: string) {
    let params = new URLSearchParams();
   params.append('q',value);
    console.log(value);
    this.http.get<Array<Book>>('http://localhost:8080/library?'+params.toString()).subscribe(bookList =>{this.bookList=bookList as Array<Book>;
      console.log(this.bookList)})
  }
}

