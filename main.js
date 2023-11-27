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


const listSlider = document.querySelectorAll('.slider-q-hai');


// slider
let swiperSale = new Swiper(".SaleSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: ".abc_next",
    prevEl: ".abc_prev",
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
      slidesPerView: 3,
      spaceBetween: 6,
    },
  },


  on: {
    slideChange: function () {
      // Lấy index của slide đang active
      let activeSlideIndex = this.activeIndex;
      listSlider.forEach((item, index) => {
        if (activeSlideIndex === index) {
          let oldActive = document.querySelector('.quanghai-active-slider');

          if (oldActive) {
            oldActive.classList.remove('quanghai-active-slider');
          }
          item.classList.add('quanghai-active-slider');
        }
      })
    },
  },
});