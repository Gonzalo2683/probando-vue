//Objeto literal en JS
var literal = {
    nombre: 'Gonza',
    decirHola: function(msn){
        alert('Hola ' + this.nombre + ' ' + msn );
    },
    gusta: {
        leer: ['revistas', 'libros'],
        comer: ['pollo', 'arroz']
    }
};

var otroObject = new Object();

otroObject.name = 'Pedro';
otroObject.decirHola = function(msn){
    alert(this.name + 'desde otro'+ msn);
}
otroObject.gusta = {
        leer: ['revistas', 'libros'],
        comer: ['pollo', 'arroz']
    }
console.log(otroObject, 'otro object');
console.log(literal, 'literal');

console.log(typeof literal);

literal.decirHola('como estas!!');
otroObject.decirHola('object')
console.log(literal.gusta.leer[0]);
console.log(otroObject.gusta.leer[1]);