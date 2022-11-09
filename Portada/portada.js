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
      let link = window.open("../Python/python.html","_self")

})

javascript.addEventListener("click",(e)=>{
      let link = window.open("../Javascript/Js.html","_self")

})

c.addEventListener("click",(e)=>{
      let link = window.open("../C/C.html","_self")

})

const bottom = document.querySelector(".bottom");

bottom.addEventListener("click",(e)=>{
      window.scroll({
            top: 1340,
            left: 0,
            behavior: "smooth"
      });
});

document.querySelector(".img-ayuda_1").addEventListener("click",(e)=>{
      window.open("https://github.com/SebasDevelop25")
})

document.querySelector(".img-ayuda_2").addEventListener("click",(e)=>{
      window.open("https://www.instagram.com/_sebastian_ruiz16/")
})

document.querySelector(".img-ayuda_3").addEventListener("click",(e)=>{
      window.open("https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVWxDmlqjXwtjhrrmrpslnDPFNFHrCptSGxLnFhKvLTPXdzVrZkDbCCZMQjfPWBbkVfKG")
})