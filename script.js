    document.addEventListener("DOMContentLoaded", function () {
        let categoriesList = document.querySelector(".categories-list");
        function openCat() {
            categoriesList.classList.toggle("active");
        }
        // Make the function globally available
        window.openCat = openCat;
    });


let sideBar = document.getElementById("sidebar-multi-level-sidebar");

function toggleSideBar() {
    sideBar.classList.toggle("active-sidebar");
}

let cartFav = 0;

function addToFav(button) {
    const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
    const icon = button.querySelector("i");
    const productElement = button.closest(".product");

    // Get Item Details
    const productName = productElement.querySelector('.name-product a').innerText;
    const productPrice = productElement.querySelector('.prices span').innerText;
    const productImage = productElement.querySelector('.img-product img').src;

    const sidebarFav = document.getElementById("sidebar-fav");
    const existingFavItem = Array.from(sidebarFav.querySelectorAll(".container-products-fav"))
        .find(item => item.querySelector(".name-product").innerText === productName);

    if (existingFavItem) {
        // إذا كان المنتج موجودًا، قم بحذفه وتقليل العداد
        existingFavItem.remove();
        if (cartFav > 0) {
            cartFav--;
        }

        icon.classList.remove("fa-solid", "red-heart");
        icon.classList.add("fa-regular");
    } else {
        cartFav++;
        const itemFav = `
            <div class="container-products-fav mt-5 flex items-center justify-between w-[96%]">
                <div class="img---product">
                    <img class="h-[110px]" src="${productImage}" alt="">
                </div>
                <div class="info-product ml-[10px]">
                    <div class="name-product leading-[1.3] mb-[6px]">
                        <span id="name-product-fav"  class="text-[15px]">${productName}</span>
                    </div>
                    <div class="price-product font-semibold mb-[6px]">
                        ${productPrice}
                    </div>
                </div>

            </div>
        `;
        sidebarFav.insertAdjacentHTML("beforeend", itemFav);
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "red-heart");
    }

    // تحديث عداد المفضلة
    document.querySelector("#count-fav").textContent = cartFav;
}

let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

function addToCart(productId, productName, productPrice, productImage) {
    cartCount++;
    document.querySelectorAll(".custom-count").forEach((e) => {
        e.textContent = cartCount;
    });
    confetti({
        particleCount: 200,
        spread: 110,
        origin: { y: 0.6 },
    });

    const cartItemHTML = `
            <div class="container-products mt-5 flex items-center justify-between w-[96%]">
                <div class="img---product">
                    <img class="h-[110px]" src="${productImage}" alt="">
                </div>
                <div class="info-product ml-[10px]">
                    <div class="name-product leading-[1.3] mb-[6px]">
                        <span class="text-[15px]">${productName}</span>
                    </div>
                    <div class="price-product font-semibold mb-[6px]">
                        ${productPrice}
                    </div>
                    <div class="state-product">
                        <button class="state-btns" onclick="decrProduct(this)" id="minus"><i class="fas fa-minus"></i></button>
                        <span class="state-btns number-products">1</span>
                        <button class="state-btns" onclick="incProduct(this)" id="plus"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div class="delete-product">
                    <button onclick="removeProduct(this)" type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

    const sidebar = document.querySelector(".sidebar-card .h-full");
    sidebar.insertAdjacentHTML("beforeend", cartItemHTML);

    totalPrice += parseFloat(productPrice);
    document.getElementById("subtotal").textContent = totalPrice;
}

document.querySelectorAll("#additemtocard").forEach((button, index) => {
    button.addEventListener("click", () => {
        const productId = index;
        const productName = button
            .closest(".product")
            .querySelector(".name-product a").innerText;
        const productPrice = button
            .closest(".product")
            .querySelector(".prices span").innerText;
        const productImage = button
            .closest(".product")
            .querySelector(".img-product img").src;
        button.disabled = true;
        button.textContent = "Item In Card";
        button.classList.add("in-card");
        addToCart(productId, productName, productPrice, productImage);
    });
});

function removeProduct(button) {
    const product = button.closest(".container-products");
    product.remove();
    cartCount--;
    document.querySelectorAll(".custom-count").forEach((e) => {
        e.textContent = cartCount;
    });
}

function incProduct(button) {
    const productQuantity = button.parentNode.querySelector(".number-products");
    let currentQuantity = parseInt(productQuantity.innerText);
    currentQuantity++;
    productQuantity.innerText = currentQuantity;
}

function decrProduct(button) {
    const productQuantity = button.parentNode.querySelector(".number-products");
    let currentQuantity = parseInt(productQuantity.innerText);
    if (currentQuantity > 1) {
        currentQuantity--;
        productQuantity.innerText = currentQuantity;
    }
}

function closeSideBarFav() {
    let sidebarFav = document.getElementById("sidebar-fav");
    sidebarFav.classList.toggle("active");
}
