// Datos recolectados
const residuos = [
    6.47,
    18.00,
    5.45,
    10.42,
    8.02,
    16.20,
    5.50,
    11.30,
    9.20,
    10.00
];

const desayunosDiarios = 500;

// Cálculos generales
const total = residuos.reduce((a, b) => a + b, 0);
const promedio = total / residuos.length;

document.getElementById("total").textContent =
    total.toFixed(2) + " kg";

document.getElementById("promedio").textContent =
    promedio.toFixed(2) + " kg";

// Crear tabla
function crearTabla() {
    const tabla = document.getElementById("tablaDatos");

    residuos.forEach((kg, index) => {
        const gramosPorDesayuno =
            (kg * 1000) / desayunosDiarios;

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>Día ${index + 1}</td>
            <td>${desayunosDiarios}</td>
            <td>${kg.toFixed(2)} kg</td>
            <td>${gramosPorDesayuno.toFixed(1)} g</td>
        `;

        tabla.appendChild(fila);
    });
}

// Crear gráfica
function crearGrafica() {
    const grafica = document.getElementById("grafica");
    const maximo = Math.max(...residuos);

    residuos.forEach((kg, index) => {
        const porcentaje = (kg / maximo) * 100;

        const contenedor = document.createElement("div");
        contenedor.className = "barra-contenedor";

        contenedor.innerHTML = `
            <strong>Día ${index + 1}: ${kg.toFixed(2)} kg</strong>
            <div class="barra" style="width:${porcentaje}%">
                ${kg.toFixed(2)} kg
            </div>
        `;

        grafica.appendChild(contenedor);
    });
}

// Simulación
function simular() {
    const cantidad =
        Number(document.getElementById("cantidad").value);

    const kg =
        Number(document.getElementById("residuos").value);

    if (cantidad <= 0 || kg < 0) {
        document.getElementById("resultado").innerHTML =
            "Por favor, introduce valores válidos.";
        return;
    }

    const gramosPorDesayuno =
        (kg * 1000) / cantidad;

    document.getElementById("resultado").innerHTML = `
        <strong>Resultado de la simulación:</strong><br><br>
        Desayunos: ${cantidad}<br>
        Residuos: ${kg.toFixed(2)} kg<br>
        Residuos por desayuno:
        ${gramosPorDesayuno.toFixed(1)} gramos
    `;
}

// Mostrar información de un día
function mostrarDia() {
    const indice =
        Number(document.getElementById("dia").value);

    const kg = residuos[indice];

    const gramos =
        (kg * 1000) / desayunosDiarios;

    document.getElementById("consulta").innerHTML = `
        <strong>Día ${indice + 1}</strong><br><br>
        Se prepararon:
        ${desayunosDiarios} desayunos.<br>
        Desperdicio:
        ${kg.toFixed(2)} kg.<br>
        Desperdicio promedio por desayuno:
        ${gramos.toFixed(1)} gramos.
    `;
}

// Eventos
document.getElementById("botonSimular")
    .addEventListener("click", simular);

document.getElementById("dia")
    .addEventListener("change", mostrarDia);

// Ejecutar funciones
crearTabla();
crearGrafica();
mostrarDia();
