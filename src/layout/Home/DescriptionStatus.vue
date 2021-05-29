<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
      <description></description>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
      <status></status>
    </v-col>
  </v-row>
</template>

<script>
import Status from "@/components/Home/Status";
import Description from "@/components/Home/Description";
export default {
name: "DescriptionStatus",
  components: {Description, Status}
}
</script>

<style scoped>

</style>