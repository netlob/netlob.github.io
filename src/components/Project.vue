<template>
    <div class="project">
        <div class="columns">
            <div class="column is-half" v-bind:class="{ reverse: !(index % 2 == 0) }">
                <div class="columns svg-divider-container">
                    <svg class="column svg-divider" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="-10 0 200 50" width="100" height="100"> <defs> <path d="M183.78 30.64C165.41 30.64 156.22 10.64 137.84 10.64C119.46 10.64 110.27 30.64 91.89 30.64C73.51 30.64 64.32 10.64 45.95 10.64C27.57 10.64 18.38 30.64 0 30.64" id="gEK2QeZAN"></path> </defs> <g> <g> <g> <use xlink:href="#gEK2QeZAN" opacity="1" fill="#000000" fill-opacity="0"></use> <g> <use xlink:href="#gEK2QeZAN" opacity="1" fill-opacity="0" :stroke="project.color" stroke-width="20" stroke-opacity="1"></use> </g> </g> </g> </g> </svg>
                </div>
                <h2 class="title is-1" :class="{'has-text-white': this.$root.$children[0].darkTheme}">
                    {{ project.name }}
                </h2>
                <h2 class="subtitle is-4 is-font-regular" :class="{'has-text-white-ter': this.$root.$children[0].darkTheme}" v-html="project.content"></h2>
                <!-- <a style=\"zoom:.25;top:80px;position:relative;\" href=\"https://play.google.com/store/apps/details?id=app.netlob.magiscore&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\"><img alt=\"Get it on Google Play\" src=\"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png\"/></a> -->
                <div>
                    <span class="is-inline subtitle is-5" :class="{'has-text-white': this.$root.$children[0].darkTheme}">Tags:   </span>
                    <div class="tags are-medium is-inline">
                        <span class="tag is-link " v-for="tag in project.tags" :key="tag">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <img :src="project.image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: Object,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
h2.title {
    font-weight: bold;
}

.svg-divider {
    position: relative;
    top: 30px;
    left: -5px;
    zoom: 1.3;
    height: 82px;
    width: 100px;
}

.project {
    position: relative;
}

@media only screen and (min-width: 770px) {
    .reverse {
        order: 1;
    }
    .project > .columns {
        margin-top: 100px;
    }
    .svg-divider {
        // display: none;
        margin-top: -45px;
        left: -3px;
        height: 42px;
        width: 10px;
        float: left;
    }

    .svg-divider-container {
        position: relative;
        left: calc(-50% + 49px);
        top: -20px;
    }
}
</style>

<style lang="scss">
.is-font-regular * {
    font-weight: normal;
    font-family: "AvertaStd-Regular", sans-serif !important;
}
.is-font-bold * {
    font-family: "AvertaStd-Bold", sans-serif !important;
}
</style>