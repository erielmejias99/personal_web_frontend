<template>
  <div>
    <background-image></background-image>



    <div style="height: 600px; margin-top: -600px">
      <v-row>
        <v-col cols="12" lg="6" style="height: 600px;" class="pa-0 d-flex flex-column justify-end">
          <profile-picture></profile-picture>
        </v-col>
        <v-col cols="12" class="pt-12" lg="3">
          <description></description>
        </v-col>
        <v-col cols="12" class="pt-12" lg="3">
          <status></status>
        </v-col>
      </v-row>
    </div>


  </div>
</template>

<script>
import ProfilePicture from "@/components/Home/ProfilePicture";
import Description from "@/components/Home/Description";
import Status from "@/components/Home/Status";
import BackgroundImage from "@/layout/Home/BackgroundImage";
export default {
name: "HeadHome",
  components: {Status, Description, ProfilePicture, BackgroundImage}
}
</script>

<style scoped>

</style>