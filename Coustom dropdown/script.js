let btn = document.querySelector("button");
let options = document.querySelector("ul");
let li = document.querySelectorAll("li");
let resultbox = document.querySelector(".dropdown-result")


btn.addEventListener("click", () =>{
    options.classList.toggle("options")

});

li.forEach( (items) => {
    items.addEventListener("click", () => {
        btn.textContent  = items.textContent;

        resultbox.textContent = items.textContent;

   li.forEach((liItem) => liItem.classList.remove("selected"));
    items.classList.add("selected");

    // Close dropdown
    options.classList.remove("show");
        
    })
});
