new Vue({
    el: '#todo',
    data: {
        todos: [{
                completado: false,
                title: 'Comprar pan'
            },
            {
                completado: false,
                title: 'Aprender vue'
            },
            {
                completado: false,
                title: 'Salir a correr'
            }
        ],
        nuevoTodo: ''
    },
    computed: {
        calcularTotal: function () {
            console.log('Calcular total');
            return this.todos.filter(function (todo) {
                return todo.completado == true;
            }).length;
        },
        todosCompletados: function () {
            console.log('Todos completados');
            return this.todos.filter(function (todo) {
                return todo.completado == true;
            });
        },
        todosPorCompletar: function () {
            console.log('Por completar');
            return this.todos.filter(function (todo) {
                return todo.completado == false;
            });
        }
    },
    methods: {
        agregaTodo: function () {
            this.todos.unshift({
                title: this.nuevoTodo,
                completado: false
            });
            this.nuevoTodo = '';
        },
        eliminarTodo: function(index){
            this.todos.splice(index, 1);
        }
    }
});