const Menus =[
    {
        id : 1,
        title : "Chicken Suya",
        category : "appetizer",
        price : 29,
        imgSrc : "./images/pix5.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 2,
        title : "Fruit Punch",
        category : "drinks",
        price :10,
        imgSrc : "./images/pix4.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 3,
        title : "Baked Chicken",
        category : "dessert",
        price : 20,
        imgSrc : "./images/pix4.avif",
        desc : "Indian cuisine baked chicken wings & legs in honey mustard sauc."
    },
    {
        id : 4,
        title : "Butter Chicken Roti",
        category : "appetizer",
        price : 30,
        imgSrc : "./images/pix6.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 5,
        title : "Chicken Suya",
        category : "dessert",
        price : 40,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 6,
        title : "Spaghetti Bolognese",
        category : "main course",
        price : 20,
        imgSrc : "./images/pix7.jpg",
        desc : "This Vietnamese dish is a delicious Asian twist on an Italian classic."
    },
    {
        id : 7,
        title : "Mango Rice",
        category : "dessert",
        price : 40,
        imgSrc : "./images/pix8.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 8,
        title : "Pepperoni chicken",
        category : "main course",
        price : 30,
        imgSrc: "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 9,
        title : "Chapman",
        category : "drinks",
        price : 9,
        imgSrc: "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 10,
        title : "Mozeralla Bread",
        category : "dessert",
        price : 5,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 11,
        title : "Colored Juice",
        category : "drinks",
        price : 5,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 12,
        title : "Chicken Beef",
        category : "main course",
        price : 4,
        imgSrc: "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 13,
        title : "Plantain Fritatta",
        category : "appetizer",
        price : 15,
        imgSrc : "./images/pix9.webp",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 14,
        title : "Chocolata",
        category : "drinks",
        price : 10,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 15,
        title : "Yamarita",
        category : "Appetizer",
        price : 5,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 16,
        title : "GizDodo",
        category : "Appetizer",
        price : 20,
        imgSrc: "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 17,
        title : "Chinese Rice",
        category : "main course",
        price : 30,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 18,
        title : "Chicken Juice",
        category : "drinks",
        price : 20,
        imgSrc: "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 19,
        title : "Noodles Fish",
        category : "main course",
        price : 15.99,
        imgSrc : "./images/pix3.jpg",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]



let itemCenter = document.querySelector(".item-center");
let filterBtns = document.querySelectorAll(".filter-btn");
let cartItem = document.getElementById("item");
let total = document.getElementById("total");
let checkOut = document.getElementById("checkOut");
let checkOutMessage = document.getElementById("checkOutMessage");

window.addEventListener("DOMContentLoaded",function(){
showMenu();

});


filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener("click",function(e){
     const category = e.currentTarget.id;
     const menuCategory = Menus.filter(function(X){
        if (X.category === category){
            return X.category;
        }
     });
     if(category === "all"){
        showMenu(Menus);
     }else{
          showMenu(menuCategory);
     };
    })
 });


 

function showMenu(){
    return(itemCenter.innerHTML = Menus.map(function(menu){
       return `
       <div class="single-item flex-row">
    
                <div class="image">
              <img src="${menu.imgSrc}">
              <div class="cartIcon">
              <i class="fa-solid fa-heart" onclick = "addToCart(${menu.id})"></i>
          </div>
                 </div>
              
                  <div class="item-content">
            <div class="item-name flex-row">
               <h4 id="name">${menu.title}</h4>
                <h5 id="price">$${menu.price}</h5>
            </div>
            <hr>
           
            <div class="item-info">
              <p>${menu.desc}</p>
           </div>
           
           </div>
            </div>
       `
    })
       .join("")
    )};

   


    let cart =[];


    function addToCart(id){
      if(cart.some((menuSelected)=>menuSelected.id === id)){
         const addItem = cart.find((y)=> y.id=== id);
         addItem.numberOfUnit +=1;
      }
      else{
        const menuSelected = Menus.find((x)=> x.id=== id);

        cart.push({
            ...menuSelected,
            numberOfUnit:1,});
      };
      
         
           updateCart();
    }

    function updateCart(){
        renderCartItems();
        Total();
    }

    function renderCartItems(){
        return(cartItem.innerHTML = cart.map(function(x){
           return `
           
         <i class="fa-solid fa-trash-can"></i>              
           <div class="image">
             <img src="${x.imgSrc}">
         </div>

         <div id="price">
             <p>$${x.price}</p>
         </div>

         <div id="quantity">
             <button onclick = "decrement(${x.id})">-</button>
             <p>${x.numberOfUnit}</p>
             <button onclick = "increment(${x.id})">+</button>
         </div> 

                         
           `
        })
           .join("")
        )};
    
function increment(id){
    const addItem = cart.find((y)=> y.id=== id);
        addItem.numberOfUnit +=1;

    updateCart();
}

function decrement(id){
    const reduceItem = cart.find((y)=> y.id=== id);
    if(reduceItem.numberOfUnit === 0)return;
    else{
        reduceItem.numberOfUnit -=1;
    }
     
    updateCart();
}

function Total(){
    let totalPrice = 0,
    totalMenu = 0;

    cart.forEach(function(x){
        
        totalMenu += x.numberOfUnit;
        totalPrice += x.price * x.numberOfUnit;
    });
       
       
       total.innerHTML =  `
       <h4 id="total-menu">Number of Menu : ${totalMenu}</h4>
         <h4 id="total-price">Total Price : $${totalPrice}</h4>
              
       `
}; 

checkOut.addEventListener("click", function(){
 
    cartItem.innerHTML = " ";
    total.innerHTML = " ";
    checkOutMessage.innerHTML = "Menu Received!!!"
})
    
        












