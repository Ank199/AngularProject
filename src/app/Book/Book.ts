export class Book {
  find(arg0: (item: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  id: number;
    name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
