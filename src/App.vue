<template>
  <div id="app">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    
    <!-- Main content starts here!-->
    <div class="container">
      <div class="row">
          <div class="column">
            <h1 class="landing-title text-pop-up-top">Phoenix</h1>
          </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="five columns centertext">
            <h1>This is Phoenix</h1>
            <button class="sp-btn" onclick="window.location.href='https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot'"> Invite Me!</button>
          </div>
          <div class="seven columns">
            <p style="padding-top: 32px;">
            Phoenix is the bot for everyone! With open source code, we have created a bot anyone can adapt to their own needs. Whether you just need a simple music bot, or you want to browse reddit and stackoverflow. Phoenix is the bot for you!
            </p>
            <hr>
            <p>
              Phoenix was created by <a href="http://www.averywagar.com/">Avery Wagar</a> and <a href="https://nlaha.com">Nathan Laha</a><br><br>
              <button class="sp-btn-s" onclick="window.location.href='https://github.com/ajmwagar/discordbot'">Source Code</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="closebtn" v-on:click="isClosed = !isClosed" ><i class="material-icons">keyboard_arrow_down</i></button>
    <footer class="mainfooter" v-bind:class="{ closed: isClosed }">
      <button class="sp-btn-s" v-bind:class="{ closed: isClosed }">Dashboard</button>
    </footer>
  </div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isClosed: false,
      btisClosed: false
    };
  }
};
</script>

