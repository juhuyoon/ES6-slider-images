function debounce(func, wait = 20, immediate = true) { //this debounce function runs every 20ms
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in'); //select all the classes

  function checkSlide(e) { //count event
      //console.count(e);
      sliderImages.forEach(sliderImage => {    //to see whether how much of the page was scrolled through
            //half way through the IMAGE. 
            const slideInAt = (window.scrollY + window.innerHeight) - //to see where you are far down the webpage
            sliderImage.height /2; 
            
            //this is the bottom of the IMAGE
            const imageBottom = sliderImage.offsetTop + sliderImage.height; 
            //checks to see if the image is half shown. 
            const isHalfShown = slideInAt > sliderImage.offsetTop; 
            //this checks if we have scrolled past the halfway point of the image
            const isNotScrolledPast = window.scrollY < imageBottom; 
            
            if(isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            } else {
                sliderImage.classList.remove('active');
            }
      });
  }

  window.addEventListener('scroll', debounce(checkSlide)); //checkSlide now running every 20 ms under debounce function