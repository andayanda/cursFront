<template>
  <div class="about">
    <h1>Chistes de Chuck Norris</h1>
    <h2>Página con chistes de queso</h2>
    <section v-if="errored">
      {{txtError}}
      error

    </section>
    <section v-else>

      <b-list-group>
        <b-list-group-item v-for="item in acudits" :key="item.id">
          {{ item.value }}</b-list-group-item
        >
      </b-list-group>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: null,
      acudits: [],
      errored: false,
      txtError:""
    };
  },
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/search?query=chees")
      .then((response) => (this.acudits = response.data.result))
      .catch((error) => {
        this.errored = true;
        this.txtError= error.message
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("El servidor respon amb missatge d'error:");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error en la request");
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("hi ha algun problema amb la request");
          console.log("Error", error.message);
        }
        console.log("Hi ha hagut un error en la configuració");
        console.log(error.config);
      });
  },
};
</script>

