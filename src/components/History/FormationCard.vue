<template>
  <v-card >
    <v-card-title :class="[ color, 'white--text' ]">
      {{item.title}}
    </v-card-title>
    <v-card-subtitle :class="[ color, 'white--text', 'text-left' ]">
      {{start_date_fmt}} - {{end_date_fmt}}
    </v-card-subtitle>
    <v-card-text class="mt-2">
      <div style="text-align: justify" v-html="item.description">
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormationCard",
  props:{
    item:{
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    }
  },
  computed:{
    start_date_fmt: function(){
      let date = new Date( this.item.start_date )
      return date.toDateString();
    },
    end_date_fmt: function(){
      if( this.item.end_date ){
        let date = new Date( this.item.start_date )
        return date.toDateString();
      }else{
        return 'Actually'
      }
    }
  }
}
</script>

<style scoped>

</style>