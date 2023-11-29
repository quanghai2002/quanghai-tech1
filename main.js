// list li nav
const liList = document.querySelectorAll('.item-li');

liList.forEach((item) => {
  item.addEventListener('click', () => {
    const isActive = document.querySelector('.quanghai-active-nav');
    if (isActive) {
      isActive.classList.remove('quanghai-active-nav');
    }
    item.classList.add("quanghai-active-nav");
  })
})


// list li nav-mobile
const liListMobile = document.querySelectorAll('.item-li-mobile');

liListMobile.forEach((item) => {
  item.addEventListener('click', () => {
    const isActive = document.querySelector('.quanghai-active-nav-mobile');
    if (isActive) {
      isActive.classList.remove('quanghai-active-nav-mobile');
    }
    item.classList.add("quanghai-active-nav-mobile");
  })
})

// ẩn hiện menu khi click icon trên mobile
const menuMobile = document.getElementById('modal-nav-mobile');
const btnOpen = document.getElementById('btn-show-navbar');
const btnClose = document.getElementById('btn-close');

const wrapContentModal = document.getElementById('content-modal-2');


btnClose.addEventListener('click', () => {
  menuMobile.classList.toggle('hidden');
})

document.addEventListener('click', (e) => {

  if (wrapContentModal.contains(e.target)) {

  }
  else {
    if (btnOpen.contains(e.target)) {
      menuMobile.classList.remove('hidden');
    } else {
      menuMobile.classList.add('hidden');
    }
  }
})


// slider 1 - banner
var swiper = new Swiper(".mySwiper-banner", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const listSlider = document.querySelectorAll('.slider-q-hai');


// slider 2
let swiperSale = new Swiper(".SaleSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".abc_next",
    prevEl: ".abc_prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 6,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 6,
    },
  },


  on: {
    slideChange: function () {
      // Lấy index của slide đang active
      let activeSlideIndex = this.activeIndex;


      // Xóa class 'quanghai-active-slider' từ tất cả các slide
      document.querySelectorAll('.quanghai-active-slider').forEach((item) => {
        item.classList.remove('quanghai-active-slider');
      });

      // Thêm class 'quanghai-active-slider' cho slide hiện tại
      this.slides[activeSlideIndex].classList.add('quanghai-active-slider');


    },
  },
});

// slider 3
let swiper3 = new Swiper(".Swipper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".next-3",
    prevEl: ".prev-3",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 6,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 6,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 6,
    },
  },

});