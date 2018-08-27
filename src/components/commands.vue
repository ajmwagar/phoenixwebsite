<template>
    <div role="tablist">
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <button class="command" block href="#" v-b-toggle.accordion1 variant="info">{{ prefix }}{{ command}}</button>
        </b-card-header>
        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <p class="card-text">
                {{ description }}
            </p>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div>
</template>

<script>
// vue stuff
export default {
  name: "footer",
  props: ["description", "permissions", "command"],
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
