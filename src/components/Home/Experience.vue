<template>
  <v-card class="mt-3 mx-2 exp" width="300px">
    <v-card-text class="text-center">
      <v-img height="250px" max-height="250px" :src="exp.image">
      </v-img>

      <small style="color: gray">{{$t("At")}}</small>
      <div class="title"><b>{{ exp.company }}</b></div>
      <small class="mt-n5" style="color: gray">{{exp.location}}</small>
      <br>
      <small style="color: gray">{{$t('As')}}</small>
      <div class="title">{{exp.occupation}}</div>
      <small>
        {{exp.start_date}} <b>-</b>
        {{exp.end_date}}
        <template v-if="exp.end_date == null || exp.end_date === '' ">
          {{$t('Present')}}
        </template>
        <template v-else>
          {{exp.end_date}}
        </template>
      </small>
    </v-card-text>
    <v-card-actions class="justify-center">
      <experience-detail-desciption :exp="exp">
          <v-btn color="orange" class="white--text" shaped>
            <v-icon left>mdi-plus</v-icon>More
          </v-btn>
      </experience-detail-desciption>
    </v-card-actions>
  </v-card>
</template>

<script>
import ExperienceDetailDesciption from "@/components/Home/ExperienceDetailDescription";
export default {
  name: "Experience",
  components: {ExperienceDetailDesciption},
  props:{
    exp:{
      type: Object,
      required: true,
    }
  },
  data:()=>({
    reveal: false
  })
}
</script>

<style scoped>
.exp:hover{
  box-shadow: 0 0 20px #bcbcbc;
  cursor: pointer;
  transition: .4s all;
}
.exp{
  transition: .4s all;
}
</style>