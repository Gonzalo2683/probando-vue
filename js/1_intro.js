Vue.component('lista-tareas', {
    template: '#lista-task',
    props: ['tareas'],
    data: function(){
        return {
            editandoTarea: null
        }
    },
    methods: {
        eliminarTarea: function(tarea){
            this.tareas.splice(tarea,1);
        },
        editarTarea: function(){

        }
    }
});

Vue.component('nueva-tarea', {
    template: '#new-task',
    data: function () {
        return {
            titulo: '',
            descripcion: ''
        }
    },
    methods: {
        addTarea: function () {
            if (this.validaTarea()) {
                this.$emit('addnuevatarea', {
                    title: this.titulo,
                    description: this.descripcion,
                    complete: false
                });
            } else {
                alert('Algo falta');
                return;
            }
        },
        validaTarea: function () {
            return this.titulo != "" && this.descripcion != "" ? true : false;
        }
    }
});

new Vue({
    el: "#app",
    data: {
        tareas: [
            {
                "id": 1,
                "title": "Assistant Manager",
                "complete": true,
                "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum,"
            }, 
            {
                "id": 2,
                "title": "Payment Adjustment Coordinator",
                "complete": false,
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
            }, 
            {
                "id": 3,
                "title": "Software Consultant",
                "complete": false,
                "description": "Phasellus id sapien in sapien iaculis congue. Hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc."
            },
             {
                "id": 4,
                "title": "Statistician I",
                "complete": false,
                "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
            }
        ]
    },
    methods: {
        pleaseAgregaTarea: function (datos) {
            console.log(datos);
            this.tareas.unshift(datos);
        }
    }
});