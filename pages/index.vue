<template>
  <div>
     <navbar/>
     <carousel/>
     <instutional-area/>
     <events-area/>
     <gallery-area/>
     <blog-area/>
     <staff-area/>
     <footer-area/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Carousel from '~/components/Carousel.vue'
import InstutionalArea from '~/components/InstitutionalArea.vue'
import EventsArea from '~/components/EventsArea.vue'
import GalleryArea from '~/components/GalleryArea.vue'
import BlogArea from '~/components/BlogArea.vue'
import StaffArea from '~/components/StaffArea.vue'
import FooterArea from '~/components/FooterArea.vue'

export default {
  components: {
    Navbar,
    Carousel,
    InstutionalArea,
    EventsArea,
    GalleryArea,
    BlogArea,
    StaffArea,
    FooterArea
  }
}
</script>

<style>

</style>
