<template>
    <v-avatar size="300">
      <v-progress-circular v-if="status==='loading'" color="white" indeterminate></v-progress-circular>
      <v-img v-else :src="image" min-height="420px" max-height="450px">
      </v-img>
    </v-avatar>
</template>

<script>
import axios from "axios"
export default {
  name: "ProfilePicture",
  data: ()=>({
    image: null,
    status: 'loading'
  }),
  methods:{
    load_image: async function(){
      this.status = 'loading';
      try{
        const resp = await axios.get( 'image?place=profile' );
        console.log( resp );
        if( resp.data.count === 0 ){
          this.status = 'empty' ;
        }else{
          this.image = resp.data.results[ 0 ].image;
          this.status = 'ok';
        }
      }catch{
        setTimeout( this.load_image, 30000 );
      }
    }
  },
  mounted(){
    this.load_image();
  }
}
</script>