
// SIMULADOR INTERACTIVO DE PRESUPUESTO PC GAMER
// Preguntar el nombre y darle la bienvenida
function saludar(){
let nombre = prompt("Ingrese su nombre");
alert("Hola " + nombre + " bienvenido a CompuNet, tu presupuesto de PC ideal! ");}


// Solicitar al usuario si prefiere AMD o Intel
let marcaProcesador = prompt(nombre + " Empezemos por la placa de video ¿Preferis AMD o Intel?");
// Convertir a minúsculas para facilitar la comparación
marcaProcesador = marcaProcesador.toLowerCase();

while (marcaProcesador != "amd" && marcaProcesador != "intel") {
    marcaProcesador = prompt("¿Preferis AMD o Intel?");
    marcaProcesador = marcaProcesador.toLowerCase();
        alert("Marca de procesador no válida. Por favor, elige entre AMD o Intel.");
    } 

//Mostrar opciones de procesadores según la marca elegida
let procesadorElegido;
if (marcaProcesador === "amd") {
    procesadorElegido = prompt("Elige un procesador AMD:\n1. AMD Ryzen 5 4600g 8mb 3.7ghz ($124.158)\n2.AMD Ryzen 7 5700g 8 Núcleos 4.6ghz ($234.818) \n3. AMD Ryzen 9 7950X3D 16 núcleos y 5.7GHz ($929.000)");
} else if (marcaProcesador === "intel") {
    procesadorElegido = prompt("Elige un procesador Intel:\n1. Core i5 ($138612)\n2. Core i7 ($456.189)\n3. Core i9 ($831.998)");
} else {
    alert("Marca de procesador no válida");
}

while (procesadorElegido != 1 && procesadorElegido != 2 && procesadorElegido != 3) {
    if (marcaProcesador === "amd") {
        procesadorElegido = prompt("Elige un procesador AMD:\n1. AMD Ryzen 5 4600g 8mb 3.7ghz ($124.158)\n2.AMD Ryzen 7 5700g 8 Núcleos 4.6ghz ($234.818) \n3. AMD Ryzen 9 7950X3D 16 núcleos y 5.7GHz ($929.000)");
    } else if (marcaProcesador === "intel") {
        procesadorElegido = prompt("Elige un procesador Intel:\n1. Core i5 ($138612)\n2. Core i7 ($456.189)\n3. Core i9 ($831.998)");
    } else {
        alert("Marca de procesador no válida");
    }

}


//Mostrar opciones de placas de video
let placaVideoElegida = (prompt("Elige una placa de video:\n1. Nvidia GTX 1660 ($160.489)\n2. Nvidia RTX 3070 ($415.514)\n3. AMD Radeon RX 6800 ($609900)"));
while (placaVideoElegida != 1 && placaVideoElegida != 2 && placaVideoElegida != 3) {
    placaVideoElegida = prompt("Elige una placa de video:\n1. Nvidia GTX 1660 ($160.489)\n2. Nvidia RTX 3070 ($415.514)\n3. AMD Radeon RX 6800 ($609900)");
}

//Mostrar opciones de Tarjeta Madre
let tarjetaMadreElegida = prompt("Elige una Tajeta madre:\n1. Asus A320m-k Amd A320 ($84.999)\n2. Gigabyte H610m-s2h Ddr4 ($146.041)");

while (tarjetaMadreElegida != 1 && tarjetaMadreElegida != 2) {
    tarjetaMadreElegida = prompt("Elige una Tajeta madre:\n1. Asus A320m-k Amd A320 ($84.999)\n2. Gigabyte H610m-s2h Ddr4 ($146.041)");
}
//Mostrar opciones de Memorias Ram
let memoriaRamElegida = prompt("Elige una Memoria Ram:\n1. RAM Fury Beast 8GB 1 Kingston ($21.714)\n2. RAM Crucial 16GB ($30.199)");

while (memoriaRamElegida != 1 && memoriaRamElegida != 2) {
    memoriaRamElegida = prompt("Elige una Memoria Ram:\n1. RAM Fury Beast 8GB 1 Kingston ($21.714)\n2. RAM Crucial 16GB ($30.199)");
}

//Mostrar opciones de Disco Solidos
let discoSolidoElegida = prompt("Elige un disco solido:\n1. 500GB Kingston($24.662)\n2. 1tb Kingston($34.000)");
while (discoSolidoElegida != 1 && discoSolidoElegida != 2) {
    discoSolidoElegida = prompt("Elige un disco solido:\n1. 500GB Kingston($24.662)\n2. 1tb Kingston($34.000)");
}



//Calcular costo total de los componentes elegidos
let costoTotal = 0;

// Calcular el costo de procesador
if (marcaProcesador === "amd") {
    if (procesadorElegido === "1") {
        costoTotal += 124158; // Precio del Ryzen 5
    } else if (procesadorElegido === "2") {
        costoTotal += 234818; // Precio del Ryzen 7
    } else if (procesadorElegido === "3") {
        costoTotal += 929000; // Precio del Ryzen 9
    }
} else if (marcaProcesador === "intel") {
    if (procesadorElegido === "1") {
        costoTotal += 138612; // Precio del Intel i5
    } else if (procesadorElegido === "2") {
        costoTotal += 456189; // Precio Intel Core i7
    } else if (procesadorElegido === "3") {
        costoTotal += 831998; // Intel Core i9
    }
}
console.log(costoTotal);

// Calcular el costo de la placa de video
if (placaVideoElegida === "1") {
    costoTotal += 160489; // Precio de Nvidia GTX 1660
} else if (placaVideoElegida === "2") {
    costoTotal += 415514; // Precio de Nvidia RTX 3070
} else if (placaVideoElegida === "3") {
    costoTotal += 609900; // Precio de AMD Radeon RX 6800
}

console.log(costoTotal);
// Calcular el costo de la tarjeta madre
if (tarjetaMadreElegida === "1") {
    costoTotal += 84999; //  Precio Asus A320m-k Amd A320
} else (tarjetaMadreElegida === "2"); {
    costoTotal += 146041; // Precio Gigabyte H610m-s2h Ddr4
}

// Calcular el costo de la Memoria Ram
if (memoriaRamElegida === "1") {
    costoTotal += 21714; // Precio RAM Fury Beast 8GB 1 Kingston
} else (memoriaRamElegida === "2"); {
    costoTotal += 30199; // RAM Crucial 16GB
}
console.log(costoTotal);
// Calcular el costo del disco solido
if (discoSolidoElegida === "1") {
    costoTotal += 24662; // 500GB Kingston
} else (discoSolidoElegida === "2"); {
    costoTotal += 34000; // 1tb Kingston
}
console.log(costoTotal);

//Aplicar descuento si es cliente
let esCliente = prompt("¿Eres cliente? \n1.Si \n2.No ");

if (esCliente === 1) {
    costoTotal *= 0.9; // Aplicar descuento del 10%
}

//Calcular el IVA (21%)
let iva = costoTotal * 0.21;

// Calcular el costo total final
let costoTotalFinal = costoTotal + iva;

//Mostrar el resultado al usuario
alert("El costo total sin Iva es: $" + costoTotal.toFixed(2) + "\nEl costo total final con iva incluido es: $" + costoTotalFinal.toFixed(2))
