let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h2').innerText;
        const productPrice = product.dataset.price;
        
        // Add item to cart
        cart.push({ name: productName, price: productPrice });

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} has been added to your cart.`);
    });
});
