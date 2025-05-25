document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.card_wrap');

    async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            products.forEach(product => {
                createCard(product);
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    function createCard(product) {
        const newCardHTML = `
        <div class="card">
            <div class="pin_title">${product.title}</div>
            <div class="pin_mdl">
                <div class="list_head">
                    <div class="save_card">Save</div>
                </div>
                <div class="foot">
                    <div class="dest">
                        <div class="pin_icon_cont">
                            <img src="./images/arrowside.png" alt="destination" class="pin_icon_img">
                        </div>
                        <span>PinClone</span>
                    </div>
                    <div class="pin_icon_cont">
                        <img src="./images/arrowup.png" alt="send" class="pin_icon_img">
                    </div>
                    <div class="pin_icon_cont">
                        <img src="./images/arrowdown.png" alt="edit" class="pin_icon_img">
                    </div>
                </div>
            </div>
            <div class="pin_img">
                <img src="${product.image}" alt="pin_img">
            </div>
        </div>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', newCardHTML);
    }
    fetchProducts();
});