<template>
    <footer class="footer" :class="{'has-background-black-ter': this.$root.$children[0].darkTheme}">
        <div class="content has-text-centered">
            <p :class="{'has-text-white-ter': this.$root.$children[0].darkTheme}">
                © Netlob {{ date }}
            </p>
        </div>
    </footer>
</template>

<script>
export default {
  components: {},
  data() {
      return {
          date: new Date().getFullYear()
      }
  }
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    top: 100px;
}
</style>