function loadNavbar() {
  const currentPage = window.location.pathname;

  // Determine if we're on the home page
  const isHomePage =
    currentPage === "/docs/english/index-en.html" || currentPage === "/";

  // Set class for Home button based on whether it's the home page
  const homeClass = isHomePage ? "green" : "black";

  // Define page mappings from English to French
  const pageMappings = {
    "/docs/english/index-en.html": "/index.html",
    "/docs/english/school.html": "/docs/francais/ecole.html",
    "/docs/english/sale.html": "/docs/francais/vente.html",
    "/docs/english/training.html": "/docs/francais/entrainement.html",
    "/docs/english/zootherapy.html": "/docs/francais/zootherapie.html",
  };

  // Get the corresponding French page for the current English page
  const frenchPage = pageMappings[currentPage] || "/index.html"; // Default to home if not mapped

  // Define the navbar HTML without the Equestrian dropdown
  const navbarHTML = `
      <div class="top">
        <div class="bar theme-d2 left-align">
          <a
            class="bar-item button hide-medium hide-large right hover-gold theme-d2"
            href="javascript:void(0);"
            onclick="openNav()"
            ><i class="fa fa-bars"></i
          ></a>
          <a href="/docs/english/index-en.html" class="bar-item button hover-gold ${homeClass}">
            <i class="fa fa-home margin-right"></i>Home</a>
          <a href="/docs/english/school.html" class="bar-item button hover-gold ${
            currentPage === "/docs/english/school.html" ? "green" : ""
          }">
            Riding School</a>
          <a href="/docs/english/sale.html" class="bar-item button hover-gold ${
            currentPage === "/docs/english/sale.html" ? "green" : ""
          }">
            For Sale</a>
          <a href="/docs/english/training.html" class="bar-item button hover-gold ${
            currentPage === "/docs/english/training.html" ? "green" : ""
          }">
            Training</a>
          <a href="/docs/english/zootherapy.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/english/zootherapy.html" ? "green" : ""
          }">
            Zootherapy</a>
          <a href="${frenchPage}" class="bar-item button hide-small hover-gold right">
            FR</a>
          <a href="/docs/english/index-en.html#contact" class="bar-item button hide-small hover-gold right ${
            currentPage.includes("/docs/english/index-en.html#contact")
              ? "green"
              : ""
          }">
            Contact</a>
        </div>
      </div>
      <!-- Navbar on small screens -->
      <div id="navDemo" class="bar-block theme-d2 hide hide-large hide-medium show" style="padding-top: 10%">
        <a href="/docs/english/school.html" class="bar-item button ${
          currentPage === "/docs/english/school.html" ? "green" : ""
        }">
          Riding School</a>
        <a href="/docs/english/sale.html" class="bar-item button ${
          currentPage === "/docs/english/sale.html" ? "green" : ""
        }">
          For Sale</a>
        <a href="/docs/english/training.html" class="bar-item button ${
          currentPage === "/docs/english/training.html" ? "green" : ""
        }">
          Training</a>
        <a href="/docs/english/zootherapy.html" class="bar-item button ${
          currentPage === "/docs/english/zootherapy.html" ? "green" : ""
        }">
          Zootherapy</a>
        <a href="/docs/english/index-en.html#contact" class="bar-item button ${
          currentPage.includes("/docs/english/index-en.html#contact")
            ? "green"
            : ""
        }">
          Contact</a>
        <a href="${frenchPage}" class="bar-item button">FR</a>
      </div>
    `;

  document.getElementById("navbar").innerHTML = navbarHTML;
}
