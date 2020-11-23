<template>

<div class="post">
  <span class="post-author">
    <span class="post-author-info">
      <img :src="post.author.avatar"/>
      <small>{{post.author.firstname}} {{post.author.lastname}}</small>
    </span>
    <small>{{post.createTime}}</small>
  </span>
  <div v-if="post.media != null" class="post-image">
    <img  :src="post.media.url" v-if="post.media.type == 'image'"/>
    <video controls v-if="post.media.type == 'video'">
      <source type="video/mp4" :src="post.media.url">
    </video>
  </div>
  <div class="post-title">
    <h3>{{post.text}}</h3>
  </div>
  <div class="post-actions">
    <button type="button" class="like-button" v-bind:class="{ liked: isLiked}" v-on:click="isLiked = !isLiked">{{post.likes}}</button>
  </div>
</div>

</template>

<script>
export default {
  name: 'Post',
  props: ["post"],
  data() {
    return {
      isLiked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}


.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;

}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
    float: left;
    
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
    text-align: left;
    overflow: hidden;
    width: 95%;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
    overflow: hidden;
}

.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
    float: left;
}

.like-button.liked {
    background-color: #01579b;
}


</style>
