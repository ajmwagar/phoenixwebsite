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
          <div class="five columns centertext statusheader">
            <h1>This is Zora BOT</h1>
            <button class="sp-btn" onclick="window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"> Invite Me!</button>
            <br>
            <hr>
            <a href="https://discordbots.org/bot/478616471640080395" >
              <img src="https://discordbots.org/api/widget/478616471640080395.svg" alt="Zora" />
            </a>
          </div>
          <div class="seven columns">
            <p style="padding-top: 32px;">
            Zora is the bot for everyone! With open source code, we have created a bot anyone can adapt to their own needs. Whether you just need a simple music bot, or you want to browse reddit and stackoverflow. Zora is the bot for you!
            </p>
            <hr>
            <p>
              Zora was created by <a href="http://www.averywagar.com/">Avery Wagar</a> and <a href="https://nlaha.com">Nathan Laha</a><br><br>
              <button style="margin-right:20px; margin-left:20px;" class="sp-btn" onclick="window.open('https://github.com/ajmwagar/discordbot')">Source Code</button><button style="margin-top: 22px; margin-right:20px; margin-left:20px;" class="sp-btn" onclick="window.open('https://discordbots.org/bot/478616471640080395/vote')">Vote for us!</button>
            </p>
          </div>
        </div>
        <br>
        <br>
        <!-- Begin Commands -->
        <hr>
        <h2>Commands</h2>
          <Commands 
            :items="commandlist"
          />
      </div>
    </div>
    <ZFooter btntext="Dashboard" btnurl="https://dta.dekutree.org/api/discord/login"/>
    <!-- Main Landing Page content ends here -->
  </div>

</template>

<script>
import ZFooter from "../components/zfooter.vue";
import Commands from "../components/commands.vue";
import VueAxios from "vue-axios";
import axios from "axios";

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
      btisClosed: false,
      commandlist: [
        {
          title: "+help",
          category: "Admin",
          value: "Show a help menu"
        },
        {
          title: "+ban <span class='cArgs'>[user]</span",
          category: "Admin",
          value: "Ban a user (admins only)"
        },
        {
          title: "+setlog <span class='cArgs'>[channel]</span",
          category: "Admin",
          value: "Set channel for modlog"
        },
        {
          title: "+kick <span class='cArgs'>[user]</span",
          category: "Admin",
          value: "Kick a user (admins and mods only)"
        },
        {
          title: "+purge <span class='cArgs'>[number of messages]</span",
          category: "Admin",
          value: "Purge a channel"
        },
        {
          title: "+bws",
          category: "Admin",
          value: "List banned words for automod"
        },
        {
          title: "+addbw <span class='cArgs'>[words]</span",
          category: "Admin",
          value: "Add words to ban list"
        },
        {
          title: "+removebw <span class='cArgs'>[words]</span",
          category: "Admin",
          value: "Remove words from ban list"
        },
        {
          title: "+ping",
          category: "Admin",
          value: "Pong?"
        },
        {
          title: "+say <span class='cArgs'>[message]</span",
          category: "Admin",
          value: "Say a message"
        },
        {
          title: "+prefix",
          category: "Admin",
          value: "Sets the bot prefix"
        },
        {
          title: "+alexamode",
          category: "Admin",
          value:
            "Changes the prefix to Alexa <span class='cArgs'>[command]</span"
        },
        {
          title: "+weather <span class='cArgs'>[city]</span",
          category: "Utility",
          value: "Get the weather for a city"
        },
        {
          title: "+joke",
          category: "Utility",
          value: "Tell a joke"
        },
        {
          title: "+yoda <span class='cArgs'>[message]</span",
          category: "Utility",
          value: "Translates your message to yodaspeak!"
        },
        {
          title: "+stack <span class='cArgs'>[search query]</span",
          category: "Utility",
          value: "Searches stack overflow"
        },
        {
          title: "+dice <span class='cArgs'>[number of sides]</span",
          category: "Utility",
          value: "Roles a dice with a number of sides"
        },
        {
          title: "+coinflip",
          category: "Utility",
          value: "Flips a coin"
        },
        {
          title:
            "+math <span class='cArgs'>[number1]</span <span class='cArgs'>[operator]</span <span class='cArgs'>[number2]</span",
          category: "Utility",
          value:
            "Does basic math operations. Gets pissed off if you divide by 0"
        },
        {
          title: "+dab",
          category: "Utility",
          value: "Dabs on them haters"
        },
        {
          title:
            "+translate <span class='cArgs'>[language code]</span <span class='cArgs'>[input text]</span",
          category: "Utility",
          value:
            "Translate's input to specified language, for a list of ISO 639-1 codes go to: <a href='https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>wikipedia</a>"
        },
        {
          title:
            "+currency <span class='cArgs'>[to]</span <span class='cArgs'>[from]</span (Example: BTC USD)",
          category: "Utility",
          value: "Gets and compares currency prices"
        },
        {
          title: "+wolfram <span class='cArgs'>[search]</span",
          category: "Utility",
          value: "Searches Wolfram Alpha"
        },
        {
          title: "+bug <span class='cArgs'>[description]</span",
          category: "Utility",
          value: "Report a bug"
        },
        {
          title: "+credits",
          category: "Utility",
          value: "Visit the github repo!"
        },
        {
          title: "+invite",
          category: "Utility",
          value: "Invite our official bot to your server!"
        },
        {
          title: "+support",
          category: "Utility",
          value: "Join our support server."
        },
        {
          title: "+daily",
          category: "Money",
          value: "Get 500 ZCoins every 24 hours"
        },
        {
          title: "+slots",
          category: "Money",
          value: "Test your luck with 250 ZCoins!"
        },
        {
          title: "+profile",
          category: "Money",
          value: "View your user profile (xp, zcoins, level)"
        },
        {
          title: "+shop",
          category: "Money",
          value: "View the shop"
        },
        {
          title: "+buy",
          category: "Money",
          value: "Buy items from the shop"
        },
        {
          title: "+forbes",
          category: "Money",
          value: "Checkout the richest people alive. Forbes."
        },
        {
          title:
            "+fortnite <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",
          category: "Games",
          value: "Fortnite Stats"
        },
        {
          title:
            "+pubg <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",
          category: "Games",
          value: "PUBG Stats"
        },
        {
          title: "+subs",
          category: "Memes",
          value: "Lists subscribed subreddits."
        },
        {
          title: "+setmemechannel <span class='cArgs'>[channel]<span>",
          category: "Memes",
          value: "Set channel for dumping memes"
        },
        {
          title: "+setmemeinterval <span class='cArgs'>[interval]<span>",
          category: "Memes",
          value: "Set interval for dumping memes (in hours)"
        },
        {
          title: "+addsub <span class='cArgs'>[subreddit title]<span>",
          category: "Memes",
          value: "add a subreddit for getting memes (/r/ format)"
        },
        {
          title: "+removesub <span class='cArgs'>[subreddit title]<span>",
          category: "Memes",
          value: "remove a subreddit for getting memes (/r/ format)"
        },
        {
          title: "+memes",
          category: "Memes",
          value: "gets all the memes from Reddit"
        },
        {
          title: "+join",
          category: "Music",
          value: "Join Voice channel of message sender"
        },
        {
          title: "+add <span class='cArgs'>[URL or Search Query]</span>",
          category: "Music",
          value: "Add a valid youtube link to the queue"
        },
        {
          title: "+queue",
          category: "Music",
          value: "Shows the current queue, up to 15 songs shown."
        },
        {
          title: "+play",
          category: "Music",
          value: "Play the music queue if already joined to a voice channel"
        },
        {
          title: "+pause",
          category: "Music",
          value: "pauses the music"
        },
        {
          title: "+resume",
          category: "Music",
          value: "resumes the music"
        },
        {
          title: "+skip",
          category: "Music",
          value: "skips the playing song"
        },
        {
          title: "+time",
          category: "Music",
          value: "Shows the playtime of the song."
        }
      ]
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
