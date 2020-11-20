<template>
  <header>
  <nav>
    <div class="logo-container">
      <img src="../assets/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img class="avatar">
      <div class="drop-down-container">
        <span id="user-name">John Doe</span>
        <span id="user-email"></span>
        <span class="separator"></span>
        <span>
          <a href="browse.html">Browse</a>
        </span>
        <span class="separator"></span>
        <span>
          <a href="login.html">Log Out</a>
        </span>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
    display: none;
}
.drop-down-container span{
    display: block;
}
.drop-down-container span.separator{
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}
</style>
