<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <miComponente msg="Esto viene de mi componente"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import miComponente from '@/components/miComponente.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    miComponente
  }
}
</script>
