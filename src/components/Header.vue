<template>
    <div>
        <div class="text-center title">
            <h1 :class="{'has-text-white': this.$root.$children[0].darkTheme}">Sjoerd Bolten</h1>
            <h2 :class="{'has-text-white': this.$root.$children[0].darkTheme}">aka Netlob</h2>
            <!-- <span> -->
            <div class="columns is-8 is-desktop is-centered">
                <span class="column status" v-html="status.status"></span>
                <a class="column github" href="https://github.com/netlob" @click="logContact('github')" target="blank"><span class="is-size-3" :class="{'has-text-white': this.$root.$children[0].darkTheme}">GitHub</span></a>
                <a class="column discord" @click="discordPopup" target="blank"><img class="is-inline" src="~@/assets/svg/discord.svg" alt=""></a>
                <a class="column linkedin" href="https://www.linkedin.com/in/sjoerdbolten/"  @click="logContact('linkedin')" target="blank" :class="{inverted: this.$root.$children[0].darkTheme}"><img class="is-inline" src="~@/assets/svg/linkedin.svg" alt=""></a>
            </div>
            <!-- </span> -->
        </div>
    </div>
</template>

<script>export default {
  components: {
  },
  data() {
        return {
            status: {}
        }
    },
    methods: {
        fetchStatus() {
            fetch("https://sjoerd.dev/html/status")
                .then(_ => _.json())
                .then(_ => this.status = _)
        },
        discordPopup() {
            this.logContact("discord");
            alert("Add me on Discord: Sjoerd#1300 :)");
        },
        logContact(method) {
            this.$gtag.event('contact', { method: method });
        },
    },
    mounted() {
        this.fetchStatus()
    }
}
</script>

<style lang="scss" scoped>
.title {
    position: absolute;
    top: 30vh;
    width: 100vw;
    z-index: 10;
    text-align: center;
}

.title > h1 {
    font-family: "Montserrat Alternates", sans-serif;
    color: var(--navi-shape-red-color);
    color: #573ebc;
    font-weight: 800;
    font-size: 12vh;
}

.title > .columns {
    font-weight: 700;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -15vh;
    width: 100vw;
}

.title > .columns > a {
    color: black;
}

.title > .columns > a:hover {
    color: rgba($color: #000000, $alpha: .7);
}

.title > .columns > a > img {
    height: 50px;
}

.discord {
    position: relative;
    top: 1px;
    left: -3px;
}

.linkedin {
    position: relative;
    top: 3px;
    left: -3px;
    zoom: .85;
}

.github {
    position: relative;
    top: 8px;
}

@media only screen and (min-width: 1025px) {
    .is-desktop .column {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%;
    }
}

@media only screen and (max-width: 1025px) {
    .title > .columns {
        bottom: -30vh;
        left: 10px;
    }
}

@media only screen and (max-width: 800px) {
    .title > h1 {
        font-size: 12vh;
    }

    .columns .column {
        position: relative;
        margin-top: 10px;
        top: 10px;
    }

    .discord {
        top: -3px !important;
        left: 2px !important;
    }

    .status {
        left: 5px !important;
    }

    .github {
        left: 2px !important;
    }

    .linkedin {
        top: -18px !important;
        left: 5px !important;
        zoom: .7 !important;
    }
}

@media only screen and (max-width: 600px) {
    .title {
        top: 20vh;
    }

    .title > h1 {
        font-size: 9vh;
    }

    .column {
        zoom: 0.8;
    }

    .title > .columns {
        left: 10px;
        bottom: -50vh !important;
    }
}
</style>

<style lang="scss">
.inverted {
    filter: invert(1);
}
</style>