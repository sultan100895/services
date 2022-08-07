$(document).ready(function(){
  'use strict';

  //===== for banner slider =====
  $(".slider").slick({

    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  });


  //===== for directional hover
  $('li').directionalHover({
        // CSS class for the overlay
        overlay: "dh-overlay",
        // Linear or swing
        easing: "swing",
        // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
        speed: 400
      });

  // templete-slider
  $('.templete-slider').slick({
    prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed: 3000,
  });

  // ===== for FAQ =====
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });   

  //===== top scroll button
  var $button = $.backToTop({
          // background color
          backgroundColor: '#65e4a3',
          // text color
          color: '#FFFFFF',
          // container element
          container: this._body,
          // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
          effect: 'spin',
          // enable the back to top button
          enabled: true,
          // width/height of the back to top button
          height: 70, 
          width: 70,
          // icon
          icon: 'fas fa-chevron-up',
          // margins
          marginX: 20,
          marginY: 20, 
          // bottom/top left/right
          position: 'bottom right',          
          // trigger position
          pxToTrigger: 600,
          // or 'fawesome'
          theme: 'default',
          // z-index
          zIndex: 999
      });
  });