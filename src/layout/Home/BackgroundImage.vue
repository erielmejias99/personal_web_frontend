<template>
<!--    gradient="to top bottom, red"-->
    <v-img
    :src="image"
    min-height="550px"
    gradient="to bottom, rgba( 0,0,0, .9 ), rgba( 0, 0 , 0 , 0.7 )"
    height="600px"
    style="padding-top: 200px"
    >
      <main-title></main-title>
    </v-img>
</template>

<script>
import axios from "axios"
import MainTitle from "@/components/Home/MainTitle";

export default {
  name: "BackgroundImage",
  components: {MainTitle},
  data: ()=>({
    image: null,
    status: 'loading'
  }),
  methods:{
    load_image: async function(){
      this.status = 'loading';
      try{
        const resp = await axios.get( 'image?place=background' );
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