import { productSale } from './product-sale.js';
import { formatThreeDigits } from './money.js';
// Product list ====================================

// =================================================

// Generate Product to HTML ========================

let productHTML = '';
productSale.forEach((product) => {
    
    productHTML = productHTML +  
    `
        <div class="product-item mb-3">
            <div class="product-item-inner card p-3">
                <span class="p-discount">
                    -20%
                </span>
                <a href="#" class="d-flex align-items-center justify-content-center"><img src="${product.image}" class="img-fluid" alt=""></a>
                <h4 style="text-align:center;"><a href="#" style="text-decoration: none; color: #333; font-size: 12px;" class="fw-bold">${product.name}</a></h4>
                <p class="text-title" style="font-size: 15px; text-transform: capitalize;">
                    Giá bán: 
                    <span class="text-danger fw-bold">
                        ${formatThreeDigits(product.pricesale)}&nbsp;<u style="text-transform: lowercase;">đ</u>
                    </span>
                    Giá cũ:
                    <del class="text-muted">
                        ${formatThreeDigits(product.price)}&nbsp;<u style="text-transform: lowercase;">đ</u>
                    </del>
                </p>
                
                <button class="add-to-cart-button js-add-to-cart button-primary btn btn-warning" data-product-id="${product.id}">
                    MUA NGAY
                </button>
            </div>
        </div>
    `;
})

document.querySelector('.js-product-sale-list').innerHTML = productHTML;
// =================================================

// Make Interactive Add To Cart ====================
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // when click button-Add to card will be pick product Id 
        // set into productId
        const productId = button.dataset.productId; 
        
        let matchingItem;

        cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
});

