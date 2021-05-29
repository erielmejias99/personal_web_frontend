<template>
  <v-dialog v-model="dialog" max-width="600" scrollable>
    <template #activator="{on}">
      <span v-on="on">
        <slot></slot>
      </span>
    </template>
    <v-card>
      <v-card-title dark class="d-flex black justify-space-between">
        <span>
          <v-icon color="orange">mdi-simple-icons</v-icon>
          <span class="title white--text">
            {{$t('Description')}}
          </span>
        </span>
        <v-btn icon @click="dialog=false">
          <v-icon color="orange">mdi-close-thick</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="mt-4 font-weight-bold title">
          {{exp.company}}
        </div>
        <v-divider></v-divider>

        <div style="text-align: justify">
          {{ exp.description }}
        </div>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: "ExperienceDetailDescription",
  data: ()=>({
    dialog: false
  }),
  props:{
    exp: {
      type: Object,
      required: true
    }
  }
}
</script>