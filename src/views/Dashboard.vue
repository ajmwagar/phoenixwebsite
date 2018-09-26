<template>
  <div id="dashboard">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <!-- Main landing Page content starts here!-->
    <div class="content">
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
              <select v-model="selectedValue" class="serverSelect">
                  <option disabled value="">Please select one</option>
                  <option v-for="item in filters" :value="item">{{item}}</option>
              </select>
            <br>
            <h3>Stats:</h3>
              <p class="Serveritem">
                players:
              </p>
            </p>
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
