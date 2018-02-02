<template>
    <ul>
        <li v-for="(comment, index) in comments" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
    import DataSource from '../store/source.js'

    export default {
        name: 'comments-list',
        data() {
            return {
                comments: DataSource.getComments()
            }
        },
        methods: {
            handleChange() {
                this.comments = DataSource.getComments()
            }
        },
        mounted() {
            DataSource.addChangeListener(this.handleChange)
        },
        beforeDestroy() {
            DataSource.removeChangeListener(this.handleChange)
        }
    }
</script>
