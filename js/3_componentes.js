Vue.component('notificador', {
    template: '#notificador',
    props: ['contfinalizados'],
    data: function(){
        return {
            contadores: this.contfinalizados
        }
    },
    methods: {

    }
});

Vue.component('contador', {
    template: '#contador',
    props: ['limit'],
    data: function(){

        return {
            conteo: 0
        }
        
    },
    methods: {
        incrementar: function(){
            if(this.conteo == this.limit){
                alert('El limite ' + this.limit + ' es lo permitido para este contador');
                this.$emit('fin', this.limit);
                return;
            }else {
                this.conteo +=1;
            }
            
        }
    }
})

new Vue({
    el: '#main',
    data: {
        contadores: []
    },
    methods: {
        sendNotify: function(limit){
            this.contadores.unshift(limit);
        }
    }
});