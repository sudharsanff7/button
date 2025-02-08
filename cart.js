document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItemsContainer.innerHTML = "";
        cart.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
            cartItemsContainer.appendChild(productElement);
        });
    }

    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', () => {
        localStorage.removeItem('cart');
        location.reload();
    });
});
