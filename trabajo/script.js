console.log("Funcionando correctamente...");

function sumarNPares() {
    let n = parseInt(prompt("Ingrese cuántos números pares desea sumar:"));
    let suma = 0;
    let numerosPares = []; 
    let count = 0;

    while (count < n) {
        let num = parseInt(prompt("Ingrese un número par:"));
        if (!isNaN(num)) { 
            if (num % 2 === 0) { 
                numerosPares.push(num); 
                suma += num; 
                count++; 
            } else {
                alert("El número ingresado no es par. Intente nuevamente.");
            }
        } else {
            alert("Eso no es un número válido. Inténtelo nuevamente.");
        }
    }
    alert(`Los números pares ingresados fueron: ${numerosPares.join(", ")}`);
    alert(`La suma de los números pares es: ${suma}`);
}


