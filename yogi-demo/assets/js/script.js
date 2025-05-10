// JavaScript Deobfuscated Version
// 1. Anti-debugging: Disable console functions
(function() {
    const noop = function() {};
    if (!window.console) window.console = {};
        ['log', 'warn', 'debug', 'info', 'error', 'exception', 'table', 'trace'].forEach(method => window.console[method] = noop);
})();

// 2. Lazy load images
function lazyLoadImages() {
    const images = document.getElementsByClassName('lazy');
    for (let img of images) {
        if (isInViewport(img)) {
            img.src = img.getAttribute('data-src');
        }
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('load', lazyLoadImages);

// 3. License validation blocker (from idyogi) - REMOVE THIS FOR CLEAN VERSION
// (function checkLicense() { ... })(); <-- Commented out intentionally

// 4. Form submission to WhatsApp
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("go-whatsapp")) {
        event.preventDefault();
        const name = document.querySelector("#form-x1").value;
        const phone = document.querySelector("#form-x2").value;
        const email = document.querySelector("#form-x3").value;
        const message = document.querySelector("#form-x4").value;
        const link = `https://api.whatsapp.com/send?phone=62819700066&text=*New Consultation Request*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;
        window.open(link, "_blank");
    }
});

// 5. Smooth scroll on button click
document.querySelector(".godown")?.addEventListener("click", function() {
    window.scrollTo({
        top: window.scrollY + 500,
        behavior: "smooth"
    });
});

// 6. Back to top button visibility toggle
document.addEventListener("scroll", function() {
    const backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
        backToTop?.classList.add("active");
    } else {
        backToTop?.classList.remove("active");
    }
});

// 7. Infinite Scroll template init (basic structure)
// This would require backend support or dummy links in anchors
// new InfiniteScroll({...}) <-- Pseudo-code only

// Header fixed on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('#header-yogi .container');
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Mobile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
  // For mobile dropdown
  var dropdownLinks = document.querySelectorAll('#menu-yogi .dropdown > a');
  
  dropdownLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        var subMenu = this.nextElementSibling;
        if (subMenu.style.display === 'block') {
          subMenu.style.display = 'none';
        } else {
          // Hide all other open submenus first
          document.querySelectorAll('#menu-yogi .sub-navi').forEach(function(menu) {
            if (menu !== subMenu) {
              menu.style.display = 'none';
            }
          });
          subMenu.style.display = 'block';
        }
      }
    });
  });

  // Toggle mobile menu
  var menuToggle = document.querySelector('.show-navigation');
  var mobileMenu = document.querySelector('#menu-yogi');
  var bgClose = document.querySelector('.bg-close-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('aktif');
      bgClose.classList.toggle('aktif');
    });
  }
  
  if (bgClose) {
    bgClose.addEventListener('click', function() {
      mobileMenu.classList.remove('aktif');
      bgClose.classList.remove('aktif');
    });
  }
});

// Back to top functionality
document.querySelector('.back-to-top')?.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); 