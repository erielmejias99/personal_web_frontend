<template>
    <div class="py-12" style="min-height: 250px">
      <h1 class="text-center font-weight-bold">
        {{$t('experience')}}
      </h1>

      <v-divider style="width: 350px" class="mx-auto"></v-divider>

      <div class="text-center py-3" v-if="status === 'loading'">
        <v-progress-circular color="black" indeterminate></v-progress-circular>
      </div>

      <div v-else-if="status === 'ok'" class="d-flex flex-wrap justify-center">
        <template v-for="exp in response.results">
          <experience :exp="exp" :key="exp.id"></experience>
        </template>
      </div>

      <div v-else-if="status==='empty'" class="text-center px-3 py-5">
        <span class="title">{{$t('no_experience')}}</span>
      </div>
    </div>
</template>

<script>
import axios from "axios"
import Experience from "@/components/Home/Experience";
export default {
  name: "Experiences",
  components: {Experience},
  data: ()=>({
    response: {
      results: [],
      count: 0,
    },
    status: 'loading'
  }),
  methods:{
    load_experience: async function(){
      this.status = 'loading';
      try{
        const resp = await axios.get( 'experience' );
        this.response = resp.data;
        if( this.response.count === 0 ){
          this.status = 'empty'
        }else{
          this.status = 'ok';
        }
      }catch{
        setTimeout( this.load_experience, 30000 );
      }
    }
  },
  mounted(){
    this.load_experience();
  }
}
</script>

<i18n>
{
  "en": {
    "no_experience": "No Experience",
    "experience": "Experiences"
  },
  "es": {
    "no_experience": "Sin Experiencia",
    "experience": "Experiencias"
  }
}
</i18n>