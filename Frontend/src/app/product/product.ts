import { Component } from '@angular/core';

@Component({
    selector: 'app-product',
    standalone: true,
    template: `
    <div class="product-page">
      <h1>I nostri prodotti</h1>

      <div class="products-grid">
        <div class="product-card">Materassi</div>
        <div class="product-card">Cuscini</div>
        <div class="product-card">Letti</div>
        <div class="product-card">Divani</div>
        <div class="product-card">Poltrone</div>
      </div>
    </div>
  `,
    styleUrls: ['./product.css']
})
export class Product {}