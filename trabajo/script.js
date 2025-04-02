console.log("Funcionando correctamente...");

function sumarNPares() {
    let n = parseInt(prompt("Ingrese cuántos números pares desea sumar:"));
    let suma = 0;
    let numerosPares = []; // Array para almacenar los números ingresados
    let count = 0;

    while (count < n) {
        let num = parseInt(prompt("Ingrese un número par:"));

        if (!isNaN(num)) { // Verifica si es un número válido
            if (num % 2 === 0) { // Verifica si es par
                numerosPares.push(num); // Guarda en el array
                suma += num; // Suma el número
                count++; // Incrementa el contador
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


