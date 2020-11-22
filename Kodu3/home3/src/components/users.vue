//Siia tuleb browse.html põhi ehk ilma nende kasutaja kastideta
<template>
  <body>
    <section class="main-container" >
      <div class="users" v-bind:key="user.id" v-for="(user, i) in users">
        <div class="test" v-if="i == 0 || i % 2 == 0">
          <User class="left" v-bind:user="users[i]" />
          <User class="right" v-if="users.length > i + 1" v-bind:user="users[i+1]" />
        </div>
      </div>
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
    max-height: 100%;
    margin: auto auto;
    padding: 40px 15px 15px 15px;
    background-color: #ffffff;
}

.users {
  display: flex;
}

.users > .test {
  flex: 1 1 50%;
  margin: 0%;
}

.test > .right {
  float: right;
}

.test > .left {
  float: left;
}

</style>
