<script>
import ScrollPanel from 'primevue/scrollpanel';
import FirstSection from './components/ApresentacaoInicial.vue';
import SecondSection from './components/LuvasDeBox.vue';
import ThirdSection from './components/ThirdSection.vue';
import FourthSection from './components/FourthSection.vue';
import FivetiSection from './components/FivetiSection.vue';

export default{
  components:{
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FivetiSection,
    ScrollPanel
  }
}
</script>

<template>

  <div class="container-principal">
    <FirstSection></FirstSection>
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <FourthSection></FourthSection>
    <FivetiSection></FivetiSection>
  </div>

</template>

<style>
.container-principal {
  overflow-x: hidden;
}
</style>
