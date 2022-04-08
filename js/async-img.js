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

    let $vidoes = document.querySelectorAll("video");
    $vidoes.forEach(($video) => {
        if (typeof($video.webkitEnterFullscreen) != "undefined") {
            // This is for Android Stock.
            $video.addEventListener("touchstart", () => {
                alert("wtf");
                $video.play();
                $video.webkitEnterFullscreen();
            });
        }
    });
})();
