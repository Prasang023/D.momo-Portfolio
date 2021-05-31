

// const express = require("express");

// const app = express();

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

// app.get("/", function(req, res) {
//     res.sendFile("C:/Users/prasa/OneDrive/Desktop/Webdev/joint-portfolio/index.html");
// })

// app.listen(port, function() {
//   console.log("Server started on port 3000");
//});


// function splitScroll(){
//     const controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//         duration: '100%',
//         triggerElement: '.title',
//         triggerHook:0
//     })
//     .setPin('.title')
//     .addIndicators()
//     .addTo(controller);
// }

// splitScroll();

// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//     triggerElement: '.about-pages'
// })
// .setClassToggle('.about-pages','show')
// .addTo(controller);






// document.addEventListener('DOMContentLoaded', () => {
//     let controller = new ScrollMagic.Controller();

//     let timeline = new TimelineMax();
//     timeline
//     .to('.top', 4, {
//         height: 0
//     });

//     let scene = new ScrollMagic.Scene({
//         triggerElement: '.title',
//         duration: '100%',
//         triggerHook: 0,
//         offset: '100'
//     })
//     .setTween(timeline)
//     //.setPin('.about-pages')
//     .addTo(controller);
// })

/* Parallax Products */
function splitScroll() {
    const controller2 = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.about-pages',
        triggerHook: 0
      })
      .setPin('.title')
      .addIndicators()
      .addTo(controller2);
  }
  
  splitScroll();


//   window.onload = function() {
	
//     // Index of current image
//     // which is on display
//     var imageIndex = 0;

//     // Object array of all the
//     // images of class test
//     var images =
//         document.getElementsByClassName('img-1');

   
//    var isMouseOverImage = false;

//     // Object of parent element
//     // containing all images
//     var scrollImages =
//         document.getElementById('title');

//     // Stores the current scoll co-ordinates
//     // so that the window don't scroll down
//     // while scrolling the images
//     var x, y;

//     // This function sets the scroll to x, y
//     function noScroll() {
//         window.scrollTo(x, y);
//     }

//     // The following event id fired once when
//     // We hover mouse over the images
//     scrollImages.addEventListener(
//             "mouseenter", function() {

//         // We store the current page
//         // offset to x,y
//         x = window.pageXOffset;
//         y = window.pageYOffset;

//         // We add the following event to
//         // window object, so if we scroll
//         // down after mouse is over the
//         // image we can avoid scrolling
//         // the window
//         window.addEventListener("scroll", noScroll);
        
//         // We set isMouseOverImage to
//         // true, this means Mouse is
//         // now over the image
//         isMouseOverImage = true;
//     });

//     // The following function is fired
//     // when mouse is no longer over
//     // the images
//     scrollImages.addEventListener(
//             "mouseleave", function() {

//         // We set isMouseOverImage to
//         // false, this means mouse is
//         // not over the image
//         isMouseOverImage = false;

//         // We remove the event we previously
//         // added because we are no longer
//         // over the image, the scroll will
//         // now scroll the window
//         window.removeEventListener(
//                     "scroll", noScroll);
//     });

//     // The following function is called
//     // when we move mouse wheel over
//     // the images
//     scrollImages.addEventListener(
//                 "wheel", function(e) {
                        
//         // We check if we are over
//         // image or not
//         if (isMouseOverImage) {
//             var nextImageIndex;

//             // The following condition
//             // finds the next image
//             // index depending if we
//             // scroll up or scroll down
//             if (e.deltaY > 0)
//                 nextImageIndex = (imageIndex + 1)
//                                 % images.length;
//             else
//                 nextImageIndex =
//                         (imageIndex - 1
//                         + images.length)
//                         % images.length;

//             // We set the z index of current
//             // image to 0
//             images[imageIndex].style.zIndex = "0";
                
//             // We set the z index of next
//             // image to 1, this makes
//             // The new image appear on top
//             // of old image
//             images[nextImageIndex].style.zIndex = "1";
//             imageIndex = nextImageIndex;
//         }
//     });
// }


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(window.pageYOffset);
  if (document.documentElement.scrollTop > 733 && document.documentElement.scrollTop < 1460) {
    
    document.getElementById('img2').style.zIndex = "1";
    document.getElementById('img1').style.zIndex = "0";
  } 
  else if (document.documentElement.scrollTop > 1460 && document.documentElement.scrollTop < 2188) {
    document.getElementById('img2').style.zIndex = "0";
    document.getElementById('img1').style.zIndex = "1";
  }
  else if (document.documentElement.scrollTop < 2188 && document.documentElement.scrollTop < 2912) {
    
  }
}
