const bajar = document.querySelector(".bajar")

bajar.addEventListener("click",(e)=>{
     window.scroll({
          top: 660,
          left: 0,
          behavior: 'smooth'
        });
})

const python = document.querySelector(".lenguaje-pyton")
const javascript = document.querySelector(".lenguaje-javascript")
const c = document.querySelector(".lenguaje-c")

python.addEventListener("click",(e)=>{
      let link = window.open("../python/python.html")

})

javascript.addEventListener("click",(e)=>{
      let link = window.open("../Javascript/Js.html")

})

c.addEventListener("click",(e)=>{
      let link = window.open("../C/C.html")

})

const bottom = document.querySelector(".bottom");

bottom.addEventListener("click",(e)=>{
      window.scroll({
            top: 1340,
            left: 0,
            behavior: "smooth"
      });
});
