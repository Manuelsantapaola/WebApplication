import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type MattressCategory = {
    title: string;
    description: string;
    image: string;
};

@Component({
    selector: 'app-materassiorsa',
    imports: [CommonModule],
    template: `
    <section class="mattress-page">
      <div class="page-intro">
        <p class="eyebrow">Collezione</p>
        <h1>Materassi</h1>
        <p class="intro-text">
          Scopri la nostra selezione di materassi pensati per offrire comfort,
          sostegno e qualità artigianale.
        </p>
      </div>

      <div class="category-list">
        <article
          class="category-card"
          *ngFor="let item of categories"
          [style.backgroundImage]="'url(' + item.image + ')'"
        >
          <div class="category-overlay"></div>

          <div class="category-content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <button class="category-btn" type="button">
              Vai ai prodotti
            </button>
          </div>
        </article>
      </div>
    </section>
  `,
    styleUrls: ['./orsafoam.css']
})
export class Materassiorsa {
    categories: MattressCategory[] = [
        {
            title: ' GLAMOUR',
            description:
                'Il materasso ortopedico a molle con la massima traspirabilità garantita dall’utilizzo di materiali di ultima generazione.',
            image: '/assets/materassi/orsa/GLAMOUR.png'
        },
        {
            title: ' NUVOLA',
            description:
                'Un materasso all’avanguardia e ad alta tecnologia, progettato per offrire leggerezza, comfort e versatilità.',
            image: '/assets/materassi/orsa/nuvola.png'
        },

    ];
}