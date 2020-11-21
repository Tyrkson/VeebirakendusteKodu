<template>
<html lang="en" dir="ltr">
  <body>
    <Navbar/>
    <Users/>
  </body>
</html>
</template>

<script>

import Navbar from './navbar';
import Users from './users';

export default {
  name: 'Browse',
  components: {
    Navbar,
    Users
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}
</style>