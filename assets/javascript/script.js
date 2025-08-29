// Smooth Scroll
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / docHeight) * 100;
//  document.getElementById("scroll-progress").style.width = `${scrolled}%`;
});

// Typing effect
window.addEventListener("load", () => {
  const text = "Erich Fournier, 42 anos";
  const typedText = document.querySelector(".glow");
  let i = 0;
  typedText.textContent = "";

  function typeWriter() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
});

// Bootstrap tooltips
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
});

// Contador de visitas por navegador usando localStorage
document.addEventListener('DOMContentLoaded', () => {
  const counterEl = document.getElementById('visitor-count');
  if (!counterEl) return;

  let visits = localStorage.getItem('siteVisits');

  if (!visits) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }

  localStorage.setItem('siteVisits', visits);
  counterEl.textContent = visits;
});

