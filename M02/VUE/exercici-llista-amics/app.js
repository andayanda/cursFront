const app = new Vue({
  el: "#app",
//   template: "#ejemplo",
  data: {
    mensaje: "Benvingut a VUE. O no...",
    mostrar: false,
  },
  methods: {
    toggleMostrar: function () {
      // console.log("estado inicial:  " + this.mostrar);
      //funcionamiento del boton
      this.mostrar = !this.mostrar;
      console.log("estado apagado:  " + this.mostrar);
    },
  },
});
