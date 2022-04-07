const app = new Vue({
  el: "#my-app",
  data: {
    name: "Hola classe, aixo es un exemple de COMPONENT",
    count: 0,
    firstName: "Carmela",
    lastName: "Espinola",
  },
  methods: {
    onAdd() {
      this.count += 1;
    },
  },
});
