function loadNavbar() {
  const currentPage = window.location.pathname;

  // Determine if we're on the home page
  const isHomePage =
    currentPage === "/docs/english/index-en.html" || currentPage === "/";

  // Set class for Home button based on whether it's the home page
  const homeClass = isHomePage ? "green" : "black";

  // Check if we are on one of the Equestrian pages
  const isEquestrianPage = [
    "/docs/english/school.html",
    "/docs/english/boarding.html",
    "/docs/english/sale.html",
    "/docs/english/training.html",
  ].includes(currentPage);

  // Set the Equestrian button class based on whether one of its pages is active
  const equestrianClass = isEquestrianPage ? "green" : "";

  // Define the navbar HTML with dynamic classes
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
          <div class="dropdown-hover hide-small">
            <button class="button hover-gold ${equestrianClass}" title="equitation">
              Equestrian <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content card-4 bar-block">
              <a href="/docs/english/school.html" class="button hover-gold ${
                currentPage === "/docs/english/school.html" ? "green" : ""
              }">
                Riding School</a>
              <a href="/docs/english/boarding.html" class="button hover-gold ${
                currentPage === "/docs/english/boarding.html" ? "green" : ""
              }">
                Boarding</a>
              <a href="/docs/english/sale.html" class="button hover-gold ${
                currentPage === "/docs/english/sale.html" ? "green" : ""
              }">
                For Sale</a>
              <a href="/docs/english/training.html" class="button hover-gold ${
                currentPage === "/docs/english/training.html" ? "green" : ""
              }">
                Training</a>
            </div>
          </div>
          <a href="/docs/english/events.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/english/events.html" ? "green" : ""
          }">
            Events</a>
          <a href="/docs/english/zootherapy.html" class="bar-item button hide-small hover-gold ${
            currentPage === "/docs/english/zootherapy.html" ? "green" : ""
          }">
            Zootherapy</a>
          <a href="/index.html" class="bar-item button hide-small hover-gold right">
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
        <a href="/docs/english/boarding.html" class="bar-item button ${
          currentPage === "/docs/english/boarding.html" ? "green" : ""
        }">
          Boarding</a>
        <a href="/docs/english/sale.html" class="bar-item button ${
          currentPage === "/docs/english/sale.html" ? "green" : ""
        }">
          For Sale</a>
        <a href="/docs/english/training.html" class="bar-item button ${
          currentPage === "/docs/english/training.html" ? "green" : ""
        }">
          Training</a>
        <a href="/docs/english/events.html" class="bar-item button ${
          currentPage === "/docs/english/events.html" ? "green" : ""
        }">
          Events</a>
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
        <a href="/index.html" class="bar-item button">FR</a>
      </div>
    `;

  document.getElementById("navbar").innerHTML = navbarHTML;
}
