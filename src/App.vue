<script>
import ScrollPanel from 'primevue/scrollpanel';
import FirstSection from './components/ApresentacaoInicial.vue';
import SecondSection from './components/LuvasDeBox.vue';
import ThirdSection from './components/ThirdSection.vue';
import FourthSection from './components/FourthSection.vue';
import FivetiSection from './components/FivetiSection.vue';
import AnimateOnScroll from 'primevue/animateonscroll';
export default{
  components:{
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FivetiSection,
    ScrollPanel,
    AnimateOnScroll
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

<!--    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"-->
<!--         class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-5000">-->
<!--      <span class="text-3xl font-bold">fade-in</span>-->
<!--    </div>-->

<!--    <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">-->
<!--      <span class="text-3xl font-bold">fade-left</span>-->
<!--    </div>-->

<!--    <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">-->
<!--      <span class="text-3xl font-bold">fade-right</span>-->
<!--    </div>-->

<!--    <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">-->
<!--      <span class="text-3xl font-bold">zoom</span>-->
<!--    </div>-->
<!--    <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">-->
<!--      <span class="text-3xl font-bold">flip-left</span>-->
<!--    </div>-->

<!--    <div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem border-round animation-duration-1000 animation-ease-in-out">-->
<!--      <span class="text-3xl font-bold w-10rem">flip-y</span>-->
<!--    </div>-->
<!--    <div class="h-30rem"></div>-->
<!--    <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">-->
<!--      <span class="text-3xl font-bold">scalein</span>-->
<!--    </div>-->
  </div>

</template>

<style>
.container-principal {
  overflow-x: hidden;
}
@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.box {
  background-image: radial-gradient(var(--primary-300), var(--primary-600));
  border-radius: 50% !important;
  color: var(--primary-color-text);
}

.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

p {
  line-height: 1.75;
}

</style>
