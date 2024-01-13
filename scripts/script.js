// JavaScript Document
console.log("hi Merle");

window.addEventListener(
    "load",
    (event) => {
        console.info('Page is fully loaded');
        setTimeout(function () {
            var loader = document.querySelector(".loader-wrapper");
            loader.classList.add("loader-fadeOut");
            setTimeout(function () { loader.style.display = "none" }, 1000);
            loader.classList.remove("loader-wrapper");
        }, 1000)
    },
    false,
);