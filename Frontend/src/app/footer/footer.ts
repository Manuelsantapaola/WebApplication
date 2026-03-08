import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col">
          <div class="footer-logo">santapaola</div>

          <h4>PUNTI VENDITA</h4>

          <div class="footer-block">
            <div class="footer-title">ROMA</div>
            <div class="footer-text">
              Viale AXSCD SDSADDSA, 97/103<br />
              00XXX – Roma (RM)
            </div>
          </div>

          <div class="footer-block">
            <div class="footer-title">PONTE </div>
            <div class="footer-text">
              Viale Tor di Quinto, 23<br />
              00XXX -Roma  (RM)
            </div>
          </div>
        </div>

        <div class="footer-col">
          <a class="footer-link" href="#">La nostra storia</a>
          <a class="footer-link" href="#">Prodotti</a>
          <a class="footer-link" href="#">I nostri brand</a>
          <a class="footer-link" href="#">Contatti</a>

          <div class="footer-gap"></div>

          <a class="footer-link" href="#">Condizioni generali di vendita</a>
          <a class="footer-link" href="#">Informativa Privacy</a>
        </div>

        <div class="footer-col footer-social">
          <a class="social-icon" href="#">f</a>
          <a class="social-icon" href="#">◎</a>
          <a class="social-icon" href="#">G</a>
        </div>
      </div>

      <div class="footer-bottom">
        © SANTAPAOLA s.r.l. – Sede legale: Via DJKDJDJ, 34 – 00xxx Roma (RM) – P.IVA 123456789
      </div>
    </footer>
  `,
    styleUrls: ['./footer.css']
})
export class Footer {}