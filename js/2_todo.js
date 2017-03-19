new Vue({
    el: '#todo',
    data: {
        todos: [
            { completado: false, title: 'Comprar pan'},
            { completado: false, title: 'Aprender vue'},
            { completado: false, title: 'Salir a correr'}
        ],
        nuevoTodo: ''
    },
    computed: {
        calcularTotal: function(){
            return this.todos.filter(function(todo){
                return todo.completado == true;
            }).length;
        }
    },
    methods: {
        agregaTodo: function(){
            this.todos.unshift({title: this.nuevoTodo, completado: false});
            this.nuevoTodo = '';
        }
    }
});