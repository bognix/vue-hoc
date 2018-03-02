<template>
    <div>
        <button @click="$emit('click', 'aloha')">CLICK ME!</button>
        <br/>
        {{fetchedData}}
    </div>
</template>

<script>
    import withSubscription from '../mixins/withSubscription'
    import DataSource from '../store/source'

    export default {
        props: ['id'],
        mixins: [withSubscription],
        methods: {
            selectData() {
                return DataSource.getBlogPost(this.id)
            }
        },
    }
</script>
