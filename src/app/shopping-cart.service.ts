import { Product } from './Product';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http:HttpClient,
     ) { }

  private create() {
      return this.http.get('http://localhost:8090/shoppingcart');
  }

  private getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
        this.create().toPromise().then(result => {
            localStorage.setItem('cartId', result.body.id);
        });
        return localStorage.getItem('cartId');
    } else {
          return cartId;
    }
  }

  addToCart(product: Product) {
    let cartId = this.getOrCreateCartId();
    const params = new HttpParams()
    .set('cartId', cartId)
    .set('itemsKey', product.id);
    lthis.http.post('http://localhost:8090/shoppingcart' + 'cartId' + )
  }
}
