fetch("/foods")
.then(response => response.json())
.then(data => {

document.getElementById("total").innerHTML = data.length;

let veg = 0;
let nonveg = 0;
let available = 0;
let unavailable = 0;

let output = "";

data.forEach(food => {

if(food.category === "Veg")
veg++;

else
nonveg++;

if(food.available == 1)
available++;

else
unavailable++;

output += `

<tr>

<td>${food.foodid}</td>

<td>${food.foodname}</td>

<td>${food.category}</td>

<td>₹${food.price}</td>

<td>${food.description}</td>

<td>${food.available==1 ? "Yes":"No"}</td>

</tr>

`;

});

document.getElementById("veg").innerHTML = veg;
document.getElementById("nonveg").innerHTML = nonveg;
document.getElementById("available").innerHTML = available;
document.getElementById("unavailable").innerHTML = unavailable;

document.getElementById("foodTable").innerHTML = output;

});
let allFoods=[];

function loadFoods(){

fetch("/foods")

.then(res=>res.json())

.then(data=>{

allFoods=data;

displayFoods(data);

});

}

function searchFood(){

const value=document
.getElementById("searchBox")
.value
.toLowerCase();

const result=allFoods.filter(food=>

food.foodname.toLowerCase().includes(value)

);

displayFoods(result);

}

function filterCategory(){

const category=document
.getElementById("categoryFilter")
.value;

if(category==="All"){

displayFoods(allFoods);

return;

}

const result=allFoods.filter(food=>

food.category===category

);

displayFoods(result);

}

loadFoods();