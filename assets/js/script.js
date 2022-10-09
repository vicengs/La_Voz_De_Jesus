require("bootstrap");
const img1 = require("../../assets/img/food-table1.jpg");
const img2 = require("../../assets/img/grill1.jpg");
$(document).ready(function() {
  // createEl
  // createLoremIpsum
  
  // schedule
  // events
  // dateConverter
  // tickets
  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "Text 1",
      subtitle: "Subtext 1",
      img: img1,
      btnText: "Btn text 1",
      btnUrl: "schedule.html"
    },
    {
      title: "Text 2",
      subtitle: "Subtext 2",
      img: img2,
      btnText: "Btn text 2",
      btnUrl: "tickets.html"
    },
  ]
  carouselSlides.forEach((slide, i) => {
    $('.carousel-inner').append(`
  <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${slide.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${slide.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${slide.btnUrl}">
                ${slide.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`)
  })
});