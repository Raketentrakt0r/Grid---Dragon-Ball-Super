const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".container img");
const original = document.querySelector(".full-img"); 
const text = document.querySelector(".text");

previews.forEach(preview => {
    preview.addEventListener("click", ()=> {
        modal.classList.add("open");
        original.classList.add("open");

        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./imgU6/${originalSrc}`;
        /*original.src = originalSrc; Esto es lo mismo*/
        const altText = preview.alt;
        text.textContent = altText;
    });

});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }

});