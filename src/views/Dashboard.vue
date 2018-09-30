<template>
  <div id="dashboard">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <!-- Main landing Page content starts here!-->
    <div class="content" style="min-height: 200px; box-shadow: 0px -60px 00px #c55b2a;">
      <div class="container slide-in-elliptic-top-fwd">
        <div class="row">
          <div class="five columns centertext">
            <h1>Dashboard</h1>
            <button class="sp-btn" onclick="window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"> Invite Me!</button>
          </div>
          <div class="seven columns" style="text-align: left;">
            <p style="padding-top: 32px;">
            Welcome to the dashboard! Here you can easily configure Zora bot for your server. As well as view helpful statistics!<br>
            <h2>Select a server:</h2>
              <select v-model="selectedValue" v-on:change="onChange" class="serverSelect">
                  <option class="serverlistitem" v-for="item in filters" :value="item.id">{{item.name}}</option>
              </select>
            <br>
            <hr>
              <span class="toggleitem">Music Bot:</span>
              <div class="toggle slide">
                <input v-model="MusicBotState" id="c" type="checkbox" />
                <label for="c">
                  <div class="card slide"></div>    
                </label>
              </div>

              <br>

              <span class="toggleitem">Welcome Messages:</span>
              <div class="toggle slide">
                <input v-model="WelcomeMessageState" id="d" type="checkbox" />
                <label for="d">
                  <div class="card slide"></div>    
                </label>
              </div>

              <br>

              <span class="toggleitem">Modlog:</span>
              <div class="toggle slide">
                <input v-model="ModlogState" id="e" type="checkbox" />
                <label for="e">
                  <div class="card slide"></div>    
                </label>
              </div>

              <br>

              <span class="toggleitem">Prefix:</span>
              <input v-model="Prefix" style="float: right; width: 75px;" class="modSelect"></input>

              <br>

              <span class="toggleitem">Modlog Channel:</span>
              <input v-model="Modlog" style="float: right; width: 75px;" class="modSelect"></input>

              <br>
              <br>
              <button v-on:click="Save" style="float: right; font-size: 22px;" class="sp-btn">Save</button>
              <br>
              <br>
              <h3>Stats:</h3>
                <p class="Serveritem">
                  players: {{ playercount }}
                </p>
              </p>
            <hr>
          </div>
        </div>
      </div>
    </div>
    <ZFooter btntext="Logout" btnurl="/"/>
    <!-- Main Landing Page content ends here -->
  </div>

</template>

<script>
import ZFooter from "../components/zfooter.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSocketio from "vue-socket.io";

// vue stuff
export default {
  name: "dash",
  components: { ZFooter },
  props: {
    playercount: Number,
    filters: Array,
    selectedValue: String,
    Prefix: String,
    Modlog: String,
    MusicBotState: Boolean,
    WelcomeMessageState: Boolean,
    ModlogState: Boolean
  },
  data() {
    return {
      isClosed: false,
      dshow: true,
      btisClosed: false
    };
  },
  sockets: {
    connect: function() {
      console.log("Socket Connected!");
    },
    updateServers: function(ownedservers) {
      this.filters = ownedservers;
    },
    updateValues: function(values) {
      this.Modlog = values.channel;
      this.Prefix = values.prefix;
      this.MusicBotState = !values.musicstate;
      this.WelcomeMessageState = !values.welcomestate;
      this.ModlogState = !values.welcomestate;
      this.playercount = values.playercount;
    }
  },
  mounted() {},
  methods: {
    onChange: function(event) {
      var token = this.$route.query.token;
      this.$socket.emit("getChannels", token, this.selectedValue);
    },
    Save: function(event) {
      var token = this.$route.query.token;
      var newconfig = {
        prefix: this.Prefix,
        modlogChannel: this.Modlog,
        welcomes: !this.WelcomeMessageState,
        modules: {
          music: !this.MusicBotState,
          modlog: !this.ModlogState
        }
      };
      this.$socket.emit("SaveCFG", token, this.selectedValue, newconfig);
    }
  },
  beforeMount() {
    var token = this.$route.query.token;
    this.$socket.emit("getServers", token);
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
