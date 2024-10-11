function loadFooterFr() {
  const footerFrHTML = `
    <!-- Footer -->
    <footer class="container padding-32 theme-d1">
      <div
        style="position: relative; max-width: 300px"
        class="tooltip left hide-small"
      >
        <img src="/docs/images/logo-white-no-text.png" alt="logo-white" />
      </div>
      <div class="center" style="position: relative; left: -7.5%">
        <h3 class="hide-small">Retrouvez-nous sur les réseaux sociaux</h3>
        <a
          class="button xxlarge"
          href="https://www.facebook.com/vintageoasisfarm/"
          target="_blank"
          title="Facebook"
          ><i class="fa fa-facebook"></i
        ></a>
        <a
          class="button xxlarge"
          href="https://www.instagram.com/ferme.vintage.oasis.farm/"
          target="_blank"
          title="Instagram"
          ><i class="fa fa-instagram"></i
        ></a>
      </div>
      <div style="position: relative; z-index: 1" class="tooltip right">
        <a class="button theme" href="#accueil"
          ><span class="xlarge"> <i class="fa fa-chevron-circle-up"></i></span
        ></a>
      </div>
    </footer>
    `;
  document.getElementById("footer-fr").innerHTML = footerFrHTML;
}
