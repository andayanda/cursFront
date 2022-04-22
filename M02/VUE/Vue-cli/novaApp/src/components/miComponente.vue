<template>
    <div class="mio">  
         <h1>{{ msg }}</h1>
        <!-- <button @click='onAdd2'>Boto components: {{count}}</button> -->

    </div>
</template>
<script>
export default {
  name: 'miComponente',
  props: {
    msg: String
  }
}
// data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     onAdd2() {
//       this.count += 1;
//     },
//   },
// });

</script>
