import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../Book/book-service.service';
import { cart } from '../home/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  
  [x: string]: any;

  cartList: cart[] = [];

  constructor(private service: BookServiceService) {}

  ngOnInit() {
 
    this.AllCart();
  }

  AllCart() {
    console.log('Fetching cart data...');
    this.service.getAllCart().subscribe(
      (data) => {
        console.log('Cart data received:', data);
        this.cartList = data;
      },
      (error) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }

  calculateTotal(): number {
    
    return this.cartList.reduce((total, cart) => total + cart.price, 0);
  }


  delete(id: number): void {
    this.service.deleteCart(id).subscribe(
      () => {
        console.log('cart deleted successfully.');
      },
      (error) => {
        console.error('Error deleting book:', error);
  
        // Check if the error status is 200 and treat it as a success
        if (error.status === 200) {
          console.log('Book deleted successfully.');
          this.cartList = this.cartList.filter(cart => cart.id !== id);
          this['cdr'].detectChanges();
        } else {
          // Handle other errors
          // ...
        }
      }
    );
  }
  
  
}
