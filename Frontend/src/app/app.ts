import {Component} from '@angular/core';
import { ToolBar} from './toolBar/toolBar';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [ToolBar, RouterLink, RouterLink, RouterOutlet, Footer],
  template: ` 
  <main>
    <tool-bar></tool-bar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </main>`,
  styleUrls: ['./app.css'],
})
export class App {

}
