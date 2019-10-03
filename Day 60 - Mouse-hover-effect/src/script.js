var cont = document.querySelector(".frame");
var blurred = document.querySelector(".text-front");
var stuff = document.querySelector(".text-back");

cont.onmouseleave = () => {
  stuff.style.height = "5%";
	blurred.style.filter = "blur(0)";
	blurred.style.transition = 1 + "s";
}
cont.onmousemove = (e) => {
  stuff.style.height = e.pageY - cont.offsetTop + 40 + "px";
	blurred.style.filter = "blur(2px)";
	blurred.style.transition = 1 + "s";
}