"use strict";
let allList = document.querySelectorAll("li");
let result = document.querySelector(".result");
if (window.localStorage.color) {
    result.style.backgroundColor = window.localStorage.color;
    if (window.localStorage.color === "blue" ||
        window.localStorage.color === "black") {
        console.log(window.localStorage.color);
        result.style.color = "white";
        result.innerHTML = `${window.localStorage.color[0].toUpperCase()}${window.localStorage.color.slice(1)}`;
    }
    else {
        result.style.color = "black";
        result.innerHTML = `${window.localStorage.color[0].toUpperCase()}${window.localStorage.color.slice(1)}`;
    }
    result.innerHTML = `${window.localStorage.color[0].toUpperCase()}${window.localStorage.color.slice(1)}`;
    allList.forEach((li) => {
        li.classList.remove("active");
    });
    allList.forEach((li) => {
        if (window.localStorage.color === li.dataset.color) {
            li.className = "active";
        }
    });
}
allList.forEach((li) => {
    li.addEventListener("click", (e) => {
        allList.forEach((li) => {
            li.classList.remove("active");
        });
        const target = e.target;
        target.classList.add("active");
        const color = target.dataset.color;
        if (color) {
            window.localStorage.setItem("color", color);
            result.style.backgroundColor = window.localStorage.color;
            if (color === "blue" || color === "black") {
                console.log(window.localStorage.color);
                result.style.color = "white";
                result.innerHTML = `${window.localStorage.color[0].toUpperCase()}${window.localStorage.color.slice(1)}`;
            }
            else {
                result.style.color = "black";
                result.innerHTML = `${window.localStorage.color[0].toUpperCase()}${window.localStorage.color.slice(1)}`;
            }
        }
    });
});
//# sourceMappingURL=main.js.map