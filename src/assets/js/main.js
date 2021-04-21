"use strict";

/*dark mode*/
let activeTheme = localStorage.getItem("theme");
if(activeTheme !==null){
  setTheme(activeTheme);
}
let themeDarkmode = document.querySelector(".js-theme-darkmode");
if(themeDarkmode){     themeDarkmode.addEventListener("click", toggleTheme);
}
function setTheme(theme){
  document.body.setAttribute("color-theme", theme);
  localStorage.setItem("theme",theme);
}
function toggleTheme(){
  let theme = document.body.getAttribute("color-theme");
  if(theme == "sombre"){
    setTheme("clair");
  }else{
    setTheme("sombre");
  }
}

/*burger menu*/
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleNavigation);

function toggleNavigation(){
    if(document.body.hasAttribute("burger-menu")){
        document.body.removeAttribute("burger-menu");
        menuButton.innerHTML = "Menu";
    }else{
        document.body.setAttribute("burger-menu", true);
        menuButton.innerHTML = "Retour";
    }
}
/*date*/
let giveDate = document.querySelector(".copyright");
let maintenant = new Date();
let an = maintenant.getFullYear();
giveDate.innerHTML = an;

