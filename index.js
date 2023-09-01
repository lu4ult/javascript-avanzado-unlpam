let contactos = {
    contactos: [],

    mostrarCantidadContactos: function () {
        return this.contactos.length
    },

    agregarContacto: function (nombre, apellido, codigoArea, numero, email) {
        let nuevoContacto = {
            nombre: nombre,
            apellido: apellido,
            codigoArea: parseInt(codigoArea),
            numero: parseInt(numero),
            email: email,
        }
        this.contactos.push(nuevoContacto);
    },

    encontrarContactoPorNombre: function (nombreBuscado) {
        let hallazgos = this.contactos.filter(e => e.nombre.toLowerCase().indexOf(nombreBuscado.toLowerCase()) >= 0);
        return [...hallazgos];
    },

    //TODO: continuar...
    actualizarContacto: function () {

    },

    eliminarContacto: function () {

    }
}

contactos.agregarContacto('Lautaro', 'Tourn', '2954', 692293, 'lautatourn@gmail.com');
contactos.agregarContacto('Pepito');
contactos.agregarContacto('John', 'Lennon', '011', '123456');


console.log(contactos)
console.log(`Cantidad de contactos: ${contactos.mostrarCantidadContactos()}`)
console.log(contactos.encontrarContactoPorNombre('John'));