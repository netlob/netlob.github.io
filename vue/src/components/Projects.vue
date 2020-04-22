<template>
    <section class="container">
        <h2 class="title is-0 has-text-centered">
            Projects
        </h2>
        <Project v-for="(project, index) in projects" :key="project.name" :project="project" :odd="index % 2 == 0" />
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
            fetch("https://api.jsonbin.io/b/5e9f94202940c704e1dc5f72/latest")
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
</style>