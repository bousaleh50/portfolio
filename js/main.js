
let menu=document.getElementById("main-menu");

function showMenu(){
	menu.classList.toggle("is-active");
}

let menuItems=document.querySelectorAll("#main-menu>.menu-item>a");

for (const item of menuItems) {
	item.addEventListener("click",function(){
		menu.classList.toggle("is-active");
	});
}
