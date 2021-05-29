<template>
  <v-card elevation="0" min-height="300px" max-height="400px" color="transparent">
    <v-card-title :class="{ 'justify-end': $vuetify.breakpoint.smAndUp }">
      <b>{{$t("status")}}</b>
    </v-card-title>
    <v-divider color="white"></v-divider>
    <v-card-text>
      <div class="text-center py-3" v-if="status === 'loading'">
        <v-progress-circular color="white" indeterminate></v-progress-circular>
      </div>
      <div v-else-if="status==='empty'">
        <span class="title font-weight-bold">{{$t('no_status')}}</span>
      </div>
      <template v-else>
        <v-list color="transparent" class="text-wrap">
          <v-list-item two-line class="mb-2" v-for="stat in response.results" :key="stat.id">
            <v-list-item-avatar v-if="stat.image !== null" size="60" color="white" class="pa-2" tile>
                <v-img contain :src="stat.image"/>
            </v-list-item-avatar>
            <v-list-item-title class="text-wrap" style="font-size: 14pt;">
              {{stat.status}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </template>

    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios"
export default {
  name: "Status",
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
        const resp = await axios.get( 'status' );
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
    "status": "Status",
    "no_status": "No Status"
  },
  "es": {
    "status": "Estado",
    "no_status": "Sin Estado Actual"
  }
}
</i18n>