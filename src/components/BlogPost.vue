<template>
    <div>
        <h1>{{greeting}}</h1>
        <button @click="$emit('click', 'aloha')">CLICK ME!</button>
        <br/>
        {{fetchedData}}
    </div>
</template>

<script>
    import DataSource from '../store/source'

    export default {
        data() {
            return {
                greeting: ''
            }
        },
        props: ['id'],
        methods: {
            selectData() {
                return DataSource.getBlogPost(this.id)
            }
        },
        mounted() {
            this.greeting = "How you doin'"
        }
    }
</script>
