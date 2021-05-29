<template>
  <v-card >
    <v-card-title :class="[ color, 'white--text' ]">
      {{item.occupation}}
    </v-card-title>
    <v-card-subtitle :class="[ color, 'white--text', 'text-left' ]">
      date
    </v-card-subtitle>
    <v-card-text class="mt-2">
      <div style="text-align: justify">
        {{item.description}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ExperienceCard",
  props:{
    item:{
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    }
  }
}
</script>

<style scoped>

</style>