<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     Tienes una idea de negocio y necesitas ponerla a prueba:<br>
      Echa un vistazo a nuestra sección:
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Project Manager</a>.
    </p>
    <h3>¿Qué formato es el que me conviene?</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Autónomo</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Sociedad</a></li>
    </ul>
    <h3>¿Qué presencia tendrás Online? </h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Página web</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Tienda</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Redes Sociales</a></li>
      
    </ul>
    <h3>Financiación</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Subvenciones</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Bancos</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Business Angel</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Autofinanciación</a></li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
