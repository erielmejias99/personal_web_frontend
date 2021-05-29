<template>
  <v-dialog v-model="dialog" scrollable>
    <template #activator="{on}">
      <span v-on="on">
        <slot></slot>
      </span>
    </template>
    <v-card>
      <v-card-title dark class="d-flex justify-space-between">
        <span>
          <v-icon color="orange">mdi-simple-icons</v-icon>
          <span class="title white--text">
          </span>
        </span>
        <v-btn @click="dialog=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>

      </v-card-text>

<!--        <v-card-actions>-->
<!--          -->
<!--        </v-card-actions>-->
    </v-card>
  </v-dialog>
</template>


<script>
  export default {
    name: ""
  }
</script>