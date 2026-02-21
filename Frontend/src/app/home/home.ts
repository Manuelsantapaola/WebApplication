import { Component, Output, EventEmitter } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { HousingLocation } from '../housing-location/housing-location';
import { NgFor } from '@angular/common';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  template: `
    <header class="topbar">
      <nav class="nav">
        <!-- Logo -->
        <a class="logo" href="/">
          <span class="logo-text">santapaola</span>
        </a>

        <!-- Links -->
        <ul class="menu">
          <li><a href="#">La nostra storia</a></li>

          <li class="has-dropdown">
            <a href="#" (click)="$event.preventDefault()">
              Prodotti <span class="chev">▾</span>
            </a>
            <div class="dropdown" (click)="onClick($event)">
              <a href="#">Materassi</a>
              <a href="#">Cuscini</a>
              <a href="#">Letti</a>
              <a href="#">Divani</a>
              <a href="#">Poltrone</a>
            </div>
          </li>

          <li><a href="#">I nostri brand</a></li>

          <li class="has-dropdown">
            <a href="#" (click)="$event.preventDefault()">
              Contatti <span class="chev"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .topbar{
      background:#fff;
      border-bottom:1px solid #e6e6e6;
    }

    .nav{
      max-width: 1200px;
      margin: 0 auto;
      padding: 18px 16px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 24px;
    }

    /* Logo “in scatola” */
    .logo{
      text-decoration:none;
      display:inline-flex;
      align-items:center;
      padding: 10px 14px;
      line-height: 1;
    }
    .logo-text {
      font-family: 'Playfair Display', serif;
      font-size: 34px;
      font-weight: 700;
      letter-spacing: 1px;
      color:#111;
    }
    /* Menu a destra */
    .menu{
      list-style:none;
      display:flex;
      align-items:center;
      gap: 28px;
      margin:0;
      padding:0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 600;
    }

    .menu a{
      color:#111;
      text-decoration:none;
      font-size: 16px;
      padding: 8px 2px;
      position: relative;
    }

    /* Dropdown */
    .has-dropdown{
      position:relative;
    }

    .chev{
      font-size: 14px;
      margin-left: 6px;
    }

    .dropdown{
      position:absolute;
      top: 100%;
      left: 0;
      min-width: 180px;
      background:#fff;
      border:1px solid #e6e6e6;
      box-shadow: 0 10px 30px rgba(0,0,0,.08);
      padding: 8px;
      display:none;
      z-index: 10;
    }

    .dropdown a{
      display:block;
      padding: 10px 10px;
      border-radius: 8px;
      font-weight: 600;
      white-space: nowrap;
    }

    .dropdown a:hover{
      background:#f5f5f5;
    }

    /* Hover per aprire */
    .has-dropdown:hover .dropdown{
      display:block;
    }

    /* Piccolo effetto underline come siti “puliti” */
    .menu > li > a::after{
      content:"";
      position:absolute;
      left:0;
      bottom:2px;
      width:0;
      height:2px;
      background:#111;
      transition: width .2s ease;
    }
    .menu > li > a:hover::after{
      width:100%;
    }

    /* Responsive super semplice */
    @media (max-width: 900px){
      .nav{ flex-direction: column; align-items: flex-start; }
      .menu{ flex-wrap: wrap; gap: 14px 18px; }
      .logo-text{ font-size: 30px; }
    }
  `]
})
export class Home {
 @Output() sectionChange = new EventEmitter<string>();

  onClick(event: MouseEvent) {
    const link = (event.target as HTMLElement).closest('a[data-section]') as HTMLAnchorElement | null;
    if (!link) return;

    event.preventDefault(); // perché sono <a href="#">

    const section = link.dataset['section'] as string;
    this.sectionChange.emit(section); // ✅ evento verso il parent
  }
}

