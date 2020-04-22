<template>
  <div>
    <Header />
    <Projects class="projects"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Projects,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 100vh;
  width: 100vw;
}
</style>