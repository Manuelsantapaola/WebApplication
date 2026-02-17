import {Component} from '@angular/core';
import {Home} from './home/home';
@Component({
  selector: 'app-root',
  imports: [Home],
  template: ` <main>
      <section class="content">
        <app-home />
      </section>
      <section class="hero">
        <img src="assets/32.png" alt="Materassi">
        <!-- <div class="overlay">
          <img class="logo" src="assets/angular.svg" alt="Logo">
        </div> -->
      </section>
    </main>`,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
