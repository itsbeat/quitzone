<template>
  <div>
    <h1>
      L'Its è bello ma anche lo Erik lo è 💩
    </h1>
    <div>
      <router-link to="/its/list">Lista</router-link> |
      <router-link to="/its/create">Crea</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Its",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style></style>
