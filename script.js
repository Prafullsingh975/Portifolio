const pBtns = document.querySelector(".p-btns");
const pBtn = document.querySelectorAll(".p-btn");
const imgOverlay = document.querySelectorAll(".img-overlay");

pBtns.addEventListener("click",(e)=>{
    const clickedBtn = e.target;
    pBtn.forEach((elem)=>{
        elem.classList.remove("p-btn-active")
    })
    clickedBtn.classList.add("p-btn-active")
    imgOverlay.forEach((elem)=>elem.classList.add("p-image-not-active"));

    const btnNum = clickedBtn.dataset.btnNum;
    const activeProject = document.querySelectorAll(`.p-btn--${btnNum}`);
    activeProject.forEach((elem)=>elem.classList.remove("p-image-not-active"));  
})