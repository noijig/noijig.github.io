(() => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    console.log("Checking for async images");
    let $images = document.querySelectorAll("[data-img-src]");
    $images.forEach(($image) => {
        console.log("Loaded async image", $image);
        $image.removeAttribute("hidden");
        /*/
        sleep(5000).then(() => {
            image.src = image.getAttribute("data-img-src");
            image.removeAttribute("data-img-src");
        })
        /*/
        $image.src = $image.getAttribute("data-img-src");
        $image.removeAttribute("data-img-src");
        //*/
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

    let $youtubeExpose = document.querySelectorAll("[data-youtube-uMP2tUkQ8WM]");
    $youtubeExpose.forEach(($youtube) => {
        $youtube.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uMP2tUkQ8WM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
        Preview of the tool in use during development of the game
        <a aria-label='Tension' href='tension.html'>Tension</a><span>.</span></p>`;
    });
})();
