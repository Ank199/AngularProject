import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookServiceService } from '../Book/book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  bookId!: number; // Assuming the book ID is a number

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookServiceService,private router:Router) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

    // Subscribe to changes in the route params
    this.route.params.subscribe(params => {
      // Extract the book ID from the route parameters
      this.bookId = +params['id'];
      
      // Fetch the book details using the updated ID
      this.fetchBookDetails();
    });
  }

  fetchBookDetails() {
    this.bookService.getBookById(this.bookId).subscribe(
      (book: any) => {
        // Update the form with the retrieved book details
        this.bookForm.patchValue({
          id: book.id,
          name: book.name,
          price: book.price
        });
      },
      (error) => {
        console.error('Error fetching book details:', error);
        // Handle the error (e.g., display a message to the user)
      }
    );
  }

  updateBook() {
    const formData = this.bookForm.value;

    this.bookService.updateBookById(this.bookId, formData).subscribe(
      (updatedBook: any) => {
        console.log('Book updated successfully:', updatedBook);
        // Optionally, navigate to the book details or another page on success
       this.routePage();
      },
      (error) => {
        console.error('Error updating book:', error);
        // Handle the error (e.g., display a message to the user)
      }
    );
  }

  routePage(){
    this.router.navigate(['/List']);
  }
}
