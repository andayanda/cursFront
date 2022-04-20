const app = new Vue({
    el: "#my-app",
    data: {      
      name: "Manuel Lorenz",
      phone:"01234 5678 991" ,
      email: "manuel@localhost.com",
      show: true,
    },
    methods: {
      toggleMostrar: function () {

        console.log("estado inicial:  " + this.mostrar);
        //funcionamiento del boton
        // this.mostrar = !this.mostrar;
        // console.log("estado apagado:  " + this.mostrar)
      }
    }
    
  });