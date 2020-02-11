const btnCall = document.querySelector("header button");
const btnExit = document.querySelector("section.contactBox .exit")

btnCall.addEventListener("click", () => {
    document.querySelector("section.contactBox").classList.remove("disactive");
})

btnExit.addEventListener("click", () => {
    document.querySelector("section.contactBox").classList.add("disactive");
})