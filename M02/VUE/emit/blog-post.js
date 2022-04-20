//el componente
Vue.component("blog-post", {
  props: ["post"],
  data: function () {
    return {
      valor: 1,
    };
  },
  template: `
    <div class="blog-post">
    <h3>{{ post.title }}</h3>
    Valor del texto <input v-model="valor"> 
    <button v-on:click="enviarpadre()"> Agrandar texto
    //opcion Inline: <button v-on:click="$emit('enlarge-text', valor)"> XXXX </button>
</button>

    </div>
    `,
    methods: {
        enviarpadre:function(){
            this.$emit('enlarge-text', this.valor);
          

        }
    },
});
