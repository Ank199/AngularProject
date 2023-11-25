import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book'; 
import { cart } from '../home/cart';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private baseUrl = 'http://localhost:8080/Book';


  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/getAllBooks`);
  }

  addData(data: any): Observable<Book[]> {
    return this.http.post<Book[]>(`${this.baseUrl}/save`, data);
   
  }

  // deleteBookById(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  // }
  deleteBookById(id: number): Observable<Book[]> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<Book[]>(url);
  }
  updateBookById(id: number, updatedBook: Book): Observable<Book[]> {
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put<Book[]>(url, updatedBook);
  }
  getBookById(bookId: number): Observable<Book> {
    const url = `${this.baseUrl}/getBookById/${bookId}`;
    return this.http.get<Book>(url);
  }

  addCart(data: any): Observable<cart[]> {
    return this.http.post<cart[]>(`${this.baseUrl}/Add`, data);
  
  }
  getAllCart(): Observable<cart[]> {
    return this.http.get<cart[]>(`${this.baseUrl}/getAllCart`);
  }

  deleteCart(id: number): Observable<cart[]> {
    const url = `${this.baseUrl}/remove/${id}`;
    return this.http.delete<cart[]>(url);
  }
}
