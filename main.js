const imgs = document.querySelectorAll(".carousel-img");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
let index = 0;

previousBtn.addEventListener("click", function () {
    hideImg();
    if (index === 0) {
        index = imgs.length - 1;
    } else {
        index--;
    }
    imgs[index].classList.add("active-img");
});

nextBtn.addEventListener("click", function () {
    hideImg();
    if (index === imgs.length - 1) {
        index = 0;
    } else {
        index++;
    }
    imgs[index].classList.add("active-img");
});

function hideImg() {
    let activeImg = document.querySelector(".active-img");
    activeImg.classList.remove("active-img");
}
