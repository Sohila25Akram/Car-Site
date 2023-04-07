var headerItems = document.querySelector(".small-header .list-items"),

    header = document.querySelector(".small-header"),

    menuIconOpen = document.querySelector(".menu-bar-open"),

    menuIconClose = document.querySelector(".menu-bar-close"),

    menuIcon = document.querySelector(".menu-bar");



menuIcon.onclick=function(){
    if(menuIconOpen.style.display === "block"){
        menuIconClose.style.display = "block";
        menuIconOpen.style.display = "none";
        headerItems.style.display = "block";
        header.style.background ="rgb(0, 0, 0, .8)";
    }
    else{
        menuIconClose.style.display = "none";
        menuIconOpen.style.display = "block";
        headerItems.style.display = "none";
        header.style.background ="rgb(0, 0, 0, 0)";
    }
}

