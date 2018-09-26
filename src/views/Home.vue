<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <!-- Main landing Page content starts here!-->
    <div class="container" style="height:50%;">
      <div class="row">
          <div class="column">
            <img 
              src="../assets/ZoraWeb.svg" 
              alt="ZoraBOT"
              style="width: 100%;" />
          </div>
      </div>
    </div>
    <div class="content">
      <div class="container slide-in-elliptic-top-fwd">
        <div class="row">
          <div class="five columns centertext">
            <h1>This is Zora BOT</h1>
            <button class="sp-btn" onclick="window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"> Invite Me!</button>
          </div>
          <div class="seven columns">
            <p style="padding-top: 32px;">
            Zora is the bot for everyone! With open source code, we have created a bot anyone can adapt to their own needs. Whether you just need a simple music bot, or you want to browse reddit and stackoverflow. Zora is the bot for you!
            </p>
            <hr>
            <p>
              Zora was created by <a href="http://www.averywagar.com/">Avery Wagar</a> and <a href="https://nlaha.com">Nathan Laha</a><br><br>
              <button class="sp-btn-s" onclick="window.open('https://github.com/ajmwagar/discordbot')">Source Code</button>
              <!-- Begin Commands -->
              <h3>Commands:</h3>
              <Commands/>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ZFooter btntext="Dashboard" btnurl="api/discord/login"/>
    <!-- Main Landing Page content ends here -->
  </div>

</template>

<script>
import ZFooter from "../components/zfooter.vue";
import Commands from "../components/commands.vue";

// paralax background
(function() {
  var parallax = document.querySelectorAll("body"),
    speed = 0.5;
  [].slice.call(parallax).forEach(function(el, i) {
    var windowYOffset = window.pageYOffset,
      elBackgrounPos = "50% " + windowYOffset * speed + "px";

    el.style.backgroundPosition = elBackgrounPos;
  });
  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i) {
      var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + windowYOffset * speed + "px";

      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();
// vue stuff
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    }
  },
  name: "app",
  components: { ZFooter, Commands },
  data() {
    return {
      isClosed: false,
      dshow: true,
      btisClosed: false
    };
  },
  methods: {
    login: function(event) {
      // TODO auth with discord and generate dashboard
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
