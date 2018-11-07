
  var test = document.getElementById("test");


  frontStuff.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "purple";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


  frontStuff.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
