<template>
    <div class="columns">
        <div class="column is-half" v-bind:class="{ reverse: !odd }">
            <h2 class="title is-1">
              {{ project.name }}
            </h2>
            <h2 class="subtitle is-4" v-html="project.content"></h2>
            <!-- <a style=\"zoom:.25;top:80px;position:relative;\" href=\"https://play.google.com/store/apps/details?id=app.netlob.magiscore&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\"><img alt=\"Get it on Google Play\" src=\"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png\"/></a> -->
            <div>
                <span class="is-inline subtitle is-5">Tags:   </span>
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
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  components: {
    // Header
  },
  props: {
    project: Object,
    odd: Boolean
  }
}
</script>

<style lang="scss" scoped>
h2.title {
    font-weight: bold;
}
.subtitle {
    font-weight: normal;
}
.reverse {
    order: 1;
}
.columns {
    margin-top: 50px;
}
</style>