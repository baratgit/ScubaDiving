// THEME TOGGLE
const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙 Dark Mode';
toggleBtn.className = 'theme-toggle';
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');
  darkMode = !darkMode;
  toggleBtn.innerText = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
};

// TYPEWRITER EFFECT
const typeWriterTarget = document.querySelector(".nav-logo p");
if (typeWriterTarget) {
  const text = "SCUBA DIVING";
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      typeWriterTarget.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150);
    }
  }
  typeWriterTarget.innerHTML = "";
  typeWriter();
}

// SCROLL TO TOP BUTTON
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '⬆';
document.body.appendChild(scrollBtn);

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// FORM VALIDATION
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input[required]");
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "";
      }
    });
    if (!valid) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
});

// FADE-IN SECTIONS
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});





