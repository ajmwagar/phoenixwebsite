<template>
    <div>
      accordion style command thing
    </div>
</template>
<script>
// vue stuff
export default {
  name: "footer",
  data() {
    return {
      prefix: "."
    };
  }
};
</script>

<style scoped>
.commands-wrap {
  padding-top: 50px;
}

.command {
  border: 0;
  background-color: #141414;
  color: #e8e8e8;
}

.command-content {
  padding-left: 22px;
}
</style>
