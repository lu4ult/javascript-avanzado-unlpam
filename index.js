let alumnos = [];

class Alumno {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;

        this.regular = true;
    }
}

function actualizarAlumnos() {
    if (alumnos.length === 0) {
        let alumnosContainer = document.getElementById('alumnosContainer');
        alumnosContainer.innerHTML = '<li>Agregue el primer alumno!</li>';
        return;
    }

    let alumnosContainer = document.getElementById('alumnosContainer');
    alumnosContainer.innerHTML = '';
    alumnos.forEach((alumno, indice) => {
        let plantillas = `<li>${alumno.nombre}: ${alumno.notas[0]}, ${alumno.notas[1]}, ${alumno.notas[2]} <button onclick="borrar(${indice})">X</button></li>`;
        alumnosContainer.innerHTML += plantillas;
    });

    if (alumnos.length >= 3) {
        document.getElementById('agregar').disabled = true;
    }
    else {
        document.getElementById('agregar').disabled = false;
    }
}

function borrar(indice) {
    alumnos.splice(indice, 1);
    actualizarAlumnos();
}


function handleForm(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let nota1 = document.getElementById('nota1').value || 0;
    let nota2 = document.getElementById('nota2').value || 0;
    let nota3 = document.getElementById('nota3').value || 0;

    // let nuevoAlumno = {
    //     nombre: nombre,
    //     notas: [nota1, nota2, nota3],
    // };
    let nuevoAlumno = new Alumno(nombre, [nota1, nota2, nota3]);

    alumnos.push(nuevoAlumno);
    actualizarAlumnos();
}

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    handleForm(e);
});

window.onload = () => {
    actualizarAlumnos();
}