window.onload = init();

function init(){
    var resultado = 4;
    var m = true;
    var int;
    while(m){ 
        int=prompt("cuanto es 2 + 2? ");

        if (int == resultado){
            alert("es correcto");
            m = false;
        }
        else{
            alert("fallaste intentalo de nuevo");
        }

    }
}