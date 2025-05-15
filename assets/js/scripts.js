 
//   tsParticles.load("tsparticles", {
//     background: {
//       color: {
//         value: "#000"
//       }
//     },
//     particles: {
//       number: {
//         value: 100
//       },
//       color: {
//         value: "#fdd085"
//       },
//       shape: {
//         type: "circle"
//       },
//       opacity: {
//         value: 0.5
//       },
//       size: {
//         value: 3
//       },
//       move: {
//         enable: true,
//         speed: 2
//       }
//     },
//     interactivity: {
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse"
//         }
//       }
//     }
//   }); 


 $(document).ready(function () {
    $('.mobile-bars').click(function () {
      $('.nav').slideToggle();  

      // Toggle icon
      const icon = $(this).find('i');
      if (icon.hasClass('fa-bars-staggered')) {
        icon.removeClass('fa-bars-staggered').addClass('fa-xmark');
      } else {
        icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
      }
    });


	$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.4,
      },
      667: {
        items: 2.4,
        margin: 20,
      },
      1000: {
        items: 3.4,
        margin: 30,
      },
      1300: {
        items: 4.4,
        margin: 30,
      },
    },
  });
  });