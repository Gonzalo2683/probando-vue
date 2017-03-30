new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola mundo'
    },
    computed: {
        invertir: function(){
            return this.mensaje.split('').reverse().join('');
        }
    },
    methods: {
        cambiaTitle: function(){
            this.mensaje = 'Cambiado!!!!';
        }
    }
});