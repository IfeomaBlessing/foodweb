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
let cartItem = document.getElementById("cartItem");
let label= document.getElementById("label");
let totalMenu = document.getElementById("total-menu");
let totalAmount = document.getElementById("total-amount");
let checkOut = document.getElementById("checkOut");


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

   
let cart = JSON.parse(localStorage.getItem("Objects")) || [];
 updateCart();

     

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

      cartAmount.innerHTML = (cart.map((x)=> x.numberOfUnit).reduce((a,b)=> a + b, 0));
           updateCart();
 }

        
function increment(id){
    const menuItem = cart.find((y)=> y.id=== id);
        menuItem.numberOfUnit +=1;

    updateCart();
    renderCartItems();
}

function decrement(id){
    const menuItem = cart.find((y)=> y.id=== id);
    if(menuItem.numberOfUnit === 0)return;
    else{
        menuItem.numberOfUnit -=1;
    }

    cart = cart.filter((x)=>x.numberOfUnit !== 0)
    // ONCE THE NUMBER OF UNIT IS REDUCED TO 0, THE ITEM IS REMOVED FROM THE CART
    renderCartItems()
    updateCart();
 
}


    function updateCart(){
        renderCartItems();
        calculation();
        totalPrice();
        totalItem();
        
        localStorage.setItem("Objects", JSON.stringify(cart));
    }


    
function renderCartItems(){
    // IF THE CART IS NOT EMPTY, THEN IT RUNS THIS
    if(cart.length !== 0){
        return(cartItem.innerHTML = cart.map(function(x){
            return `
            <div class="item" id= "item">
            <div class="cancel">
            <i class="fa-solid fa-trash-can" onclick = "removeMenu(${x.id})"></i>
        </div>
                     
            <div class="image">
              <img src="${x.imgSrc}">
          </div>
 
          <div id="unit-price">
              <p>$${x.price}</p>
          </div>
 
          <div id="quantity">
              <button onclick = "decrement(${x.id})">-</button>
              <p>${x.numberOfUnit}</p>
              <button onclick = "increment(${x.id})">+</button>
          </div> 
 
          <div id="subtotal-price">
          <p>$${x.numberOfUnit * x.price}</p>
      </div>
                 
      </div>
            `
         })
            .join("")
         )
    }
    else{
        // BUT IF THE CART IS EMPTY, IT RUS THIS
        cartItem.innerHTML = ` 
        <h4>Cart Is Empty</h4>
        `
        checkOut.innerHTML = ` <button id="checkBtn"><a href="#menu"> Check Out Our Menu</a></button> ` 

        totalAmount.innerHTML =`  `
       
        totalMenu.innerHTML =`  `

    };
}

function removeMenu(id){
    cart = cart.filter((x)=>x.id !== id)
    // ONCE THE DELETE BUTTON IS CLICKED, IT REMOVES THE ITEM FROM THE CART AND 
    // MAKE SURE TO CALL THE FUNCTION OF THE CART & CALCULATION SO IT REOMVES IT FROM THE CART AND LOCAL STORAGE AND UPDATE THE CART AMOUNT
    renderCartItems();
    calculation();
    totalPrice();
    totalItem();
 

    localStorage.setItem("Objects", JSON.stringify(cart));
    
}


function calculation(){
    let cartAmount = document.getElementById("cartAmount");
    // REDUCE METHOD ADDS THE NUMBER OF ITEMS IN THE CART
    // a IS THE PREVIOUS NUMBER WHILE b IS THE NEXT NUMBER
    // 0(ZERO) IS A DEFAULT NUMBER, HENCE CALCULATION STARTS FROM ZERO(0)
    cartAmount.innerHTML = (cart.map((x)=> x.numberOfUnit).reduce((a,b)=> a + b, 0));

}; 

function totalPrice(){
    if(cart.length !== 0){
        let totalPrice = cart.map((x)=>{
       return  x.numberOfUnit * x.price;
        }).reduce((a,b)=>a + b, 0);
          
        totalAmount.innerHTML =`
        <div class = "menu">
        <h4 id="total-menu">Total Menu:</h4>
        <h4>${totalPrice}</h4>
    </div>
        `
        checkOut.innerHTML = ` <button id="orderBtn" onclick = "checkout()">Check Out</button>
        <button id="clearBtn" onclick = "clearCart()">Clear Cart</button> ` 


    }
    else return;

  
}


function totalItem(){
    if(cart.length !== 0){
        let totalItem = cart.map((x)=>{
       return  x.numberOfUnit;
        }).reduce((a,b)=>a + b, 0);
          
        totalMenu.innerHTML =`
       

        <div class = "menu">
                            <h4 id="total-menu">Total Menu:</h4>
                            <h4>${totalItem}</h4>
                        </div>
        `
 
 
    }
    else return;


}

        
function checkout(){
   cart = [];
     cartItem.innerHTML = ` 
        <h4>Order Successfully Placed</h4>
        `
        totalAmount.innerHTML =` `
        totalMenu.innerHTML =`  `
        checkOut.innerHTML = `  ` 

        calculation();
     localStorage.setItem("Objects", JSON.stringify(cart));
}

function clearCart(){
    cart = [];
     renderCartItems();
 
     calculation();
      localStorage.setItem("Objects", JSON.stringify(cart));
 }







