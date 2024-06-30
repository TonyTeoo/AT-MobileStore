import { cart } from './cart.js';
import { products } from './product.js';
import { formatThreeDigits } from './money.js';
// Product list ====================================

// =================================================

// Generate Product to HTML ========================

let productHTML = '';
products.forEach((product) => {
    
    productHTML = productHTML +  
    `
        <div class="product-item mb-3">
            <div class="product-item-inner card p-3">
                <a href="#" class="d-flex align-items-center justify-content-center"><img src="${product.image}" class="img-fluid" alt=""></a>
                <div class="sticker sticker-left">
                    <span><img src="${product.tragop}" title="Trả góp 0%" class="img-fluid"></span>
                </div>
                <div class="sticker sticker-right">
                    <span><img src="${product.freeship}" title="Miễn phí ship" class="img-fluid"></span>
                </div>
                <a href="#" style="text-decoration: none; color: #333; font-size: 13px;" class="fw-bold text-title text-center">${product.name}</a>
                <p class="text-title text-center" style="font-size: 15px; text-transform: capitalize;">
                    
                    <span class="text-danger fw-bold">${product.priceoffer}&nbsp;<u style="text-transform: lowercase;">đ</u></span>
                    <del>
                        ${formatThreeDigits(product.price)}&nbsp;<u style="text-transform: lowercase;">đ</u>
                    </del>
                    
                </p>
                
                <button class="add-to-cart-button js-add-to-cart button-primary btn btn-warning" data-product-id="${product.id}">
                    MUA NGAY
                </button>
                <div class="promote">
                    <a href="/dien-thoai-di-dong/iphone-11-64gb-chinh-hang-vn-a">
                        <ul>
                            <li><span class="bag">KM</span>Ưu đãi sốc gói truyền hình K+ chỉ từ 33.000đ/tháng khi mua kèm điện thoại, Máy tính bảng, TV tại AT Mobile</li>
                            <li><span class="bag">KM</span> Giảm sốc 50% giá SIM card khi mua kèm thiết bị.</li>
                            <li><span class="bag">KM</span> Ưu đãi trả góp 0% qua Shinhan Finance hoặc Mirae Asset Finance</li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
    `;
})

document.querySelector('.js-product-list').innerHTML = productHTML;
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

