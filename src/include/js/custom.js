// Prevent event bubble up to window.
document.addEventListener("DOMContentLoaded", function() {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    document.querySelectorAll('.side-nav-inside .dropdown').forEach(function(everydropdown) {
        everydropdown.addEventListener('shown.bs.dropdown', function() {
            el_overlay = document.createElement('div');
            el_overlay.className = 'screen-darken';
            document.querySelector(".dashboard-insider").appendChild(el_overlay)
        });

        everydropdown.addEventListener('hide.bs.dropdown', function() {
            document.querySelector(".dashboard-insider").removeChild(document.querySelector('.screen-darken'));
        });
    });

});
// DOMContentLoaded  end




// window.onload = function() {
// document.querySelectorAll('input[type="radio"]').forEach(function(el) {
//     el.addEventListener('change', function() {
//     if (this.checked) {
//         document.querySelector('.flex-save-btn').classList.add('border-blue')
//         // this.parentNode.classList.add('border-blue');
//     } else {
//         // this.parentNode.classList.remove('border-blue');
//         document.querySelector('.flex-save-btn').classList.remove('border-blue')
//     }
//     })
// })
// }


function addClass() {
    var elem = document.getElementById("collapseBtn");
    elem.classList.add("d-none");
}



var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function(initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

    docBody.scrollTop = focElem.scrollTop = newPos;

    newPos && setTimeout(function() {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

var scrollTopAnimated = function(speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime) / speed);

    scrollAnimationStep(topOffset, stepAmount);
};

function toggleMessagePreview() {
    var el = document.getElementsByClassName("cml-item");
    var element = document.getElementsByTagName("body")[0];
    for (var f = 0; f < el.length; f++) {
        var elit = el[f];
        element.classList.toggle('open-message-preview');

    }

}


// Toggle Dasboard SideNav
function toggleNavMenu() {
    var element = document.getElementsByTagName("body")[0];
    element.classList.toggle('open-menu');
    var val = document.getElementsByClassName("menu-dropdown");
    var i;
    for (j = 0; j < val.length; j++) {
        val[j].classList.toggle('dropdown-menu');
    }
    var elts = document.getElementsByClassName("side-nav-accordion-header");
    for (var e = 0; e < elts.length; e++) {
        var elt = elts[e];
        // console.log(elt);
        if (elt.hasAttribute('data-bs-toggle')) {
            elt.removeAttribute("data-bs-toggle");
            elt.removeAttribute("aria-expanded");
            // console.log(true);
        } else {
            // console.log(false);
            elt.setAttribute("data-bs-toggle", "dropdown");
            elt.setAttribute("aria-expanded", "false");
        }
    }

    var el = document.getElementsByClassName("side-nav-accordion-button");
    for (var f = 0; f < el.length; f++) {
        var elit = el[f];
        // console.log(elit);
        if (elit.hasAttribute('data-bs-toggle')) {
            elit.removeAttribute("data-bs-toggle");
        } else {
            elit.setAttribute("data-bs-toggle", "collapse");
        }
    }

}

// Custom Drodpdown Hide/Show.
var divs = ["dropDownCategories", "dropDownRegions"];
var visibleDivId = null;

function toggleVisibility(divId) {
    if (visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);

        if (visibleDivId === divId) {
            div.classList.toggle("show");
        } else {
            div.classList.remove("show");
        }
    }
}

//  Trigger popover via javascript


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {

    const popoverId = popoverTriggerEl.attributes['data-content-id'];
    if (popoverId) {
        const contentEl = $(`#${popoverId.value}`).html();
        return new bootstrap.Popover(popoverTriggerEl, {
            content: contentEl,
            html: true,
        });
    }
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Header fixed on scroll.
window.onscroll = function() {
    myFunction()
};
var body = document.getElementsByTagName("body")[0];
var sticky = body.offsetTop + 50;

function myFunction() {
    if (window.pageYOffset > sticky) {
        body.classList.add("fixed");
    } else {
        body.classList.remove("fixed");
    }
}


// Show/Hide password through javascript
function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
        el.src = "include/images/eye-off.svg";
    } else {
        x.type = "password";
        el.src = "include/images/eye.svg";
    }
}



var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

    if ($('.add-other-listing-slider').length > 0) {
        $('.add-other-listing-slider').slick({
            dots: false,
            prevArrow: $('.custom-prev'),
            nextArrow: $('.custom-next'),
            responsive: [{
                breakpoint: 5000,
                settings: "unslick"
            },
            {
                breakpoint: 991.98,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
                
                }
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        });
    }
    if ($('.product-slider').length > 0) {
        $('.product-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.thumbnails-slider'
        });
    }
    if ($('.thumbnails-slider').length > 0) {
        $('.thumbnails-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                infinite: true,
                dots: false,
                arrows: false
            }
        }]
        });
    }
    if ($('.offshore-slider').length > 0) {
        $('.offshore-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.home-offshore-slider').length > 0) {
        $('.home-offshore-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }, {
                breakpoint: 579,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }]
        });
    }
    if ($('.oil-and-gas-slider').length > 0) {
        $('.oil-and-gas-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.category-slider').length > 0) {
        $('.category-slider').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 579,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.add-tab-slider li').length > 6) {

        $('.add-tab-slider').slick({
            infinite: false,
            variableWidth: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 1,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 579,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows:false
                        // initialSlide: 0
                    }
                }
            ]
        });

    }
    if ($('.add-gallery-slider').length > 0) {
        $('.add-gallery-slider').slick({
            autoplay: false,
            dots: true,
            customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img width="80" height="80" src="' + thumb + '"></a>';
            },  
            adaptiveHeight: true, 
        });
    }
    $('.modal').on('shown.bs.modal', function (e) {
        $('.add-gallery-slider').slick('setPosition');
    });
});

const btn = document.getElementById('chatCollapseBtn');
const overlayClick = document.querySelector('.chat-close-pannel');
btn.addEventListener('click', (event) => {
  document.body.classList.toggle('show-chat-pannel');
});

overlayClick.addEventListener('click', (event) => {
  document.body.classList.remove('show-chat-pannel');
});