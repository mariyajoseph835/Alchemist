const productExpiryBtn = document.getElementById('product-expiry-btn');
const productRestockBtn = document.getElementById('product-restock-btn');
const productExpiryForm = document.getElementById('product-expiry-form');
const productRestockForm = document.getElementById('product-restock-form');

productExpiryBtn.addEventListener('click', () => {
    productExpiryForm.style.display = 'block';
    productRestockForm.style.display = 'none';
});

productRestockBtn.addEventListener('click', () => {
    productExpiryForm.style.display = 'none';
    productRestockForm.style.display = 'block';
});
