$(document).ready(function(){
  $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active')
      $('nav').toggleClass('active')
  })
})

const width = document.querySelector("#width span");
           
        
        window.onload = function() {
            
            if(window.innerWidth > 720){
              splitScroll();
            }
        };
           
        
        // window.onresize = function() {
          $(window).on("load",function(){
            $(".loader-wrapper").fadeOut("slow");
          });
            
        // };

/* Parallax Products */
function splitScroll() {
    const controller2 = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-pages',
        triggerHook: 0
      })
      .setPin('.title')
      
      .addTo(controller2);
  }
  
  





function changebackground(){
  if(window.scrollY>window.innerHeight/2){
    document.body.classList.add('bg-color');
  }
  else{
    document.body.classList.remove('bg-color');
  }
}

window.addEventListener('scroll',changebackground);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(window.pageYOffset);
  if (document.documentElement.scrollTop > 733 && document.documentElement.scrollTop < 1460) {
    
    // document.getElementById('img2').style.zIndex = "1";
    // document.getElementById('img1').style.zIndex = "0";
    document.getElementById('img1').style.display = "inline";
    document.getElementById('img2').style.display = "none";
    document.getElementById('img3').style.display = "none";
  } 
  else if (document.documentElement.scrollTop > 1460 && document.documentElement.scrollTop < 2188) {
    // document.getElementById('img2').style.zIndex = "0";
    // document.getElementById('img1').style.zIndex = "1";
    document.getElementById('img2').style.display = "inline";
    document.getElementById('img1').style.display = "none";
    document.getElementById('img3').style.display = "none";
  }
  else if (document.documentElement.scrollTop > 2188 && document.documentElement.scrollTop < 2912) {
    document.getElementById('img3').style.display = "inline";
    document.getElementById('img1').style.display = "none";
    document.getElementById('img2').style.display = "none";
  }
}

