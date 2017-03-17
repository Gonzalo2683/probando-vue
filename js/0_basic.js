
new Vue({
    el: "#app",
    data: {
        mensaje: 'Hola mundo'
    },
    methods: {
        cambiatitulo: function(){
            this.mensaje = "Nuevo mensaje";
        },
        ejecuta: function(aa){
            console.log(aa.target.value);
        }
    },
    computed: {
        inversotext: function(){
            return this.mensaje.split('').reverse().join('');
        }
    }
});