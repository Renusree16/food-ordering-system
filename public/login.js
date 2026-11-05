document.getElementById("loginForm").addEventListener("submit", login);

function login(e){

e.preventDefault();

const user={

username:document.getElementById("username").value,

password:document.getElementById("password").value

};

fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Login Successful");

window.location="dashboard.html";

}

else{

alert("Invalid Username or Password");

}

});

}
