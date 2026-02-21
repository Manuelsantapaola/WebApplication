import {Component} from '@angular/core';
import {Home} from './home/home';
@Component({
  selector: 'app-root',
  imports: [Home],
  template: ` <main>
      <section class="content">
        <app-home />
      </section>
      <section class="hero-split">
        <!-- SINISTRA -->
        <div class="hero-left">
          
          <img class="hero-cover"
               src="assets/foto1.jpg"
               alt="Camera da letto elegante">
          <div class="overlay"></div>
          <div class="hero-overlay">
            <h1>Il comfort che meriti</h1>
            <p>Materassi artigianali da oltre 30 anni</p>
          </div>
          
        </div>

        <!-- DESTRA -->
        <aside class="hero-right">

          <div class="mattress-card">
            <h3 class="mattress-title">MEMORYBLU</h3>
            <img src="assets/memoryblu.png" alt="Materasso 1">
            <button class="btn-discover">Scopri</button>
          </div>

          <div class="mattress-card">
            <h3 class="mattress-title">GLAMOUR</h3>
            <img src="assets/GLAMOUR.png" alt="Materasso Glamour">
            <button class="btn-discover">Scopri</button>
          </div>

          <div class="mattress-card">
            <h3 class="mattress-title">MOON</h3>

            <img src="assets/moon1.png" alt="Materasso 2">
            <button class="btn-discover">Scopri</button>
          </div>

        </aside>

      </section>
     <section class="story">
      <div class="story__inner">
        <div class="story__media">
          <img src="assets/21.png" alt="Dettaglio materasso">
        </div>

        <div class="story__content">
          <h2>Oltre 30 anni di storia</h2>
          <p>
            Il nostro store rappresenta, sin dagli inizi degli anni 2000, un punto di riferimento
            a Roma per tutti coloro che desiderano riposare bene.
          </p>

          <a class="story__btn" href="#storia">LA NOSTRA STORIA</a>
        </div>
      </div>
     </section>
    </main>`,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
