window.addEventListener('DOMContentLoaded', () => {

    const galleryItem = document.getElementsByClassName("img_container");
    const lightBoxContainer = document.createElement("div");
    const lightBoxContent = document.createElement("div");
    const lightBoxImg = document.createElement("img");
    const lightBoxPrev = document.createElement("div");
    const lightBoxNext = document.createElement("div");
    const body = document.querySelector('body');

    lightBoxContainer.classList.add("lightbox");
    lightBoxContent.classList.add("lightbox-content");
    lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
    lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

    lightBoxContainer.appendChild(lightBoxContent);
    lightBoxContent.appendChild(lightBoxImg);
    lightBoxContent.appendChild(lightBoxPrev);
    lightBoxContent.appendChild(lightBoxNext);

    document.body.appendChild(lightBoxContainer);

    let index = 1;

    function showLightBox(n) {
        if (n > galleryItem.length) {
            index = 1;
        } else if (n < 1) {
            index = galleryItem.length;
        }
        let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
        lightBoxImg.setAttribute("src", imageLocation);
    }

    function currentImage() {
        lightBoxContainer.style.display = "block";

        body.style.overflow = 'hidden';
        let imageIndex = parseInt(this.getAttribute("data-index"));
        showLightBox(index = imageIndex);
    }
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].addEventListener("click", currentImage);
    }

    function slideImage(n) {
        showLightBox(index += n);
    }
    function prevImage() {
        slideImage(-1);
    }
    function nextImage() {
        slideImage(1);
    }
    lightBoxPrev.addEventListener("click", prevImage);
    lightBoxNext.addEventListener("click", nextImage);

    function closeLightBox() {
        if (this === event.target) {
            lightBoxContainer.style.display = "none";
                    
            body.style.overflow = '';
        }
    }
    lightBoxContainer.addEventListener("click", closeLightBox);


});