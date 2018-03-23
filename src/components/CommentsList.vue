<template>
    <ul>
        <li v-for="(comment, index) in fetchedData" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
    import DataSource from '../store/source'

    export default {
        methods: {
            selectData() {
                return DataSource.getComments()
            }
        }
    }
</script>
