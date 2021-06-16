function toggleMenu(){
	document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();

//current date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;