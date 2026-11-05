document.getElementById("foodForm").addEventListener("submit", addFood);

function addFood(e){

e.preventDefault();

const food={

foodname:document.getElementById("foodname").value,

category:document.getElementById("category").value,

price:document.getElementById("price").value,

description:document.getElementById("description").value,

available:document.getElementById("available").value

};

const formData = new FormData();

formData.append("foodname", document.getElementById("foodname").value);
formData.append("category", document.getElementById("category").value);
formData.append("price", document.getElementById("price").value);
formData.append("description", document.getElementById("description").value);
formData.append("available", document.getElementById("available").value);
formData.append("image", document.getElementById("image").files[0]);

fetch("/foods", {
    method: "POST",
    body: formData
})
.then(res => res.json())
.then(data => {
    alert("Food Added Successfully");
    window.location = "viewfood.html";
})
.catch(err => console.log(err));

then(res=>res.json())

.then(data=>{

alert("Food Added Successfully");

document.getElementById("foodForm").reset();

window.location="viewfood.html";

})

.catch(err=>console.log(err));

}