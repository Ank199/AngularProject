import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../Book/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BookServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [
        null,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  AddBook() {
    if (this.bookForm.valid) {
      this.service.addData(this.bookForm.value).subscribe((info) => {
        console.log(info);
      });
      this.router.navigate(['/List']);
    }
  }
}
