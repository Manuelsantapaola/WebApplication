import {Component} from '@angular/core';
import { ToolBar} from './toolBar/toolBar';
import {RouterLink, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ToolBar, RouterLink, RouterLink, RouterOutlet],
  template: ` 
  <main>
    <tool-bar></tool-bar>
    <router-outlet></router-outlet>      
  </main>`,
  styleUrls: ['./app.css'],
})
export class App {

}
