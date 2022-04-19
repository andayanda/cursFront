const app = new Vue({  
    el: '#databinding',
                 data() { 
                    return {author: "Manz"}             
                    },             
                    mounted() {
                        console.log("El componente " + this.$options.el + " ha sido montado.");
                    }
                });