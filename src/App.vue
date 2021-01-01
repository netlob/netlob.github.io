<template>
  <div id="app" :class="{'has-background-black-ter': this.$root.$children[0].darkTheme}">
    <Background />
    <!-- <router-view/> -->
    <Home />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    Background,
    Home
  },
  data() {
    return {
      darkTheme: this.getTheme()
    }
  },
  methods: {
    getTheme() {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          this.darkTheme = e.matches;
      });
      
      document.documentElement.className =
          window.matchMedia && 
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'has-background-black-ter'
          : '';

      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }
}
</script>


<style lang="scss">
@font-face {
  font-family: "AvertaStd-Bold";
  src: url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669d.eot");
  src: url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669dfix.eot#iefix") format("embedded-opentype"),
  url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669d.woff2") format("woff2"),
  url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669d.woff") format("woff"),
  url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669d.ttf") format("truetype"),
  url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc18024669d.svg#AvertaStd-Bold") format("svg");
}

@font-face {
  font-family: "AvertaStd-Regular";
  src: url("~@/assets/fonts/AvertaStd-Bold/447315c0c330fd423c8e1cc1802799d.otf") format("opentype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  // font-family: "Montserrat Alternates", sans-serif;
  font-family: 'AvertaStd-Bold', sans-serif;
  padding: 0;
  margin: 0;
  --navi-border-color: rgb(95, 99, 104);
  --navi-check-icon-color: rgb(95, 99, 104);
  --navi-keyboard-focus-color: rgba(138, 180, 248, 0.5);
  --navi-option-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3),
    0 3px 6px 2px rgba(0, 0, 0, 0.15);
  --navi-option-icon-shadow-color: rgb(95, 99, 104);
  --navi-shape-blue-color: rgb(138, 180, 248);
  --navi-shape-green-color: rgb(129, 201, 149);
  --navi-shape-grey-color: rgb(154, 160, 166);
  --navi-shape-red-color: rgb(238, 103, 92);
  --navi-shape-yellow-semicircle-color: rgb(253, 214, 99);
  --navi-shape-yellow-dots-color: rgb(253, 214, 99);
  --navi-step-indicator-active-color: rgb(138, 180, 248);
  --navi-step-indicator-color: rgb(154, 160, 166);
  --navi-wallpaper-text-color: rgb(232, 234, 237);
}

html {
  overflow: hidden;
}

html,
body {
  /* background-color: #573EBC; */
  background-color: #fff;
  overflow-x: hidden;
  /* scroll-behavior: smooth; */
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

// ::selection {
//   background-color: #7957d5;
//   color: white;
// }

.has-text-grey-ter {
  color: #4a4a4a;
}
</style>