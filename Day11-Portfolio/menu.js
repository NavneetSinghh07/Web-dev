document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("menu_button").addEventListener("click", showMenu)
    document.getElementById("closeMenu").addEventListener("click", closeMenu)
    function showMenu(){
        const menu= document.querySelector("section.menu")
        menu.style.height="100%";
        menu.style.width="100%";}

    function closeMenu(){
        const menu= document.querySelector("section.menu")
        menu.style.height="0";
        menu.style.width="0";}

    function addClickToMenuItems(){
        const menuItems = document.querySelectorAll("section.menu nav ul>li")
        for(let menuItem of menuItems){
            menuItem.addEventListener("click", closeMenu)
        }
    }

    addClickToMenuItems();


})