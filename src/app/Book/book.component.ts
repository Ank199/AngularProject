import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { Book } from './Book';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  data: Book[] = [];

  constructor(private bookService: BookServiceService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.refreshData();
  }


  // addBook(data: any): void {
  //   this.bookService.addData(data).subscribe(
  //     (info) => {
  //       console.log('Book added successfully:', info);
  //       this.refreshData();
  //     },
  //     (error) => {
  //       console.error('Error adding book:', error);

  //     }
  //   );
  // }

  
  deleteBook(id: number): void {
    this.bookService.deleteBookById(id).subscribe(
      () => {
        console.log('Book deleted successfully.');
      },
      (error) => {
        console.error('Error deleting book:', error);
  
        // Check if the error status is 200 and treat it as a success
        if (error.status === 200) {
          console.log('Book deleted successfully.');
          this.data = this.data.filter(book => book.id !== id);
          this.cdr.detectChanges();
        } else {
         
        }
      }
    );
  }
  

 
  private refreshData(): void {
    this.bookService.getAllBooks().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching books:', error);

      }
    );
  }
}
