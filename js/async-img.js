(() => {
    let $images = document.querySelectorAll("[data-img-src]");
    $images.forEach(($image) => {
        $image.removeAttribute("hidden");
        $image.src = $image.getAttribute("data-img-src");
        $image.removeAttribute("data-img-src");
    });

    let $isScript = document.querySelectorAll(".is-script");
    $isScript.forEach(($script => {
        $script.removeAttribute("hidden");
        $script.classList.remove("is-hidden");
    }))

    let $dropdowns = document.querySelectorAll(".people-dropdown");
    $dropdowns.forEach(($dropdown) => {
        $dropdown.addEventListener("click", () => {
            $dropdown.parentElement.classList.toggle("is-active");
        });
    });
})();
