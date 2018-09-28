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
            Welcome to the dashboard! Here you can easily conifgure Zora bot for your server. As well as view helpful statistics!<br>
            <h2>Select a server:</h2>
            <form>
              <select v-model="selectedValue" class="serverSelect">
                  <option class="serverlistitem" disabled value="">Please select one</option>
                  <option class="serverlistitem" v-for="item in filters" :value="item">{{item}}</option>
              </select>
            <br>
            <hr>
              <span class="toggleitem">Music Bot:</span>
              <div class="toggle slide">
                <input id="c" type="checkbox" />
                <label for="c">
                  <div class="card slide"></div>    
                </label>
              </div>

              <br>

              <span class="toggleitem">Welcome Messages:</span>
              <div class="toggle slide">
                <input id="d" type="checkbox" />
                <label for="d">
                  <div class="card slide"></div>    
                </label>
              </div>

              <br>

              <span class="toggleitem">Prefix:</span>
              <input style="float: right; width: 75px;" class="serverSelect"></input>

              <br>

              <span class="toggleitem">Modlog Channel:</span>
              <select v-model="selectedValue" class="serverSelect" style="float: right; width: 77px;">
                <option class="serverlistitem" disabled value="">Please select one</option>
                <option class="serverlistitem" v-for="item in filters" :value="item">{{item}}</option>
              </select>

              <br>
              <br>
              <input type="submit" style="float: right; font-size: 22px;" class="sp-btn" value="Save"></input>
              <br>
              <br>
              <h3>Stats:</h3>
                <p class="Serveritem">
                  players: {{playercount}}
                </p>
              </p>
            </form>
            <hr>
          </div>
        </div>
      </div>
    </div>
    <ZFooter btntext="Logout" btnurl="home"/>
    <!-- Main Landing Page content ends here -->
  </div>

</template>

<script>
import ZFooter from "../components/zfooter.vue";
// vue stuff
export default {
  name: "dash",
  components: { ZFooter },
  props: { filters: Array, selectedValue: String },
  data() {
    return {
      isClosed: false,
      dshow: true,
      btisClosed: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
