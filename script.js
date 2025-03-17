// Sample product data with placeholder image URLs
const products = [
    {
        id: 1,
        name: "Hiking Boots",
        price: 120,
        image: "https://via.placeholder.com/150" // Placeholder image
    },
    {
        id: 2,
        name: "Backpack",
        price: 80,
        image: "https://via.placeholder.com/150" // Placeholder image
    },
    {
        id: 3,
        name: "Trekking Poles",
        price: 50,
        image: "https://via.placeholder.com/150" // Placeholder image
    }
];

// Function to load products
function loadProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} added to cart!`);
        // Add logic to update cart
    }
}

// Load products when the page loads
window.onload = loadProducts;
