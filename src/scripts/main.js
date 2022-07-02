const $ = require("jquery")
const slick = require("slick-carousel")

$("#main-slider").slick({
    dots: false,
    autoplay: true,
    prevArrow: `<div class="position-absolute top-50 start-0" style="z-index: 1"><button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-left fa-lg"></i></button></div>`,
    nextArrow: `<div class="position-absolute top-50 end-0" style="z-index: 1"><button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-right fa-lg"></i></button></div>`
})