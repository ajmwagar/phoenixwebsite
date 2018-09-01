<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <button class="closebtn" v-on:click="isClosed = !isClosed" ><i class="material-icons">keyboard_arrow_down</i></button>
  <footer class="mainfooter" v-bind:class="{ closed: isClosed }">
    <a v-bind:href="''+btnurl+''"><button class="sp-btn-s" v-on:click="dshow = !dshow" v-bind:class="{ closed: isClosed }">{{btntext}}</button></a>
  </footer>
  </div>
</template>

<script>
// vue stuff
export default {
  name: "footer",
  props: ["btntext", "btnurl"],
  data() {
    return {
      isClosed: true,
      dshow: true
    };
  }
};
</script>

<style scoped>
.sp-btn {
  background-color: #d6b4a4;
  color: #722424;
  font-size: 35px;
  padding-top: 5px;
  padding-bottom: 60px;
  padding-left: 35px;
  padding-right: 35px;
  border: none;
  font-family: "Archivo Narrow", sans-serif;
  transition: 0.2s;
  border-radius: 2px;
  box-shadow: 0px 10px 0px #c55b2a;
}

.sp-btn:hover {
  background-color: #d6b4a4;
  color: rgb(122, 54, 54);
  transition: 0.2s;
}

.sp-btn:active {
  background-color: #ffffff;
  transform: translateY(10px);
  box-shadow: 0px 0px 0px #c55b2a;
  transition: 0.1s;
}

.sp-btn-s {
  background-color: #d6b4a4;
  color: #722424;
  font-size: 30px;
  padding-top: 1px;
  padding-bottom: 50px;
  padding-left: 35px;
  padding-right: 35px;
  border: none;
  font-family: "Archivo Narrow", sans-serif;
  transition: 0.2s;
  border-radius: 2px;
  box-shadow: 0px 10px 0px #944520;
}

.sp-btn-s:hover {
  background-color: #d6b4a4;
  color: rgb(122, 54, 54);
  transition: 0.2s;
}

.sp-btn-s:active {
  background-color: #ffffff;
  transform: translateY(10px);
  box-shadow: 0px 0px 0px #944520;
  transition: 0.1s;
}
.closebtn {
  background-color: #d6b4a4;
  color: #722424;
  font-size: 33px;
  padding-top: 1px;
  padding-bottom: 50px;
  padding-left: 35px;
  padding-right: 35px;
  border: none;
  font-family: "Archivo Narrow", sans-serif;
  transition: 0.2s;
  border-radius: 2px;
  box-shadow: 0px 10px 0px #944520;
  float: right;
  margin-right: 50px;
  position: fixed;
  right: 0;
  bottom: 22px;
  z-index: 1;
}

.closebtn:hover {
  background-color: #d6b4a4;
  color: rgb(122, 54, 54);
  transition: 0.2s;
}

.closebtn:active {
  background-color: #ffffff;
  transform: translateY(10px);
  box-shadow: 0px 0px 0px #944520;
  transition: 0.1s;
}
.mainfooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #c55b2a;
  color: white;
  text-align: center;
  font-family: "Archivo Narrow", sans-serif;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: 1s;
}
</style>
