//Objeto literal en JS
var literal = {
    nombre: 'Gonza',
    decirHola: function(msn){
        console.log(this, 'this en método hola');
        console.log('Hola ' + this.nombre + ' ' + msn );
    },
    gusta: {
        leer: ['revistas', 'libros'],
        comer: ['pollo', 'arroz']
    }
};

console.log(typeof literal, 'que es?');

literal.decirHola('loco');