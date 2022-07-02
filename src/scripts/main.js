const $ = require("jquery")
const slick = require("slick-carousel")

$(function() {
    $(`#main-slider`).slick({
        dots: false,
        autoplay: true,
        prevArrow: `<div class="position-absolute top-50 start-0" style="z-index: 1"><button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-left fa-lg"></i></button></div>`,
        nextArrow: `<div class="position-absolute top-50 end-0" style="z-index: 1"><button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-right fa-lg"></i></button></div>`
    })

    $(`#headphones-slider-container .product-slider`).slick(getProductSliderSettings(`#headphones-slider-container .product-slider-nav`))

    $(`#speakers-slider-tab`).on(`click`, e => {
        setTimeout(_ => $(`#speakers-slider-container .product-slider`).slick(getProductSliderSettings(`#speakers-slider-container .product-slider-nav`)), 300)
    })

    $(`#accessories-slider-tab`).on(`click`, e => {
        setTimeout(_ => $(`#accessories-slider-container .product-slider`).slick(getProductSliderSettings(`#accessories-slider-container .product-slider-nav`)), 300)
    })

    $(`#misc-slider-tab`).on(`click`, e => {
        setTimeout(_ => $(`#misc-slider-container .product-slider`).slick(getProductSliderSettings(`#misc-slider-container .product-slider-nav`)), 300)
    })
})

const getProductSliderSettings = (sliderNavElement) => {
    return {
        dots: false,
        slidesToShow: 4,
        prevArrow: `<button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-left fa-lg"></i></button>`,
        nextArrow: `<button class="btn btn-link" aria-label="Previous" type="button"><i class="fa fa-chevron-right fa-lg"></i></button>`,
        appendArrows: $(sliderNavElement),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 541,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 481,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
    }
}