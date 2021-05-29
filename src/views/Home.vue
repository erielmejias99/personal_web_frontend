<template>
  <v-container fluid class="pa-0 grey lighten-5" >
<!--    style="margin-top: -65px"-->
    <v-container fluid class="py-0 px-3">
      <v-row>
        <v-col cols="12" class="pa-0">
          <background-image></background-image>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: -180px">
      <v-row>
        <v-col cols="12" class="text-center">
          <profile-picture></profile-picture>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: -50px">
      <description-status></description-status>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <skills></skills>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <experiences></experiences>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src

import Skills from "@/layout/Home/Skills";
import Experiences from "@/layout/Home/Experiences";
import BackgroundImage from "@/layout/Home/BackgroundImage";
import DescriptionStatus from "@/layout/Home/DescriptionStatus";
import ProfilePicture from "@/components/Home/ProfilePicture";

export default {
  name: 'Home',
  components: {
    ProfilePicture,
    DescriptionStatus,
    BackgroundImage,
    Experiences,
    Skills,
  }
}
</script>
