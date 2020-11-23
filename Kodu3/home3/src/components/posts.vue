<template>
  <div class="posts">
    <section class="main-container" v-bind:key="post.id" v-for="post in posts">
        <Post v-bind:post="post" />
    </section>
  </div>
</template>

<script>

import Post from './Post';

export default {
  name: 'Posts',
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch("getPosts")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts {
      padding-top: 20px; 

}
.main-container {
  width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 1px 15px 1px 15px;
    background-color: #ffffff; 
}

</style>
