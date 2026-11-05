
let foods = [];

// Food image paths
const foodImages = {
    "veg biryani": "/images/veg biryani.png",
    "chicken biryani": "/images/chicken biryani.png",
    "paneer butter masala": "/images/paneer butter masala.png",
    "chicken pizza": "/images/chicken pizza.png",
    "veg burger": "/images/veg burger.png",
    "french fries": "/images/french fries.png",
    "chicken fried rice": "/images/chicken fried rice.png",
    "masala dosa": "/images/masala dosa.png"
};

// Get food image
function getFoodImage(food) {

    let name = food.foodname.toLowerCase().trim();

    // Use uploaded image if available
    if (food.image) {
        return "/uploads/" + food.image;
    }

    // Otherwise use default food image
    return foodImages[name] || "/images/default.png";
}

// Load foods from database
function loadFoods() {

    fetch("/foods")

    .then(res => res.json())

    .then(data => {

        foods = data;

        displayFoods(data);

    })

    .catch(error => {

        console.error("Error loading foods:", error);

        alert("Unable to load food items");

    });

}

// Display food items
function displayFoods(data) {

    let output = "";

    data.forEach(food => {

        output += `

        <tr>

            <td>${food.foodid}</td>

            <td>${food.foodname}</td>

            <td>${food.category}</td>

            <td>₹${food.price}</td>

            <td>${food.description}</td>

<td>
    Yes
</td>

            <td>

                <img
                    src="${getFoodImage(food)}"
                    width="100"
                    height="80"
                    style="object-fit:cover;border-radius:8px;"
                    alt="${food.foodname}"
                    onerror="this.onerror=null;this.src='/images/default.png';">

            </td>

            <td>

                <button class="edit-btn"
                onclick="editFood(${food.foodid})">

                    Edit

                </button>

            </td>

            <td>

                <button class="delete-btn"
                onclick="deleteFood(${food.foodid})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("foodTable").innerHTML = output;

}

// Search food
function searchFood() {

    const search = document
        .getElementById("search")
        .value.toLowerCase();

    const filtered = foods.filter(food => {

        return food.foodname.toLowerCase().includes(search);

    });

    displayFoods(filtered);

}

// Delete food
function deleteFood(id) {

    if (confirm("Delete this food?")) {

        fetch("/foods/" + id, {

            method: "DELETE"

        })

        .then(res => res.json())

        .then(() => {

            alert("Food Deleted Successfully");

            loadFoods();

        })

        .catch(error => {

            console.error("Delete error:", error);

            alert("Unable to delete food");

        });

    }

}

// Edit food
function editFood(id) {

    window.location = "editfood.html?id=" + id;

}

// Load food when page opens
loadFoods();
