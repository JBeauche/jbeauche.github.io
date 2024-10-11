function loadNavbarFr() {
  const currentPage = window.location.pathname;

  // Determine if we're on the home page
  const isHomePage = currentPage === "/index.html" || currentPage === "/";

  // Set class for Accueil button based on whether it's the home page
  const accueilClass = isHomePage ? "green" : "black";

  // Check if we are on one of the Equitation pages
  const isEquitationPage = [
    "/docs/francais/ecole.html",
    "/docs/francais/pension.html",
    "/docs/francais/vente.html",
    "/docs/francais/entrainement.html",
  ].includes(currentPage);

  // Set the Equitation button class based on whether one of its pages is active
  const equitationClass = isEquitationPage ? "green" : "";

  // Define the navbar HTML with dynamic classes
  const navbarFrHTML = `
      <div class="top">
        <div class="bar theme-d2 left-align">
          <a
            class="bar-item button hide-medium hide-large right hover-gold theme-d2"
            href="javascript:void(0);"
            onclick="openNav()"
            ><i class="fa fa-bars"></i
          ></a>
          <a href="/index.html" class="${accueilClass} bar-item button hover-gold">
            <i class="fa fa-home margin-right"></i>Accueil</a>
          <div class="dropdown-hover hide-small">
            <button class="button hover-gold ${equitationClass}" title="equitation">
              Équitation <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content card-4 bar-block">
              <a href="/docs/francais/ecole.html" class="button hover-gold ${
                currentPage === "/docs/francais/ecole.html" ? "green" : ""
              }">
                École</a>
              <a href="/docs/francais/pension.html" class="button hover-gold ${
                currentPage === "/docs/francais/pension.html" ? "green" : ""
              }">
                Pension</a>
              <a href="/docs/francais/vente.html" class="button hover-gold ${
                currentPage === "/docs/francais/vente.html" ? "green" : ""
              }">
                Vente</a>
              <a href="/docs/francais/entrainement.html" class="button hover-gold ${
                currentPage === "/docs/francais/entrainement.html"
                  ? "green"
                  : ""
              }">
                Entrainement</a>
            </div>
          </div>
          <a href="/docs/francais/evenements.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/francais/evenements.html" ? "green" : ""
          }">
            Évènements</a>
          <a href="/docs/francais/zootherapie.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/francais/zootherapie.html" ? "green" : ""
          }">
            Zoothérapie</a>
          <a href="/docs/english/boarding.html" class="bar-item button hide-small hover-gold right">
            EN</a>
          <a href="/index.html#contact" class="bar-item button hide-small hover-gold right">
            Contact</a>
        </div>
      </div>
      <!-- Navbar on small screens -->
      <div id="navDemo" class="bar-block theme-d2 hide hide-large hide-medium show" style="padding-top: 10%">
        <a href="/docs/francais/ecole.html" class="bar-item button ${
          currentPage === "/docs/francais/ecole.html" ? "green" : ""
        }">
          École</a>
        <a href="/docs/francais/pension.html" class="bar-item button ${
          currentPage === "/docs/francais/pension.html" ? "green" : ""
        }">
          Pension</a>
        <a href="/docs/francais/vente.html" class="bar-item button ${
          currentPage === "/docs/francais/vente.html" ? "green" : ""
        }">
          Vente</a>
        <a href="/docs/francais/entrainement.html" class="bar-item button ${
          currentPage === "/docs/francais/entrainement.html" ? "green" : ""
        }">
          Entrainement</a>
        <a href="/docs/francais/evenements.html" class="bar-item button ${
          currentPage === "/docs/francais/evenements.html" ? "green" : ""
        }">
          Évènements</a>
        <a href="/docs/francais/zootherapie.html" class="bar-item button ${
          currentPage === "/docs/francais/zootherapie.html" ? "green" : ""
        }">
          Zoothérapie</a>
        <a href="/index.html#contact" class="bar-item button ${
          currentPage.includes("/index.html#contact") ? "green" : ""
        }">
          Contact</a>
        <a href="/docs/english/boarding.html" class="bar-item button">
          EN</a>
      </div>
    `;

  document.getElementById("navbar-fr").innerHTML = navbarFrHTML;
}
