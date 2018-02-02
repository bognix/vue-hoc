<template>
    <div>
        {{blogPost}}
    </div>
</template>

<script>
    import DataSource from '../store/source'

    export default {
        data() {
            return {
                blogPost: DataSource.getBlogPost()
            }
        },
        methods: {
            handleChange() {
                this.blogPost = DataSource.getBlogPost()
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
