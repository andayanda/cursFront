<template>
  <div id="app">
     <b-nav tabs>
    <b-nav-item active to="/">Home</b-nav-item>
    <b-nav-item to="/about">About</b-nav-item>
    <b-nav-item to="/miVista">miVista</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
