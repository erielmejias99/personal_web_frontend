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

      <v-btn text link :to="{name: 'Home'}">
        <v-icon left color="orange">
          mdi-home
        </v-icon>
        {{$t("Home")}}
      </v-btn>
      <v-btn text link :to="{ name: 'History' }">
        <v-icon left color="orange">
          mdi-code-json
        </v-icon>
        {{$t('Experience')}}
      </v-btn>
      <v-btn text link>
        <v-icon left color="orange">
          mdi-code-braces
        </v-icon>
        {{$t('Blog')}}
      </v-btn>
      <v-btn text link>
        <v-icon left color="orange">mdi-help</v-icon>
        {{$t('About')}}
      </v-btn>
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
  data: () => ({
    //
  }),
};
</script>
