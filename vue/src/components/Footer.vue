<template>
    <footer class="footer has-background-white">
        <div class="content has-text-centered">
            <p>
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