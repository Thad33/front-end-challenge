const starEls = document.querySelectorAll(".far-star")
const emojisEl = document.querySelector(".fa-regular")

starEls.forEach(startEl=>{
    startEl.addEventListener("click", ()=>{
      updateRating(index)
    })
})

function updateRating(ndex) {
    starEls.forEach((startEl, idx)=> {
        if(idx < index + 1){
            starEls.classList.remove("active");
        }else{
            starEls.classList.remove("active");
        }
    })

    emojisEl.forEach(emojiEl =>{
        emojiEl.style.transform = 'translateX(-${index })';
    })
}