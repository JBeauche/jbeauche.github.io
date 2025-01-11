function loadNavbarFr() {
  const currentPage = window.location.pathname;

  // Determine if we're on the home page
  const isHomePage = currentPage === "/index.html" || currentPage === "/";

  // Set class for Accueil button based on whether it's the home page
  const accueilClass = isHomePage ? "green" : "black";

  // Define page mappings from French to English
  const pageMappings = {
    "/index.html": "/docs/english/index-en.html",
    "/docs/francais/ecole.html": "/docs/english/school.html",
    "/docs/francais/vente.html": "/docs/english/sale.html",
    "/docs/francais/entrainement.html": "/docs/english/training.html",
    "/docs/francais/zootherapie.html": "/docs/english/zootherapy.html",
  };

  // Get the corresponding English page for the current French page
  const englishPage =
    pageMappings[currentPage] || "/docs/english/index-en.html"; // Default to home if not mapped

  // Define the navbar HTML without the Équitation dropdown
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
          <a href="/docs/francais/ecole.html" class="bar-item button hover-gold ${
            currentPage === "/docs/francais/ecole.html" ? "green" : ""
          }">
            École</a>
          <a href="/docs/francais/vente.html" class="bar-item button hover-gold ${
            currentPage === "/docs/francais/vente.html" ? "green" : ""
          }">
            Vente</a>
          <a href="/docs/francais/entrainement.html" class="bar-item button hover-gold ${
            currentPage === "/docs/francais/entrainement.html" ? "green" : ""
          }">
            Entrainement</a>
          <a href="/docs/francais/zootherapie.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/francais/zootherapie.html" ? "green" : ""
          }">
            Zoothérapie</a>
          <a href="${englishPage}" class="bar-item button hide-small hover-gold right">
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
        <a href="/docs/francais/vente.html" class="bar-item button ${
          currentPage === "/docs/francais/vente.html" ? "green" : ""
        }">
          Vente</a>
        <a href="/docs/francais/entrainement.html" class="bar-item button ${
          currentPage === "/docs/francais/entrainement.html" ? "green" : ""
        }">
          Entrainement</a>
        <a href="/docs/francais/zootherapie.html" class="bar-item button ${
          currentPage === "/docs/francais/zootherapie.html" ? "green" : ""
        }">
          Zoothérapie</a>
        <a href="/index.html#contact" class="bar-item button ${
          currentPage.includes("/index.html#contact") ? "green" : ""
        }">
          Contact</a>
        <a href="${englishPage}" class="bar-item button">
          EN</a>
      </div>
    `;

  document.getElementById("navbar-fr").innerHTML = navbarFrHTML;
}
