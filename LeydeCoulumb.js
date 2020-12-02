const Resultado = document.getElementById("Resultado");

var FuerzaElectrica_x;
var FuerzaElectrica_y;
var FuerzaElectrica_t;

function Calcular(){
    let principal = document.querySelector('input[name="inlineRadioOptions"]:checked');
    let cargasSelected = document.querySelectorAll('input[id="inlineCheckbox1"]:checked');
    let xPositions = document.querySelectorAll('input[name=xPosition]');
    let yPositions = document.querySelectorAll('input[name=yPosition]');
    let charges = document.querySelectorAll('input[name=sizeCharge]');
    let index;
    let xPositionPrincipal;
    let yPositionPrincipal;
    let sizeChargePrincipal;
    const K = 9000000000;

    FuerzaElectrica_x = 0;
    FuerzaElectrica_y = 0;

    cargasSelected = Array.from(cargasSelected);
    xPositions = Array.from(xPositions);
    yPositions = Array.from(yPositions);
    charges = Array.from(charges);

    console.log(xPositions);
    console.log(yPositions);
    console.log(charges);

    let value = principal.value;
    value = value.substr(value.length - 1);


    index = parseInt(value) - 1;
    console.log(index);
    if(index >-1){
        xPositionPrincipal = xPositions.splice(index, 1);
        console.log(xPositionPrincipal[0].value);
        yPositionPrincipal = yPositions.splice(index, 1);
        console.log(yPositionPrincipal[0].value);
        sizeChargePrincipal = charges.splice(index, 1);
        console.log(sizeChargePrincipal[0].value);
    }

    for (let i = 0; i<charges.length; i++){
        if(charges[i].value.trim() !== "" && xPositions[i].value.trim() !== "" && yPositions[i].value.trim() !== ""){
            let p_x = parseInt(xPositionPrincipal[0].value);
            let p_y = parseInt(yPositionPrincipal[0].value);
            let p_c = parseFloat(sizeChargePrincipal[0].value);
            let x = parseInt(xPositions[i].value);
            let y = parseInt(yPositions[i].value);
            let c = parseFloat(charges[i].value);

            hypotenuse = Math.sqrt(Math.pow(p_x - x, 2) + Math.pow(p_y - y, 2));
            let F_e = K * p_c * c / Math.pow(hypotenuse,2);

            var c_x = Math.abs(p_x-x);
            var angle = Math.acos(c_x/hypotenuse);

            FuerzaElectrica_x += F_e * Math.cos(angle);
            FuerzaElectrica_y += F_e * Math.sin(angle);
        }
    }

    FuerzaElectrica_t = Math.sqrt(Math.pow(FuerzaElectrica_x,2) + Math.pow(FuerzaElectrica_y, 2));
    Resultado.innerHTML = `Fuerza electrica resultante ${FuerzaElectrica_t}N`;
    Resultado.style.display = 'block';

}


