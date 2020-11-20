<template>
  <div>
    <section class="main-container" v-bind:key="post.id" v-for="post in posts">
      <Post v-bind:post="post" />
    </section>
  </div>
</template>

<script>

import Post from './Post';
import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    Post
  },
  data(){
    return {
      posts: []
    }
  },
  created(){
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
      .then(res => this.posts = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
