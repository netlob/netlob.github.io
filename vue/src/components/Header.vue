<template>
    <div>
        <h1 class="text-center title">
            netlob
            <!-- <span>
                test
            </span> -->
        </h1>
    </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  components: {
    // Header
  }
}
</script>

<style lang="scss" scoped>
h1.title {
    font-family: "Montserrat Alternates", sans-serif;
    color: var(--navi-shape-red-color);
    color: #573ebc;
    font-weight: 800;
    font-size: 20vh;
    /* left: 50vw; */
    position: absolute;
    top: 30vh;
    /* transform: translateX(-50vw); */
    width: 100vw;
    z-index: 10;
    text-align: center;
}

h1.title>span {
    font-weight: 700;
    font-size: 4vh;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    //   display: none;
}

@media only screen and (max-width: 800px) {
  h1.title {
    font-size: 12vh;
  }
}

@media only screen and (max-width: 600px) {
  h1.title {
    font-size: 9vh;
  }
}
</style>