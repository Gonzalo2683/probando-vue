new Vue({
    el: '#todo',
    data: {
        todos: [
            {completado: false, title: 'Comprar pan'},
            {completado: false, title: 'Aprender vue'},
            {completado: false, title: 'Salir a correr'}
        ],
        nuevoTodo: ''
    },
    computed: {
        calcularTotal: function () {

            return this.todos.filter(function (todo) {
                return todo.completado === true;
            }).length;


            // return this.todos.filter(function (todo) {
            //     return todo.completado === true;
            // }).length;

            // var contador = 0;
            // for (var i=0; i < this.todos.length; i++){
            //     if(this.todos[i].completado === true){
            //         contador++;
            //     }
            // }
            // return contador;

            //return this.todosCompletados.length;
        },
        todosCompletados: function () {
            return this.todos.filter(function (todo) {
                return todo.completado === true;
            });
        },
        todosPorCompletar: function () {
            return this.todos.filter(function (todo) {
                return todo.completado === false;
            });
        }
    },
    methods: {
        agregaTodo: function () {
            if (this.validaTodo()) {
                var texto = this.nuevoTodo.trim();
                this.todos.unshift({
                    title: texto,
                    completado: false
                });
                this.nuevoTodo = '';
            }else {
                alert('El todo está vacío!!!');
            }

        },
        eliminarTodo: function (todo) {
            var currentTodo = this.todos.indexOf(todo);
            this.todos.splice(currentTodo, 1);
        },
        validaTodo: function () {
            return this.nuevoTodo !== '';
        }
    }
});