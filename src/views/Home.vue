<template>
  <div>
    <Header />
    <Projects class="projects"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Projects
  }
}
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 100vh;
  width: 100vw;
}
</style>