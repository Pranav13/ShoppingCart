import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  constructor(
        route: ActivatedRoute,
        private produtservice: ProductService,
         ) {
            this.produtservice.getAll().subscribe(products => {
              this.products = products.body;

              route.queryParamMap.subscribe(paramas => {
                this.category = paramas.get('category');

                this.filteredProducts = (this.category) ?
                  this.products.filter(p => p.category.categoryName === this.category) :
                  this.products;
            });

            });
  }


}
