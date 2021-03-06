import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$;
  @Input() category;
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(data => {
      this.category$ = data.body;
    });
   }

  ngOnInit() {
  }

}
