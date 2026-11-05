const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// Load Food Details
fetch("/foods/" + id)

.then(res => res.json())

.then(data => {

const food = data[0];

document.getElementById("foodname").value = food.foodname;

document.getElementById("category").value = food.category;

document.getElementById("price").value = food.price;

document.getElementById("description").value = food.description;

document.getElementById("available").value = food.available;

});

// Update Food
document.getElementById("editForm").addEventListener("submit", updateFood);

function updateFood(e){

e.preventDefault();

const food = {

foodname:document.getElementById("foodname").value,

category:document.getElementById("category").value,

price:document.getElementById("price").value,

description:document.getElementById("description").value,

available:document.getElementById("available").value

};

fetch("/foods/" + id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(food)

})

.then(res=>res.json())

.then(data=>{

alert("Food Updated Successfully");

window.location="viewfood.html";

});

}