<template>
  <v-container>

    <v-row  v-if="status === 'loading'">
      <v-col class="text-center" cols="12" style="margin-top: 200px">
        <div>
          <span class="title font-weight-bold">{{$t('Loading History')}}</span>
          <v-icon color="orange" right class="mt-n1">mdi-clock</v-icon>
        </div>
        <v-progress-linear style="width: 300px" class="mx-auto" indeterminate color="orange"></v-progress-linear>
      </v-col>
    </v-row>

    <v-row  v-else-if="status === 'error'">
      <v-col class="text-center" cols="12" style="margin-top: 200px">
        <span class="title grey--text">{{$t('error_loading_data')}}</span>
      </v-col>
    </v-row>

    <v-row  v-else-if="status === 'empty'">
      <v-col class="text-center" cols="12" style="margin-top: 200px">
        <span class="title grey--text">{{$t('no_history')}}</span>
      </v-col>
    </v-row>

    <v-row v-if="status === 'ok'">
      <v-col cols="12">
        <v-timeline>
          <!--Experience-->
          <template v-for="exp in experience">
            <v-timeline-item :key="'experience' + exp.id" color="success">
              <template #opposite>
                <v-list-item>
                  <v-list-item-avatar size="70" left tile>
                    <v-img :src="exp.image"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      <span class="title">
                        {{exp.company}}
                      </span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <v-icon>mdi-google-maps</v-icon>{{exp.location}}
                      <template v-if="exp.web_site"> |
                      <v-icon color="success">mdi-web</v-icon>
                      <router-link target="_blank" :to="exp.web_site">
                        {{exp.web_site}}
                      </router-link>
                      </template>
                    </v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>
              </template>
              <template #icon>
                <v-icon>mdi-laptop</v-icon>
              </template>
              <experience-card color="success" :item="exp"></experience-card>
            </v-timeline-item>
          </template>


          <!--Formation-->
          <template v-for="form in formation">
            <v-timeline-item :key="'formation' + form.id">
            <template #opposite>
              <v-list-item>
                <v-list-item-avatar size="70" left tile>
                 <v-img :src="form.image"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    <span class="title">
                      {{form.institution}}
                    </span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon>mdi-google-maps</v-icon>{{form.location}}  |
                    <v-icon color="primary">mdi-web</v-icon>
                    <router-link :to="form.web_page">
                      {{form.web_page}}
                    </router-link>
                  </v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
            </template>

            <template #icon>
            <v-icon>mdi-school</v-icon>
            </template>

            <formation-card :item="form"></formation-card>
           </v-timeline-item>
          </template>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
import FormationCard from "@/components/History/FormationCard";
import ExperienceCard from "@/components/History/ExperienceCard";

export default {
  name: "History",
  components: {ExperienceCard, FormationCard},
  data: ()=>({
    status: 'loading',
    loading_progress: 0,
    formation: [],
    experience: []
  }),
  methods:{
    load_formation: function(){
      axios.get( 'formation' )
        .then( resp=>{
          this.formation = resp.data.results;
          this.loading_progress += 50;
        })
        .catch( ()=>{
          this.status = 'error';
        })
    },
    load_exprience: function(){
      axios.get( 'experience' )
        .then( resp=>{
          this.experience = resp.data.results;
          this.loading_progress += 50;
        })
        .catch( ()=>{
          this.status = 'error';
        })
    }
  },
  watch:{
    status: function ( newVal ){
      if( newVal === 'error' || newVal === 'loading' ){
        this.loading_progress = 0;
      }
    },
    loading_progress: function ( newVal ){
      if( newVal === 100 ){
        if( this.experience.length === 0 && this.formation.length === 0 ){
          this.status = "empty";
        }else{
          console.log( this.experience.length );
          console.log( this.formation.length );
          this.status = 'ok';
          this.loading_progress = 0;
        }
      }
    }
  },
  mounted() {
    this.status = 'loading'
    this.load_formation();
    this.load_exprience();
  }
}
</script>

<i18n>
{
  "es": {
    "loading_history": "Cargando Historia...",
    "error_loading_data": "Error al cargar la informacion",
    "no_history": "Sin historia aun."
  },
  "en": {
    "loading_history": "Loading History...",
    "error_loading_data": "Error loading information.",
    "no_history": "No history yet."

  }
}
</i18n>