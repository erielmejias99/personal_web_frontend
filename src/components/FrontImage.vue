<template>
    <v-img :src="src" v-bind="$attrs"></v-img>
</template>

<script>
    import axios from "axios";
    import qs from 'qs'

    export default {
        name: "FrontImage",
        data: ()=>({
            src: null,
        }),
        props:{
            label: {
                type: String,
                required: true
            },
        },
        methods:{
            load_front_image: async function(){
                try{
                    const resp = await axios.get( 'image/?' +
                    qs.stringify( {
                        place: this.label,
                    }))
                    console.log( resp );
                    if( resp.data.count > 0 ){
                        this.src = resp.data.results[0].image;
                    }
                }catch{
                    this.src = null;
                }
            }
        },
        mounted(){
            this.load_front_image();
        }
    }
</script>

<style scoped>

</style>