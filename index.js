let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let slide = document.querySelectorAll(".slide");
let searchBtn = document.querySelector(".searchBtn");
let searchBox = document.querySelector(".search-box");
let cartBtn = document.querySelector(".cartBtn");
let moonIcon = document.querySelector(".moonIcon");
let cartModal = document.getElementById("cartModal");
let closeCart = document.querySelector(".closeCart");


// FOR THE SLIDES, INDEX IS ZERO
let X = 0; 

leftArrow.addEventListener('click', function(){
    slide[X].classList.remove('active');
    X = (X - 1 + slide.length) % slide.length; 
    slide[X].classList.add('active');

    });
rightArrow.addEventListener('click', function(){
    slide[X].classList.remove('active');
    X = (X + 1) % slide.length; 
    slide[X].classList.add('active');
    }
);


// SEARCH FORM DISPLAYS WHEN USER CLICKS ON THE ICON
searchBtn.addEventListener("click",function(){
    searchBox.classList.toggle("active");

    if(searchBox.classList.contains("active")){
         searchBtn.classList.remove("fa-magnifying-glass");
         searchBtn.classList.add("fa-xmark");
    }
    else {
        searchBtn.classList.add("fa-magnifying-glass");
        searchBtn.classList.remove("fa-xmark");
    }
});

cartBtn.addEventListener("click",function(){
    cartBtn.classList.toggle("active");

    if(cartBtn.classList.contains("active")){
         cartModal.classList.add("active")
         document.body.classList.add('modal-open');
    }

     renderCartItems();
});


closeCart.addEventListener("click",function(){
        cartModal.classList.remove("active")
        document.body.classList.remove('modal-open');
    
});



    // TO SAVE THE MODE USER CLICKS EVEN AFTER REFRESHING OR CLOSING PAGE
if(localStorage.getItem("mode") == null){
    localStorage.setItem("mode","light");
}
 
let localData = localStorage.getItem("mode","light");

if(localData === "light"){
    document.body.classList.remove("dark-mode");
    moonIcon.classList.add("fa-moon");
    moonIcon.classList.remove("fa-sun");
}
else if(localData === "dark"){
    document.body.classList.add("dark-mode");
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
};
// TOGGLE MOON ICON   
    moonIcon.addEventListener("click",function(){
     document.body.classList.toggle("dark-mode");

     if(document.body.classList.contains("dark-mode")){
        moonIcon.classList.remove("fa-moon");
        moonIcon.classList.add("fa-sun");
        localStorage.setItem("mode","dark");
   }
   else {
       moonIcon.classList.add("fa-moon");
       moonIcon.classList.remove("fa-sun");
       localStorage.setItem("mode","light");
   }
});

// TO FIXED THE NAVBAR WHEN USER SCROLLS

window.addEventListener("scroll",function(){
    let navBar = document.getElementById("navbar");
    
    navBar.classList.toggle("fixed", this.window.scrollY > 0);
  
});

// TOOGLE MENU ICON TO DISPLAY NAV ITEMS

let openIcon = document.getElementById("menuIcon");
let closeIcon = document.getElementById("close-menu");
let navList = document.getElementById("nav-list");


openIcon.addEventListener('click', function(){
    closeIcon.style.display = 'block';
    openIcon.style.display = 'none';
    navList.classList.toggle("active");
  
 })

 closeIcon.addEventListener('click', function(){
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    navList.classList.toggle("active");
   
 })
 

 let btnContainers = document.querySelectorAll(".filter-btn");

 btnContainers.forEach(function(btnContainer){
    btnContainer.addEventListener("click", function(){
        btnContainers.forEach(function(subBtns){
            subBtns.classList.remove("active");
        })
        btnContainer.classList.add("active");
    })
 })




