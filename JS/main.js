const collapsibles = document.querySelectorAll(".collapsible")
collapsibles.forEach((el)=>
el.addEventListener("click", function (){
    this.classList.toggle("collapsible--expanded")
})
)