document.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `
    <!--NavBar-->
    <header>
      <nav>
        <ul class="nav-bar">
          <a href="./index.html" style="text-decoration: none">
            <div class="cli">
              <span class="logo__mark">&gt;</span>
              <span class="logo__text">$ cd /home</span>
              <span class="logo__cursor"></span>
            </div>
          </a>
          <span class="menu">
            <li><a href="./about.html">About</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./feats.html">Feats</a></li>
            <li><a href="./resume.html">Resume</a></li>
          </span>
        </ul>
      </nav>
    </header>
    `
    
);
