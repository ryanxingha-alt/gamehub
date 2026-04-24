let cart = [];

// LOAD ORDERS WHEN PAGE OPENS
function loadOrders(){

let data = localStorage.getItem("library");

if(data){
cart = JSON.parse(data);
}

displayOrders();

}

// BUY GAME
function buyGame(name, price, img){

price = Number(price) || 0;

cart.push({
name: name,
price: price,
img: img,
status: "Ordered"
});

localStorage.setItem("library", JSON.stringify(cart));

alert("✅ Order Successful!");

displayOrders();

}

// DISPLAY LIBRARY / ORDERS
function displayOrders(){

let container = document.getElementById("orders");

if(!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach((game,index)=>{

let price = Number(game.price) || 0;

total += price;

container.innerHTML += `
<div class="order-card">

<img src="${game.img}" style="width:120px">

<h3>${game.name}</h3>
<p>Price: ₹${price}</p>
<p>Status: ${game.status}</p>

<button onclick="cancelOrder(${index})">
Cancel Order
</button>

</div>
`;

});

// UPDATE TOTAL PRICE
let totalElement = document.getElementById("totalPrice");

if(totalElement){
totalElement.innerText = "₹" + total;
}

// SUCCESS MESSAGE
let success = document.getElementById("successMsg");

if(success && cart.length > 0){
success.innerText = "✅ Order Successful!";
}

}

// CANCEL ORDER
function cancelOrder(index){

let removed = cart[index].name;

cart.splice(index,1);

localStorage.setItem("library", JSON.stringify(cart));

alert("❌ " + removed + " cancelled");

displayOrders();

}

// RUN WHEN PAGE LOADS
window.onload = loadOrders;