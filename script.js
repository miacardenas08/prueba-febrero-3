var alumnos = [
    { nombre: "Fabricio Piacenza", nota: 6 },
    { nombre: "Mia Cardenas", nota: 8 },
    { nombre: "Martina Semper", nota: 9 },
    { nombre: "Ramiro Gette", nota: 7 },
    { nombre: "Facundo Pestana", nota: 10 }
];

console.log("Lista de Alumnos:");
console.log(alumnos);

function mostrarNota() {
    var nombre = prompt("Ingrese el nombre del estudiante:");
    if (nombre) {
        var encontrado = true;
        for (var i = 0; i < alumnos.length; i++) {
            if (alumnos.nombre.toLowerCase() === nombre.toLowerCase()) {
                console.log(alumnos.nombre + ": " + alumnos.nota);
                encontrado = true;
                break;
            }
        }
        }
    }
        
    
mostrarNota();
    