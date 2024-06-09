// cart.js
const cart = [];

function addToCart(productId) {
    // Fetch product details using the productId
    const product = { id: productId, name: 'Product 1', price: 19.99 }; // Example product

    cart.push(product);
    console.log('Product added to cart:', product);
}

// Example usage
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.parentElement.dataset.productId;
        addToCart(productId);
    });
});
