<template>
  <div class="container">
    <div class="child" id="one">
      <p> Thanks for checking us out </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "FooterComponent",
  components: {
    
  }

}
</script>

<style scoped>
  .container {
    vertical-align: text-bottom;
    overflow: hidden;
    flex-shrink: 0;
  }

  .child {
    height: 100%;
    display: inline-block;
    margin-left: 1vw;
  }
  
</style>