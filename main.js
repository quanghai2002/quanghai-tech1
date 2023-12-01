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

listSlider.forEach((item, index) => {
  item.addEventListener('click', () => {
    alert(`bạn đang tìm gì thông tin sale thứ:${Array.from(listSlider).indexOf(item)}`);
  })
})


const isSliderTable = document.querySelector('.slider-sale-pc');

// slider 2- sale- các sale trên pc
let swiperSale = new Swiper(".SaleSwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  loopedSlides: 4,
  slidesPerView: 'auto',
  // centeredSlides: true,
  // Thay số này bằng số lượng slide thực tế trong loop
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
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },



  on: {
    slideChange: function () {
      // Lấy index của slide đang active
      let activeSlideIndex = this.activeIndex;

      // Xóa class 'quanghai-active-slider' từ tất cả các slide
      // document.querySelectorAll('.quanghai-active-slider').forEach((item) => {
      //   item.classList.remove('quanghai-active-slider');
      // });

      // // Thêm class 'quanghai-active-slider' cho slide hiện tại
      // this.slides[activeSlideIndex].classList.add('quanghai-active-slider');
    },

    on: {
      reachEnd: function () {
        this.slideTo(0); // Chuyển đến slide đầu khi đạt đến cuối
      },

      reachBeginning: function () {
        this.slideTo(this.slides.length - this.loopedSlides); // Chuyển đến slide cuối cùng khi đạt đến đầu
      },
    },
  },
});



// slider 3
let swiper3 = new Swiper(".Swipper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // loopedSlides: 4,
  slidesPerView: 'auto',
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


// khi click vào ảnh thì hiển thị ifraem
const wrapImgIframe = document.querySelector('.img-iframe');
const iframeLink = document.querySelector('.ifrarmeLinkYoutube');
const imgDemo = document.querySelector('.icon-anh-demo');


wrapImgIframe.addEventListener('click', () => {
  const videoLink = 'https://www.youtube.com/embed/QIvIN8M91x4?si=6s84w-ev4JdbDBqc';
  iframeLink.src = videoLink;
  imgDemo.classList.add('hidden');
  iframeLink.classList.remove('hidden');
})


// popup search tìm kiếm

const btnOpenSeacrBS = document.querySelector('.seacrh-bs');
const wrapContentPopup = document.querySelector('.content-modal-popup-search');
const contentSeach = document.querySelector('.content-seacrh');




const btnSeacrh = document.querySelector('.wrap-btn-seacrh');
btnSeacrh.addEventListener('click', () => {
  alert('xin chào');
})

const btnClosePopupSeacrh = document.querySelector('.icon-close-btn-seacrh');
btnClosePopupSeacrh.addEventListener('click', () => {
  wrapContentPopup.classList.toggle('hidden');
})


document.addEventListener('click', (e) => {
  if (contentSeach.contains(e.target)) {
    console.log('đang click vào bên trong')
  }
  else {

    if (btnOpenSeacrBS.contains(e.target)) {
      wrapContentPopup.classList.remove('hidden');
      wrapContentPopup.classList.add('relative');
    }
    else {
      wrapContentPopup.classList.add('hidden');
    }
  }
})
