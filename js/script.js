function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
          element.append(text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }
    
    
    // application
    var speed = 75;
    var p = document.getElementById("More-opportunities-for-you-to-learn")
    var delay = p.innerHTML.length * speed + speed;
    
    // type affect to header
    typeEffect(p, speed);
    
    
    // type affect to body
    /*setTimeout(function(){
      p.style.display = "inline";
      typeEffect(p, speed);
    }, delay);*/
    
    