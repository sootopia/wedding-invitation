<template>
  <div>
    <HeroSection />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeroSection from '@/components/sections/HeroSection.vue';

export default {
  components: {
    HeroSection,
  },
  setup() {},
};
</script>

<style lang="scss">
#app {
  position: relative;
  max-width: 420px;
  min-height: 6000px;
  margin-left: auto;
  margin-right: auto;
  background-color: $white;
}
</style>
