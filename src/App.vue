<template>
  <div>
    <HeroSection />
    <InvitationSection />
    <GallerySection />
    <CalendarSection />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import InvitationSection from '@/components/sections/InvitationSection.vue';
import GallerySection from '@/components/sections/GallerySection.vue';
import CalendarSection from '@/components/sections/CalendarSection.vue';

export default {
  components: {
    HeroSection,
    InvitationSection,
    GallerySection,
    CalendarSection,
  },
  setup() {},
};
</script>

<style lang="scss">
#app {
  position: relative;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 80px;
  background-color: $white;
}
</style>
