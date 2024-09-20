<template>
  <div>
    <HeroSection/>
    <TheSlider class="mt-5"/>
    <CardScetion :items="Alloffers" title="Recent Offers" class="mt-5"/>
    <CardScetion :items="Alloffers" title="Recent places for rent" class="mt-3"/>
    <CardScetion :items="Alloffers" title="Recent places for sale" class="mt-3"/>

   
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import TheSlider from '@/components/TheSlider.vue';
import CardScetion from '@/components/CardScetion.vue';
import {offers}  from '@/data.js'
export default {
  components: { HeroSection,TheSlider,CardScetion },
  computed:{
    Alloffers(){
      console.log(this.offers);
      
      
      return this.offers
    }
  },
  data() {
    return {
      offers:offers
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>
