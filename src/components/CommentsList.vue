<template>
    <ul>
        <li v-for="(comment, index) in fetchedData" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
    import withSubscription from '../mixins/withSubscription'
    import DataSource from '../store/source'

    export default {
        mixins: [withSubscription],
        methods: {
            selectData() {
                return DataSource.getComments()
            }
        }
    }
</script>
