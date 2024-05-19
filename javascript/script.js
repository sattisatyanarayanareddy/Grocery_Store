const products = [
    {
        id: 1,
        name: "Apple",
        imageUrl: "./images/product1.jpg"
    },
    {
        id: 2,
        name: "Apple",
        imageUrl: "./images/product2.jpg"
    },
    {
        id: 3,
        name: "Grapes",
        imageUrl: "./images/product3.jpg"
    },
    {
        id: 4,
        name: "Grapes",
        imageUrl: "./images/product4.jpg"
    },
    {
        id: 5,
        name: "Grapes",
        imageUrl: "./images/product5.jpg"
    },
    {
        id: 6,
        name: "Kivi",
        imageUrl: "./images/product6.jpg"
    },
    {
        id: 7,
        name: "Watermelon",
        imageUrl: "./images/product7.jpg"
    },
    {
        id: 8,
        name: "Straw Berry",
        imageUrl: "./images/product8.jpg"
    },
    {
        id: 9,
        name: "Pine Apple",
        imageUrl: "./images/product9.jpg"
    },
    {
        id: 10,
        name: "Mango",
        imageUrl: "./images/product10.jpg"
    },
    {
        id: 11,
        name: "Mango",
        imageUrl: "./images/product11.jpg"
    },
    {
        id: 12,
        name: "Product 2",
        imageUrl: "./images/product1.jpg"
    },

    // Add more products as needed
];

// Function to create product boxes dynamically
function createProductBox(product) {
    const container = document.getElementById("product-container");

    const box = document.createElement("div");
    box.classList.add("product-container");

    const image = document.createElement("div");
    image.style.backgroundImage = `url(${product.imageUrl})`;
    image.classList.add("product-image");

    const name = document.createElement("div");
    name.innerText = product.name;
    name.classList.add("product-name");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";
    buyButton.classList.add("buy-button");

    const cartButton = document.createElement("button");
    cartButton.innerText = "Add to Cart";
    cartButton.classList.add("cart-button");

    buttonContainer.appendChild(buyButton);
    buttonContainer.appendChild(cartButton);

    box.appendChild(image);
    box.appendChild(name);
    box.appendChild(buttonContainer);

    container.appendChild(box);
}

// Loop through products and create product boxes
products.forEach(createProductBox);

// Function to filter products based on the search input
function filterProducts() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase();

    const productContainers = document.querySelectorAll(".product-container");

    productContainers.forEach(container => {
        const productName = container.querySelector(".product-name").innerText.toLowerCase();
        const isMatch = productName.includes(searchTerm);

        // Show or hide the product box based on the search result
        container.style.display = isMatch ? "block" : "none";
    });
}
