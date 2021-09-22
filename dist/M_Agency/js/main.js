$(function(){
    

    // $('#fullpage').fullpage({		
	// 	autoScrolling: true,
    //     scrollHorizontally: true,
    //     sectionSelector: '.page-section',
    //     scrollOverflow: true,
    //     menu: '#header__nav',
    //     anchors: ['proffer', 'about', 'projects'],
	    
	// });
    //Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
        $('html,body').animate({
           scrollTop: $($(this).attr('href')).offset().top - 100
       },500);
        e.preventDefault();
   });
   $('.slider-inner').slick({    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="arrow-slick slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="arrow-slick slick-next"><svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8936 13.632L2.33608 0.236548C2.01686 -0.0788495 1.50491 -0.0788495 1.1857 0.236548C0.866485 0.551946 0.866485 1.05777 1.1857 1.37317L14.1651 14.1974L1.1857 27.0216C0.866485 27.337 0.866485 27.8428 1.1857 28.1582C1.3423 28.3129 1.5531 28.3962 1.75788 28.3962C1.96266 28.3962 2.17346 28.3189 2.33005 28.1582L15.8876 14.7627C16.2068 14.4533 16.2068 13.9415 15.8936 13.632Z" fill="black"/></svg></button>',
  });
   
});


// 
window.addEventListener("scroll", animateDuringScroll, false);

function animateDuringScroll() {
    document.querySelectorAll('.anim__circle-svg-1').forEach(e => {
        e.style.webkitAnimationPlayState = 'running'; 
    });

    setTimeout(() => {
      document.querySelectorAll('.line-animation0').forEach(e => {
          e.style.webkitAnimationPlayState = 'running'; 
      });
    }, 100);

        setTimeout(() => {
      document.querySelectorAll('.anim__circle-svg-2').forEach(e => {
          e.style.webkitAnimationPlayState = 'running'; 
      });
    }, 1900);
}
