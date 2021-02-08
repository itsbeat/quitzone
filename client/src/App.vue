<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  watch: {
      "$route.name": {
          handler() {
            //   console.log(this.$route);
            //   document.title = "Quitzone | " + this.$route.meta.label;
              this.$route.matched.forEach( element => {
                  if (element.meta.label) {
                      document.title = "Quitzone | " + element.meta.label;
                  }
              });
            
          }
      }
  },
}
</script>


