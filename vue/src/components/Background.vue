<template>
    <div>
      <div id="background" :class="{'has-background-black-ter': this.$root.$children[0].darkTheme}">
          <span id="blue-circle-container"></span>
          <span id="green-rectangle"></span>
          <span id="grey-oval"></span>
          <span id="grey-rounded-rectangle"></span>
          <span id="red-triangle"></span>
          <span id="yellow-dots"></span>
          <span id="yellow-semicircle" @click="toggleTheme"></span>
      </div>
      <a class="icon-scroll" @click="scroll" :class="{'fade-hide': scrolled, inverted: this.$root.$children[0].darkTheme}"></a>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      scrolled: false
    }
  },
  created() {
    document.body.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scroll: () => document.querySelector(".projects").scrollIntoView({ behavior: 'smooth', block: 'start'}),
    handleScroll () { this.scrolled = (document.body.scrollTop > 20) },
    toggleTheme() {
      this.$root.$children[0].darkTheme = !this.$root.$children[0].darkTheme;
    }
  }
}
</script>

<style lang="scss" scoped>
#background {
  height: 101vh;
  left: 50vw;
  min-width: 624px;
  position: absolute;
  top: 50vh;
  transform: translate(-50vw, -50vh);
  width: 101vw;
  z-index: 10;
}

@keyframes blue-circle-anim-x {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(44px);
  }
}

@keyframes blue-circle-anim-y {
  50% {
    animation-timing-function: cubic-bezier(0.55, 0, 0.2, 1);
    transform: translateY(17px);
  }
}

@keyframes green-rectangle-anim {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes red-triangle-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(25px) rotate(-53deg);
  }
}

@keyframes yellow-semicircle-anim {
  40% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(40px) rotate(-1deg);
  }
}

@keyframes grey-rounded-rectangle-anim {
  65% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-48px) rotate(-75deg);
  }
}

#background {
  height: 101vh;
  left: 50vw;
  /* min-height: 700px;
  min-width: 1024px; */
  position: absolute;
  top: 50vh;
  transform: translate(-50vw, -50vh);
  width: 101vw;
  z-index: 10;
}

img,
span {
  position: absolute;
}

#blue-circle-container {
  animation: blue-circle-anim-x 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  left: calc(13% - 50px);
  top: calc(18% - 26px);
}

#blue-circle-container::after {
  mask: require("@/assets/svg/blue_circle.svg") no-repeat top left;
  -webkit-mask: require("@/assets/svg/blue_circle.svg") no-repeat top left;
  animation: blue-circle-anim-y 9s cubic-bezier(0.25, 0, 0.2, 1) infinite;
  background-color: var(--navi-shape-blue-color);
  content: " ";
  height: 43px;
  position: absolute;
  width: 43px;
}

#yellow-dots {
  mask: url("~@/assets/svg/yellow_dots.svg") no-repeat top left;
  -webkit-mask: url("~@/assets/svg/yellow_dots.svg") no-repeat top left;
  background-color: var(--navi-shape-yellow-dots-color);
  content: " ";
  height: 57px;
  left: 13%;
  top: 18%;
  width: 76px;
}

#grey-rounded-rectangle {
  mask: url("~@/assets/svg/grey_rounded_rectangle.svg") no-repeat top left;
  -webkit-mask: url("~@/assets/svg/grey_rounded_rectangle.svg") no-repeat top left;
  animation: grey-rounded-rectangle-anim 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background-color: var(--navi-shape-grey-color);
  content: " ";
  height: 132px;
  left: -42px;
  top: 45%;
  width: 132px;
}

#red-triangle {
  mask: url("~@/assets/svg/red_triangle.svg") no-repeat bottom left;
  -webkit-mask: url("~@/assets/svg/red_triangle.svg") no-repeat bottom left;
  animation: red-triangle-anim 9.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background-color: var(--navi-shape-red-color);
  bottom: 15%;
  content: " ";
  height: 74px;
  left: 12%;
  width: 65px;
}

#yellow-semicircle {
  mask: url("~@/assets/svg/yellow_semicircle.svg") no-repeat top right;
  -webkit-mask: url("~@/assets/svg/yellow_semicircle.svg") no-repeat top right;
  animation: yellow-semicircle-anim 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background-color: var(--navi-shape-yellow-semicircle-color);
  content: " ";
  height: 171px;
  right: 28.5%;
  top: -50px;
  transform: rotate(-7deg);
  width: 211px;
  cursor: pointer;
}

#green-rectangle {
  mask: url("~@/assets/svg/green_rectangle.svg") no-repeat bottom right;
  -webkit-mask: url("~@/assets/svg/green_rectangle.svg") no-repeat bottom right;
  animation: green-rectangle-anim 40s infinite linear;
  background-color: var(--navi-shape-green-color);
  bottom: 8%;
  content: " ";
  height: 371px;
  right: -155px;
  width: 371px;
}

#grey-oval {
  mask: url("~@/assets/svg/grey_oval.svg") no-repeat bottom right;
  -webkit-mask: url("~@/assets/svg/grey_oval.svg") no-repeat bottom right;
  background-color: var(--navi-shape-grey-color);
  bottom: calc(8% + 24px);
  content: " ";
  height: 100px;
  mix-blend-mode: multiply;
  right: 148px;
  width: 100px;
}

@media (prefers-color-scheme: dark) {
  #grey-oval {
    mix-blend-mode: screen;
  }
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}

.icon-scroll {
  width: 40px;
  zoom: 0.8;
  height: 70px;
  margin-left: -20px;
  top: calc(115vh);
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #313131;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 500ms ease-out;
}

.fade-hide {
  opacity: 0;
}

.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #313131;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}

@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
}
</style>