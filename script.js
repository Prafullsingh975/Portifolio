const heroSection = document.querySelector(".section-hero");

//Responsive Navbar

const mobileNav = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Sticky Navbar

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    // console.log(entry);
    !entry.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSection);

//Project Section
const pBtns = document.querySelector(".p-btns");
const pBtn = document.querySelectorAll(".p-btn");
const imgOverlay = document.querySelectorAll(".img-overlay");

pBtns.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  pBtn.forEach((elem) => {
    elem.classList.remove("p-btn-active");
  });
  clickedBtn.classList.add("p-btn-active");
  imgOverlay.forEach((elem) => elem.classList.add("p-image-not-active"));

  const btnNum = clickedBtn.dataset.btnNum;
  const activeProject = document.querySelectorAll(`.p-btn--${btnNum}`);
  activeProject.forEach((elem) => elem.classList.remove("p-image-not-active"));
});

// Counter Animation
const Animatior = () => {
  const counterNumber = document.querySelectorAll(".counter-numbers");
  const speed = 200;
  counterNumber.forEach((curElem) => {
    const updateCounter = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      const initialNumber = parseInt(curElem.innerHTML);
      const increment = Math.trunc(targetNumber / speed);

      if (initialNumber < targetNumber) {
        curElem.innerHTML = `${initialNumber + increment}+`;
        setTimeout(updateCounter, 10);
      }
    };
    updateCounter();
  });
};
//Activate Animation when reach the portion
const workSection = document.querySelector(".section-work-data");
const activator = new IntersectionObserver(
  (entries) => {
    const [e] = entries;
    if (e.isIntersecting) {
      Animatior();
    } else return;
  },
  {
    root: null,
    threshold: 0,
  }
);
activator.observe(workSection);

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Resposive testimonial
const mediaJS = (windowSize) => {
    // console.log(windowSize.matches);
  if (windowSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};
const windowSize = window.matchMedia("(max-width:780px)");
mediaJS(windowSize);

// Credit
const date = new Date();
const year = date.getFullYear();

const socialIcon = document.querySelector(".f-social-icons");

const fCredits = document.createElement("div");
const para = document.createElement("p");

fCredits.classList.add("f-credits");
para.innerHTML = `Copyright &copy${year} All rights reserved`;

fCredits.appendChild(para);

socialIcon.after(fCredits);

//Scroll to Top func
const scrollElement = document.querySelector(".scrollTop-style");

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);
