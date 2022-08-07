const enviar = document.querySelector(".bottom")

enviar.addEventListener("click",(e)=>{
    window.scroll({
        top: 670,
        left: 0,
        behavior: "smooth"
    })
})

const enviar1 = document.querySelector(".respuesta-1")
const texto1 = document.querySelector(".desarrollo-1")
const result1 = document.querySelector(".resultado")

enviar1.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo();
    if(error[0]){
        result1 = error[1]

    } else{
        result1 = Swal.fire({
            title: "Código Correcto",
            confirmButtonText: "Aceptar",
        }); 
    }
})

const validarCampo = ()=>{
    let error = []
    let problem = `print ("")`
    if(texto1.value.indexOf("print") == -1 || texto1.value.indexOf("(") == -1 || texto1.value.indexOf(`"`) == -1 
    || texto1.value.indexOf(`"`) == -1 || texto1.value.indexOf(")") == -1){
        error[0] = true;
        error[1] = swal({
            type: 'error',
            title: 'Incorrecto',
            text: 'El códio esta mal escrito',
            footer: 'Intentalo de nuevo'
         });
        return error;
    }
    error[0] = false;
    return error
}

const enviar2 = document.getElementById("respuesta-2")
const texto2 = document.getElementById("problema-2")
const result2= document.querySelector(".resultado")

enviar2.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo1();
    if(error[0]){
        result2 = error[1]

    } else{
        result2 = Swal.fire({
            title: "Código Correcto",
            confirmButtonText: "Aceptar",
        });
    }
})

const validarCampo1 = ()=>{
    let error = []
    if(texto2.value.indexOf("print") == -1 || texto2.value.indexOf("(") == -1 || texto2.value.indexOf("type") == -1
    ||  texto2.value.indexOf("(") == -1 || texto2.value.indexOf(`"`) == -1 
    || texto2.value.indexOf(`"`) == -1 || texto2.value.indexOf(")") == -1 || texto2.value.indexOf(")") == -1){
        error[0] = true;
        error[1] = swal({
            type: 'error',
            title: 'Incorrecto',
            text: 'El códio esta mal escrito',
            footer: 'Intentalo de nuevo'
         });
        return error;
    }
    error[0] = false;
    return error
}

const enviar3 = document.getElementById("respuesta-3")
const texto3 = document.getElementById("problema-3")
const result3= document.querySelector(".resultado")

enviar3.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo2();
    if(error[0]){
        result3 = error[1]

    } else{
        result3 = Swal.fire({
            title: "Código Correcto",
            confirmButtonText: "Aceptar",
        });
    }
})

const validarCampo2 = ()=>{
    let error = []
    if(texto3.value.indexOf("print") == -1 || texto3.value.indexOf("(") == -1 || texto3.value.indexOf(`"`) == -1 
    || texto3.value.indexOf(`"`) == -1 || texto3.value.indexOf(`+`) == -1 || texto3.value.indexOf(`"`) == -1 
    || texto3.value.indexOf(`"`) == -1 || texto3.value.indexOf(")") == -1 ){
        error[0] = true;
        error[1] = swal({
            type: 'error',
            title: 'Incorrecto',
            text: 'El códio esta mal escrito',
            footer: 'Intentalo de nuevo'
         });
        return error;
    }
    error[0] = false;
    return error
}

const enviar4 = document.getElementById("respuesta-4")
const texto4 = document.getElementById("problema-4")
const result4= document.querySelector(".resultado")

enviar4.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampo3();
    if(error[0]){
        result3 = error[1]

    } else{
        result3 = Swal.fire({
            title: "Código Correcto",
            confirmButtonText: "Aceptar",
        });
    }
})

const validarCampo3 = ()=>{
    let error = []
    if(texto4.value.indexOf("[") == -1 || texto4.value.indexOf(`"`) == -1 || texto4.value.indexOf(`"`) == -1 
    || texto4.value.indexOf(`,`) == -1 || texto4.value.indexOf(`"`) == -1 || texto4.value.indexOf(`"`) == -1 
    || texto4.value.indexOf(`"`) == -1 || texto4.value.indexOf("]") == -1 ){
        error[0] = true;
        error[1] = swal({
            type: 'error',
            title: 'Incorrecto',
            text: 'El códio esta mal escrito',
            footer: 'Intentalo de nuevo'
         });
        return error;
    }
    error[0] = false;
    return error
}




