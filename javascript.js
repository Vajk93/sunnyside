

// mobile menu toggle with bar button
const mobileBarBtn = document.getElementById('mobileBar');
const mobileNav = document.getElementById('mobileNav');

function fn() {
 mobileNav.classList.toggle('mobileNavToggle');
}

  mobileBarBtn.addEventListener('click', fn);

  

// sticky nav
  window.onscroll = function() {
    let poz = window.scrollY;
    const desktopNav = document.querySelector('.desktop-nav');
  
    console.log(poz);
    if (poz > 65) {
      desktopNav.classList.add('sticky');
    } else {
      desktopNav.classList.remove('sticky');
    }
  }



  
  
 

  












