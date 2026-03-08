import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type MattressCategory = {
    title: string;
    description: string;
    image: string;
};

@Component({
    selector: 'app-materassi',
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
    styleUrls: ['./materassi.css']
})
export class Materassi {
    categories: MattressCategory[] = [
        {
            title: ' ORSA FOAM',
            description:
                'Il materasso ortopedico a molle con la massima traspirabilità garantita dall’utilizzo di materiali di ultima generazione.',
            image: '/assets/32.png'
        },
        {
            title: ' MEMORY FOAM',
            description:
                'Un materasso all’avanguardia e ad alta tecnologia, progettato per offrire leggerezza, comfort e versatilità.',
            image: '/assets/materassi/memory.png'
        },
        {
            title: 'ESPANSI AD ALTA DENSITA',
            description:
                'Una soluzione elegante e accogliente, ideale per chi cerca un riposo confortevole e una finitura raffinata.',
            image: '/assets/materassi/espando.png'
        },
        {
            title: ' MOLLE INSACCHETATE',
            description:
                'Design essenziale e sostegno bilanciato per un’esperienza di riposo moderna e rilassante.',
            image: '/assets/materassi/molle.png'
        }
    ];
}