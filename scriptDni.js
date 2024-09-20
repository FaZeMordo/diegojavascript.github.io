function calcular(){

    var numdni = Number(document.getElementById("NoDni").value);
    console.log(numdni);

    var letra = document.getElementById("LetraDni").value;
    console.log(letra);

    var calculoLetra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    console.log(calculoLetra);

    var residuo;

    if(numdni < 0 || numdni > 99999999){

        alert("Introduzca un numero valido");
        

    } else{

        residuo = numdni%23;

         console.log(residuo);
         console.log(calculoLetra[residuo]);

        var letraObtenida = (calculoLetra[residuo]);

        if(letraObtenida == letra){

            alert("La letra es correcta")

        } else{

            alert("Las letras no coinciden")

        }

       
                

    }

}



