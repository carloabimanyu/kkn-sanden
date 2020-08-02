function dropdownNav() {
    var x = document.getElementById("topNav");
    if (x.className === "header-right") {
        x.className += " responsive";
    } else {
      x.className = "header-right";
    }
}

var modal = document.getElementById("myModal");

var img = document.getElementById("photo1");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("modal")[0];

span.onclick = function() {
    modal.style.display = "none";
}