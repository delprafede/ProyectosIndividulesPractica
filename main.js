let numberConteiner = document.querySelector(".container__numeros");
let reateNumber = document.querySelector("#contianer__resultado_num")
console.log(reateNumber);
let cambiarCard = document.querySelector(".container__btn__enviar")
let containers = document.querySelector(".container")
let containerGracias = document.querySelector(".container__gracias")


let clickBtnNum = event => {
    let numberSelect =  event.target.innerText; //con target estoy tomando el valor
    reateNumber.innerText = numberSelect // sustituyendo el valor del span
if (numberSelect >= 0 || numberSelect <= 5 ) {
    let btnCard = () => {
        containers.style.display = "none"
        containerGracias.style.display = "flex"
    }
    cambiarCard.addEventListener("click", btnCard)
}else{
    alert ("Ingrese un numero valido entre [1-5]")
}
    

} 
numberConteiner.addEventListener("click", clickBtnNum)






