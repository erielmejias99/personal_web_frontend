<template>
  <v-card class="skill text-center pa-2 ma-4" width="130px" outlined>
    <div class="text-center">
      <v-img class="mx-auto" contain max-width="125px" height="125px" :src="skill.image"/>
    </div>
    <v-card-text class="pa-1">
      <span class="title font-weight-bold">
        {{ skill.label }}
      </span>
      <v-divider style="width: 70%" class="mx-auto my-2"></v-divider>
      <v-rating
      color="orange"
      full-icon="mdi-star"
      empty-icon="mdi-star-outline"
      icon-label="mdi-star"
      dense
      readonly
      size="12"
      :value="rating"></v-rating>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "Skill",
  props:{
    skill:{
      type: Object,
      required: true,
    }
  },
  computed:{
    rating:function(){
      let percent = parseInt( this.skill.percent );
      if( percent < 20 ){
        return 1;
      }else if( percent >= 20 && percent < 40 ){
        return 2;
      }else if( percent >= 40 && percent < 60 ){
        return 3;
      }else if( percent >= 60 && percent < 80 ){
        return 4;
      }else if( percent >= 80 && percent <= 100 ){
        return 5;
      }
      return 1;
    }
  }
}
</script>

<style scoped>
  .skill:hover{
    box-shadow: 0 0 20px #bcbcbc;
    cursor: pointer;
    transition: .4s all;
  }
  .skill{
    transition: .4s all;
  }
</style>