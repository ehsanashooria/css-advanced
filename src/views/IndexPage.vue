<script setup>
import TheHeader from "@/components/Layout/IndexPage/HeaderSection.vue"
import AboutSection from "@/components/Layout/IndexPage/AboutSection.vue"
import FeaturesSection from "@/components/Layout/IndexPage/FeaturesSection.vue"
import ToursSection from "@/components/Layout/IndexPage/ToursSection.vue"
import StoriesSection from "@/components/Layout/IndexPage/StoriesSection.vue"
import BookingSection from "@/components/Layout/IndexPage/BookingSection.vue"
import TheFooter from "@/components/Layout/IndexPage/FooterSection.vue";
import NavigationSection from "@/components/Layout/IndexPage/NavigationSection.vue";
import PopupSection from "@/components/Layout/IndexPage/PopupSection.vue";

</script>

<template>
  <navigation-section></navigation-section>
  <the-header></the-header>
  <main>
    <about-section></about-section>
    <features-section></features-section>
    <tours-section></tours-section>
    <stories-section></stories-section>
    <booking-section></booking-section>
  </main>
  <the-footer></the-footer>
  <popup-section></popup-section>
</template>
