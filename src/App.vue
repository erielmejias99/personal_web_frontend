<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="black"
    >
      <v-avatar size="40">
        <front-image width="50px" height="50px" label="mini_profile"></front-image>
      </v-avatar>
      <span
        class="ml-3 title orange--text"
        style="cursor: pointer"
        @click="$router.push( { name: 'Home' } )">
        Eriel Mejias
      </span>
      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn text v-for="nav of nav_btn" :key="nav.label" link :to="nav.to">
          <v-icon left :color="nav.color">
            {{nav.icon}}
          </v-icon>
          {{$t(nav.label)}}
        </v-btn>
      </template>
      <template v-else>
        <v-menu bottom>
          <template #activator="{on,attr}">
            <v-btn v-on="on" v-bind="attr" small fab rounded>
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list dark>
            <v-list-item v-for="nav of nav_btn" :key="nav.label" link :to="nav.to">
              <v-list-item-icon>
                <v-icon color="orange">{{nav.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{nav.label}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <my-footer></my-footer>
  </v-app>
</template>

<script>

import FrontImage from "@/components/FrontImage";
import MyFooter from "@/layout/MyFooter";
export default {
  name: 'App',
  components: {MyFooter, FrontImage},
  metaInfo:{
    title: 'Eriel Mejias',
  },
  data: () => ({
    nav_btn:[
      { label: 'Home', icon: 'mdi-home', color: 'orange', to: { name: 'Home' } },
      { label: 'Experience', icon: 'mdi-code-braces', color: 'orange', to: { name: 'History' } },
      // { label: 'Blog', icon: 'mdi-home', color: 'orange', to: { name: 'Home' } },
      // { label: 'About', icon: 'mdi-home', color: 'orange', to: { name: 'Home' } },
    ]
  }),
};
</script>
