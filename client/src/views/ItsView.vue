<template>
  <div>ItsView {{ userId }}</div>
</template>
<script>
export default {
  name: "ItsView",
  data() {
    return {
      userId: null
    };
  },
  mounted() {
    this.userId = this.$route.params.id;
  }
};
</script>
