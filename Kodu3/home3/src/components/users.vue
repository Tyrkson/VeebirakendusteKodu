//Siia tuleb browse.html põhi ehk ilma nende kasutaja kastideta
<template>
  <body>
    <section class="main-container" v-bind:key="user.id" v-for="user in users">
      <User v-bind:user="user" />
    </section>
  </body>
</template>

<script>

import User from './user';
import axios from 'axios';

export default {
  name: 'Users',
  components: {
    User
  },
  data(){
    return {
      users: []
    }
  },
  created(){
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
      .then(res => this.users = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 40px 15px 15px 15px;
    background-color: #ffffff;
}
</style>
