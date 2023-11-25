import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../Book/book-service.service';
import { mergeMap } from 'rxjs';
import { Book } from '../Book/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  apiURL = 'http://localhost:8080/Book'; 

  

  constructor(private httpClient: HttpClient, private service: BookServiceService) {}

  ngOnInit() {
    this.service.getAllBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  addCart(book: any) {
    let dataToSend: any;

    this.service.getBookById(book.id).subscribe(
      (result) => {
        console.log(result);

        // Assuming 'result' is an object with 'price' and 'name' properties
        if (result && result.price !== undefined && result.name !== undefined) {
          dataToSend = {
            bookData: {
              id: book.id,
              price: result.price,
              name: result.name,
            }
          };

          this.service.addCart(dataToSend.bookData).subscribe(
            (res) => {
              console.log(res);
              // Do something with the response from 'addToCart'
              console.log('Data sent to addToCart:', dataToSend);
            },
            (error) => {
              console.error('Error:', error);
             
            }
          );
        } else {
          console.error('Invalid data received from getBookById');
        }
      },
      (error) => {
        console.error('Error:', error);
       
      }
    );
  }
}
