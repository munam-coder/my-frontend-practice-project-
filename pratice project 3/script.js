let btn = document.querySelector(".throttle");
let throttlefunction = (func, delay)=>{
    let prev = 0;
    return(...args) =>{
        let now = new Date().getTime();
        if(now - prev> delay){
            prev = now;
            return func(...args);
        }
    }
}

addEventListener("mousemove", throttlefunction((dets)=>{
    // your code 
  let div =   document.createElement("div");
  div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    
    
    let img = document.createElement("img");
    
    img.setAttribute("src", "https://images.unsplash.com/photo-1746472603866-245289ecda5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    
    div.appendChild(img);
    
    
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
    })
    gsap.to(img,{
        y: "100%",
        delay: .6,
        ease: Power2,
        
        
    })





  setTimeout(() => {
    div.remove();
  }, 2000);
  document
}, 400));