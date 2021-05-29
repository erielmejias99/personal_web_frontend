<template>
  <div class="text-center">
    <h1 class="profession">
      <b class="orange--text">{</b>
      Full Stack Developer
      <b class="orange--text">}</b>
    </h1>

    <v-divider style="width: 60%;" class="orange mx-auto"></v-divider>

    <h3 class="username">Eriel Mejias</h3>
  </div>
</template>

<script>
export default {
name: "MainTitle"
}
</script>

<style scoped>
  .profession{
    font-size: 60px;
    color: white;
    text-shadow: 5px 5px 5px black;
  }
  .username{
    font-size: 40px;
    color: white;
    text-shadow: 5px 5px 5px black;
  }
</style>