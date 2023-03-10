var menuCategoriesItems = document.querySelectorAll(".menu-categories-item")
var loadmoreButton = document.querySelector(".loadmore")
console.log(menuCategoriesItems.length)
function handleMenuCategoriesItems() {

    loadmoreButton.addEventListener("click", function () {
        this.classList.toggle("open")
        for (let i = 0; i < menuCategoriesItems.length; i++) {
            if (i > 7 && i != menuCategoriesItems.length - 1) {
                if (isOpenMenuCategoriesItems()) {
                    menuCategoriesItems[i].style.display = "block";
                } else {
                    menuCategoriesItems[i].style.display = "none";

                }
            }
        }

    })

    for (let i = 0; i < menuCategoriesItems.length; i++) {
        if (i > 7 && i != menuCategoriesItems.length - 1) {
            menuCategoriesItems[i].style.display = "none";
        }

    }
}
function isOpenMenuCategoriesItems() {

    if (loadmoreButton.classList.contains("open")) {
        loadmoreButton.innerHTML = `
        <div class="menu-categories-item-action">
         <i class="fa-solid fa-circle-minus"></i>
                                            <span class="more-view">Close Categories</span>
                                        </div>
        `
        return true
    } else {
        loadmoreButton.innerHTML = `
        <div class="menu-categories-item-action">
         <i class="fa-solid fa-circle-plus"></i>
                                            <span class="more-view">More Categories</span>
                                        </div>
        `
    }

    return false

}
handleMenuCategoriesItems()
