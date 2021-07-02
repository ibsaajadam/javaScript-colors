   const indigoStyle = document.querySelector('.indigo-circle');
   const cyanStyle = document.querySelector('.cyan-circle');
   const magentaStyle = document.querySelector('.magenta-circle');
   const maroonStyle = document.querySelector('.maroon-circle');
   const navyStyle = document.querySelector('.navy-circle');
   const notFound = document.querySelector('.not-found');
    
    
    
    ////////// Change color on link click
    // Indigo
    function myIndigo() {
      const indigo = document.querySelector('.indigo');

      if (indigo) {
        indigoStyle.style.display = "block";
        cyanStyle.style.display = "none";
        magentaStyle.style.display = "none";
        maroonStyle.style.display = "none";
        navyStyle.style.display = "none";
        notFound.style.display = "none";
      } else {
        indigoStyle.style.display = "none";
      }
    }

    // Cyan
    function myCyan() {
      const cyan = document.querySelector('.cyan');

      if (cyan) {
        cyanStyle.style.display = "block";
        indigoStyle.style.display = "none";
        magentaStyle.style.display = "none";
        maroonStyle.style.display = "none";
        navyStyle.style.display = "none";
        notFound.style.display = "none";
      } else {
        cyanStyle.style.display = "none";
      }
    }


    // Magenta
    function myMagenta() {
      const magenta = document.querySelector('.magenta');

      if (magenta) {
        magentaStyle.style.display = "block";
        indigoStyle.style.display = "none";
        cyanStyle.style.display = "none";
        maroonStyle.style.display = "none";
        navyStyle.style.display = "none";
        notFound.style.display = "none";
      } else {
        magentaStyle.style.display = "none";
      }
    }

    // Maroon
    function myMaroon() {
    const maroon = document.querySelector('.maroon');

    if (maroon) {
      maroonStyle.style.display = "block";
      magentaStyle.style.display = "none";
      indigoStyle.style.display = "none";
      cyanStyle.style.display = "none";
      navyStyle.style.display = "none";
      notFound.style.display = "none";
    } else {
      maroonStyle.style.display = "none";
    }
  }

  // Navy
  function myNavy() {
  const navy = document.querySelector('.navy');

  if (navy) {
    navyStyle.style.display = "block";
    magentaStyle.style.display = "none";
    indigoStyle.style.display = "none";
    cyanStyle.style.display = "none";
    maroonStyle.style.display = "none";
    notFound.style.display = "none";
  } else {
    navyStyle.style.display = "none";
  }
}

    ////////// Show colors
    function myFunction() {
      const x = document.querySelector(".colors");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    ////////// Input Display Color
    function myTry() {
      var x, text;
      const cyan = document.querySelector('.cyan-circle');
      const indigo = document.querySelector('.indigo-circle');
      const magenta = document.querySelector('.magenta-circle');
      const maroon = document.querySelector('.maroon-circle');
      const navy = document.querySelector('.navy-circle');

      x = document.querySelector(".form-control").value;
      t = x.toLowerCase();

      if (t == 'cyan') {
        cyan.style.display = "block";
        notFound.style.display = "none";
      } else {
        cyan.style.display = "none";
      }
      if (t == 'indigo') {
        indigo.style.display = "block";
        notFound.style.display = "none";
      } else {
        indigo.style.display = "none";
      }
      if (t == 'magenta') {
        magenta.style.display = "block";
        notFound.style.display = "none";
      } else {
        magenta.style.display = "none";
      }
      if (t == 'maroon') {
        maroon.style.display = "block";
        notFound.style.display = "none";
      } else {
        maroon.style.display = "none";
      }
      if (t == 'navy') {
        navy.style.display = "block";
        notFound.style.display = "none";
      } else {
        navy.style.display = "none";
      }
      if (t !== 'cyan' && t !== 'indigo' && t !== 'magenta' && t !== 'maroon' && t !== 'navy') {
        notFound.innerHTML = "Sorry, color not found";
      } else {
        notFound.style.display = "none";
      }
    }

    ////////// Color Display on Enter w/ JQuery

    $('.form-control').keyup(function(e) {
      if (e.keyCode === 13) {
        $('.input-group-text').click();
      }
    });