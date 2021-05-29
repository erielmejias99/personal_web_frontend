<template>
    <div class="py-12" style="min-height: 250px">
      <h1 class="text-center font-weight-bold">
        {{$t('skills')}}
      </h1>

      <v-divider style="width: 350px" class="mx-auto"></v-divider>

      <div class="text-center py-3" v-if="status === 'loading'">
        <v-progress-circular color="black" indeterminate></v-progress-circular>
      </div>

      <div v-else-if="status === 'ok'" class="d-flex flex-wrap justify-center">
        <template v-for="skill in response.results">
          <skill :skill="skill" :key="skill.id"></skill>
        </template>
      </div>

      <div v-else-if="status==='empty'" class="text-center px-3 py-5">
        <span class="title">{{$t('no_skill')}}</span>
      </div>
    </div>
</template>

<script>
import axios from "axios"
import Skill from "@/components/Home/Skill";
export default {
  name: "Skills",
  components: {Skill},
  data: ()=>({
    response: {
      results: [],
      count: 0,
    },
    status: 'loading'
  }),
  methods:{
    load_status: async function(){
      this.status = 'loading';
      try{
        const resp = await axios.get( 'skill' );
        this.response = resp.data;
        if( this.response.count === 0 ){
          this.status = 'empty'
        }else{
          this.status = 'ok';
        }
      }catch{
        setTimeout( this.load_status, 30000 );
      }
    }
  },
  mounted(){
    this.load_status();
  }
}
</script>

<i18n>
{
  "en": {
    "no_skill": "No Skills",
    "skills": "Skills"
  },
  "es": {
    "no_skill": "Sin Habilidades",
    "skills": "Habilidades"
  }
}
</i18n>