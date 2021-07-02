<template>
    <section class="container">
        <h2 class="title is-0 has-text-centered"  :class="{'has-text-white': this.$root.$children[0].darkTheme}">
            Portfolio
        </h2>
        <Project v-for="(project, index) in projects" :key="project.name" :project="project" :index="index" />
        <h2 class="title is-3 has-text-centered mt-5"  :class="{'has-text-white': this.$root.$children[0].darkTheme}">
            And many more (smaller) projects can be found on <a href="https://github.com/Netlob" target="blank">my GitHub</a>!
        </h2>
    </section>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'

export default {
    components: {
        Project
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchData() {
            fetch("https://sjoerd.dev/html/projects")
                .then(_ => _.json())
                .then(_ => this.projects = _)
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style lang="scss" scoped>
.is-0 {
    font-size: 4rem;
}

.container {
    padding: 20px;
}

.mt-5 {
    margin-top: 100px;
}
</style>