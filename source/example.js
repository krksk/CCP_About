window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>400){
    aboutCategory_2.style.animationPlayState = "running";
    aboutContents_2.style.animationPlayState = "running";
    category_2.style.animationPlayState = "running";
    aCt2_bg.style.animationPlayState = "running";
    aCt2_Picture.style.animationPlayState = "running";
    }
    if(t>1400){
    aboutCategory_3.style.animationPlayState = "running";
    aboutContents_3.style.animationPlayState = "running";
    category_3.style.animationPlayState = "running";
    home__slider.style.animationPlayState = "running";
    aCt3_bg.style.animationPlayState = "running";
    }
    if(t>2400){
    aboutCategory_4.style.animationPlayState = "running";
    aboutContents_4.style.animationPlayState = "running";
    category_4.style.animationPlayState = "running";
    aCt4_bg.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }
