<template>
  <div>
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

</style>
