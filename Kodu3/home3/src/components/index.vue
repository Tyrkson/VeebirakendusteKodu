<template>
  <div class="">
    sjdaljdsklajdklajkldja
    <Navbar/>
    <Posts/>
  </div>
</template>

<script>

import Navbar from './navbar';
import Posts from './posts';

export default {
  name: 'Index',
  components: {
    Navbar,
    Posts
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
