

var button = document.getElementById("clickme"),
  count = 0;

button.onclick = function() {
  count += 1;
  value = 12 - count
  button.innerHTML = "Click me: " + value + " more times";

   if (count > 11) {
    count = 0;
      var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   
 
  var y = document.getElementById("clickme");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
     
   var z = document.getElementById("circle");  
        z.style.background = "url(https://www.asian-technology.com/test1.png)";
   
    
  
  
    
}


}

var circles = document.querySelectorAll(".circle");
 
for (var i = 0; i < 20; i++) {
  var circle = circles[i];
 
  circle.keyframes = [{
    opacity: 2,
    transform: "translate3d(" + 70 * i + "px, 0px, 0px)"
  }, {
    opacity: 1,
    transform: "translate3d(" + 70 * i + "px, 500px, 500px)"
  }, {
    opacity: 2,
    transform: "translate3d(" + 100 * i + "px, 0px, 1000px)"
  }];
 
  circle.animProps = {
    duration: 1000 + 1500 * i,
    easing: "ease-out",
    iterations: Infinity
  }
 
  var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
}






// helper functions
