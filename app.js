// let reviewsSlider = $("#reviewsSlider");

// reviewsSlider.slick({
//    infinite: true,
//    centerMode: true,
//    centerPadding: "0px",
//    slidesToShow: 3,
//    // adaptiveHeight: true,
//    arrows: false,
//    dots: true,





// });

// video preview

let btnPlay = document.querySelector(".video__play");
let btnStop = document.querySelector(".video__stop");
let video = document.querySelector("#video");

function startvideo() {
   video.play();
   btnPlay.classList.add("activeplay");
   btnStop.classList.add("activestop");

};


btnPlay.addEventListener("click", startvideo);

function stopvideo() {
   video.pause();
   btnPlay.classList.remove("activeplay");
   btnStop.classList.remove("activestop");
   video.load();
};

btnStop.addEventListener("click", stopvideo);



// slider favorite


let favoriteSlider = $("#favoriteSlider");

favoriteSlider.slick({
   infinite: true,
   // centerMode: true,
   // centerPadding: "0px",
   slidesToShow: 1,
   slidesToScroll: 1,
   // adaptiveHeight: true,

   arrows: true,
   dots: false,
   nextArrow: $('.favorite__btn-next'),





});


// bestgifr tabs 

const tabsBtn = document.querySelectorAll(".bestgift__link");
const tabsItems = document.querySelectorAll(".bestgift__item");


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);




      // Проверка: если у кнопки нет класс Active, то он выдается 
      if (!currentBtn.classList.contains('activetab')) {
         // Убираем у каждой кнопки класс Active при клике на кнопку
         tabsBtn.forEach(function (item) {
            item.classList.remove('activetab');
         });
         // а затем присваиваем класс Active кнопке на которую нажали
         currentBtn.classList.add('activetab');

         //  Тоже самое и с табами и их контентом 
         tabsItems.forEach(function (item) {
            item.classList.remove('activeitem');
         });
         currentTab.classList.add('activeitem');


      }

   });
}

// имитирует клик по первой кнопке (на странице), чтобы не было не активированной кнопки и таба при перезагрузке страницы
document.querySelector('.bestgift__link').click();




// combo favorite


let comboSlider = $("#comboSlider");

comboSlider.slick({
   infinite: true,
   // centerMode: true,
   // centerPadding: "0px",
   slidesToShow: 1,
   slidesToScroll: 1,
   // adaptiveHeight: true,

   arrows: true,
   dots: false,
   nextArrow: $('.combo__btn-next'),






});

// activeburger


let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".preview__nav");


burger.addEventListener("click", function () {
   let header = document.querySelector(".header");


   nav.classList.toggle("activenav");
   if (nav.classList.contains("activenav")) {

      header.classList.add("activenavbtns");
   } else {
      header.classList.remove("activenavbtns");
   }
});

