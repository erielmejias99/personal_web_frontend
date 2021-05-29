<template>
  <v-card elevation="0" color="transparent" max-height="400px">
    <v-card-title>
      <!--UserName-->
      <b>{{ $t("Profile") }}</b>
    </v-card-title>
    <v-divider color="white"></v-divider>
    <v-card-text>
      <div class="text-center py-3" v-if="status === 'loading'">
        <v-progress-circular color="white" indeterminate></v-progress-circular>
      </div>
      <div v-else-if="status==='empty'">
        <span class="title">{{$t('no_personal_data')}}</span>
      </div>
      <template v-else>
          <div class="mb-2" v-for="info in response.results" :key="info.id">

            <template v-if="info.icon == null || info.icon === '' ">
              <div style="text-align: justify;" v-html="info.data">
              </div>
            </template>
            <template v-else>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon :color="info.icon_color">{{info.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <template v-if="info.link !== null && info.link !== ''">
                      <a :href="info.link">
                        {{info.data}}
                      </a>
                    </template>
                    <template v-else>
                      <b>{{info.data}}</b>
                    </template>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </div>
      </template>

    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
name: "Description",
  data: ()=>({
    response: {
      results: [],
      count: 0,
    },
    status: 'loading'
  }),
  methods:{
    load_personal_data: async function(){
      this.status = 'loading';
      try{
        const resp = await axios.get( 'personal_data' );
        this.response = resp.data;
        if( this.response.count === 0 ){
          this.status = 'empty'
        }else{
          this.status = 'ok';
        }
      }catch{
        setTimeout( this.this.load_personal_data, 30000 );
      }
    }
  },
  mounted(){
    this.load_personal_data();
  }
}
</script>

<i18n>
{
  "en": {
    "no_personal_data": "No Personal Information"
  },
  "es": {
    "no_personal_data": "Sin Informacion Personal"
  }
}
</i18n>