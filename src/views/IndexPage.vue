<script setup>
import TheHeader from "@/components/Layout/IndexPage/HeaderSection.vue"
import AboutSection from "@/components/Layout/IndexPage/AboutSection.vue"
import FeaturesSection from "@/components/Layout/IndexPage/FeaturesSection.vue"
import ToursSection from "@/components/Layout/IndexPage/ToursSection.vue"
import StoriesSection from "@/components/Layout/IndexPage/StoriesSection.vue"
</script>

<template>
  <the-header></the-header>
  <main>
    <about-section></about-section>
    <features-section></features-section>
    <tours-section></tours-section>
    <stories-section></stories-section>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/css/utilities/utilities";


</style>