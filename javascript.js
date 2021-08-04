const earth = document.getElementById('earth');
const arcade = document.getElementById('arcade');
const soccer = document.getElementById('soccer');
const grid = document.getElementById('grid');
const above = document.getElementById('above');
const pocket = document.getElementById('pocket');
const rover = document.getElementById('rover');
const fish = document.getElementById('fish');
const virtualImage = document.getElementById('virtual-image')
const hamBurger = document.getElementById('hamburger');


function setMobilePicture() {
    // console.log("Window Height: " + window.innerHeight);
    // console.log("Window Width" + window.innerWidth);
    if(window.innerWidth <= 650){
        virtualImage.src="/images/mobile/image-interactive.jpg";
        earth.src="/images/mobile/image-deep-earth.jpg";
        arcade.src="/images/mobile/image-night-arcade.jpg"
        soccer.src="/images/mobile/image-soccer-team.jpg"
        grid.src="/images/mobile/image-grid.jpg"
        above.src="/images/mobile/image-from-above.jpg"
        pocket.src="/images/mobile/image-pocket-borealis.jpg"
        rover.src="/images/mobile/image-curiosity.jpg"
        fish.src="/images/mobile/image-fisheye.jpg"
        
    }else{
        virtualImage.src="/images/desktop/image-interactive.jpg";
        earth.src="/images/desktop/image-deep-earth.jpg";
        arcade.src="/images/desktop/image-night-arcade.jpg";
        soccer.src="/images/desktop/image-soccer-team.jpg";
        grid.src="/images/desktop/image-grid.jpg";
        above.src="/images/desktop/image-from-above.jpg";
        pocket.src="/images/desktop/image-pocket-borealis.jpg";
        rover.src="/images/desktop/image-curiosity.jpg";
        fish.src="/images/desktop/image-fisheye.jpg";
    }
  }
  
  window.onresize = setMobilePicture;


//   modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
hamBurger.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}