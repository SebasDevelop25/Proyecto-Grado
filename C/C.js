const bottom = document.querySelector(".bottom");

bottom.addEventListener("click",(e)=>{
      window.scroll({
            top: 670,
            left: 0,
            behavior: "smooth"
      });
});



const enviar1 = document.querySelector(".respuesta-1")
const texto1 = document.querySelector(".desarrollo-1")
const result1 = document.querySelector(".resultado")

enviar1.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo();
    if(error[0]){
        result1 = error[1]

    } else{
        result1 = swal("Oops!", "Pusiste mal el código", "error"); 
    }
})

const validarCampo = ()=>{
    let error = []
    if(texto1.value == "var"){
        error[0] = true;
        error[1] = swal("Perfecto!", "El código es correcto");;
        return error;
    }
    error[0] = false;
    return error
}

const enviar2 = document.querySelector(".respuesta-2")
const texto2 = document.querySelector(".desarrollo-2")
const result2= document.querySelector(".resultado")

enviar2.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo1();
    if(error[0]){
        result2 = error[1]

    } else{
        result2 = swal("Oops!", "Pusiste mal el código", "error"); 
    }
})

const validarCampo1 = ()=>{
    let error = []
    if(texto2.value == `var etnio = alert("me gustan las palomitas")`){ 
        error[0] = true;
        error[1] = swal("Perfecto!", "El código es correcto");;
        return error;
    }
    error[0] = false;
    return error
}

const enviar3 = document.querySelector(".respuesta-3")
const texto3 = document.querySelector(".desarrollo-3")
const result3= document.querySelector(".resultado")

enviar3.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo2();
    if(error[0]){
        result3 = error[1]

    } else{
        result3 = swal("Oops!", "Pusiste mal el código", "error"); 
    }
})

const validarCampo2 = ()=>{
    let error = []
    if(texto3.value == `var etnio = prompt("hola") document.write("etnio")`){
        error[0] = true;
        error[1] = swal("Perfecto!", "El código es correcto");;
        return error;
    }
    error[0] = false;
    return error
}

const enviar4 = document.querySelector(".respuesta-4")
const texto4 = document.querySelector(".desarrollo-4")
const result4= document.querySelector(".resultado")

enviar3.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo3();
    if(error[0]){
        result4 = error[1]

    } else{
        result4 = swal("Oops!", "Pusiste mal el código", "error"); 
    }
})

const validarCampo3 = ()=>{
    let error = []
    if(texto4.value == `var etnio = prompt("hola") document.write("etnio")`){
        error[0] = true;
        error[1] = swal("Perfecto!", "El código es correcto");;
        return error;
    }
    error[0] = false;
    return error
}

