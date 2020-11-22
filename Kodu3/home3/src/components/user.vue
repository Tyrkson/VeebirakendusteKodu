<template>
  <div class="user">
    <img :src="user.avatar" />
    <h2>{{user.firstname | capitalize}} {{user.lastname | capitalize}}</h2>
    <button class="follow-button" v-bind:class="{ followed: isFollowed}" v-on:click="isFollowed = !isFollowed">Follow</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ["user"],
  data() {
    return {
      isFollowed: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
    width: 45%;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;

}
.user img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.user h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
    border: 2px solid;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>
