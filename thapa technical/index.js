
// ========================================
// creating a Rsponsive nabar  component
// ========================================



const moblie_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

moblie_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});





// ========================================
// creating a portfolio tabbed component
// ========================================

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
    // console.log(e.target);

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;
    // always remove the classList first then add the class
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    img_div.forEach((curElem) =>
        curElem.classList.add("portfolio-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`portfolio-image-not-active`)
    );
});

// SWiper CSS

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "2",
  spaceBetween: 180,
  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = () =>{
  if (widthSize.matches)
  {
    
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 180,
  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "2",
      spaceBetween: 180,
      autoplay:{
        delay:2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const widthSize = window.matchMedia(" (max-width: 780px)");

myJsmedia(widthSize);
widthSize.addEventListener("change" , myJsmedia);





// Scroll to top Button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");


scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);


const scrollTop = () => {
  heroSection.scrollIntoView({behavior:"smooth"})
}

scrollElement.addEventListener("click" , scrollTop);



// Animated number

const counterNum =document.querySelectorAll(".counter-number");

const  speed = 200;
counterNum.forEach((curNumber) => {
  const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.numbers);
      // console.log(targetNumber);
      const initialNumber = parseInt(curNumber.innerText);
      // console.log(initialNumber);
      const incrementNumber = Math.trunc(targetNumber / speed);
      // i am adding the value to the main number
      // console.log(incrementNumber);

      if (initialNumber < targetNumber) {
          curNumber.innerText = `${initialNumber + incrementNumber}+`;
          setTimeout(updateNumber, 10);
      } else {
          curNumber.innerText = `${targetNumber}+`;
      }

  };
  updateNumber();
});
 

// lazy loading images

const imgRef = document.querySelector("img[data-src]");


const lazyImg = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
}

// const imgObserver = new IntersectionObserver(lazyImg,{
//   root:null,
//   threshold:0,
// })

// imgObserver.observe(imgRef);


// // Make navbar Awesome
// const observer1 = new IntersectionObserver((entries) =>{
//   const ent = entries[0];
//   console.log(ent);
//   !ent.isIntersecting ?  document.body.classList.add("sticky") :document.body.classList.remove("sticky");
// }, {root:null , threshold:0} );
// observer1.observe(heroSection);


